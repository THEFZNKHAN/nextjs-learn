"use server";

import { revalidatePath } from "next/cache";
import bcrypt from "bcrypt";
import { signIn, signOut } from "@/lib/auth";
import { Post, User } from "./models";
import { connectToDb } from "./utils";

export const addPost = async (
    formData: Iterable<readonly [PropertyKey, any]>
) => {
    const { title, desc, slug, userId } = Object.fromEntries(formData);
    try {
        await connectToDb();
        const newPost = new Post({
            title,
            desc,
            slug,
            userId,
        });
        await newPost.save();
        console.log("Save to the db");
        revalidatePath("/blog");
    } catch (error) {
        return { error: "Something went wrong" };
    }
};

export const deletePost = async (
    formData: Iterable<readonly [PropertyKey, any]>
) => {
    const { id } = Object.fromEntries(formData);
    try {
        await connectToDb();
        await Post.findByIdAndDelete(id);
        console.log("Deleted form the db");
        revalidatePath("/blog");
    } catch (error) {
        return { error: "Something went wrong" };
    }
};

export const handleGithubLogin = async () => {
    "use server";
    await signIn("github");
};

export const handleLogout = async () => {
    "use server";
    await signOut();
};

export const register = async (
    formData: Iterable<readonly [PropertyKey, any]>
) => {
    const { username, email, password, img, passwordAgain } =
        Object.fromEntries(formData);

    if (password != passwordAgain) {
        return "Password does not match";
    }

    try {
        await connectToDb();
        const user = await User.findOne({ username });
        if (user) {
            return "Username already exists";
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = bcrypt.hash(password, salt);
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            img,
        });
        await newUser.save();
        console.log("Saved to db");
    } catch (error: any) {
        console.log(error);
        return { error: "Something went wrong" };
    }
};

"use server";

import { revalidatePath } from "next/cache";
import bcrypt from "bcryptjs";
import { signIn, signOut } from "@/lib/auth";
import { Post, User } from "./models";
import { connectToDb } from "./utils";

export const addPost = async (
    prevState: any,
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
        console.log("Save to db");
        revalidatePath("/blog");
        revalidatePath("/admin");
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
        console.log("Deleted form db");
        revalidatePath("/blog");
        revalidatePath("/admin");
    } catch (error) {
        return { error: "Something went wrong" };
    }
};

export const addUser = async (
    prevState: any,
    formData: Iterable<readonly [PropertyKey, any]>
) => {
    const { username, email, password, img } = Object.fromEntries(formData);
    try {
        await connectToDb();
        const newUser = new User({
            username,
            email,
            password,
            img,
        });
        await newUser.save();
        console.log("Save to db");
        revalidatePath("/admin");
    } catch (error) {
        return { error: "Something went wrong" };
    }
};

export const deleteUser = async (
    formData: Iterable<readonly [PropertyKey, any]>
) => {
    const { id } = Object.fromEntries(formData);
    try {
        await connectToDb();
        await Post.deleteMany({ userId: id });
        await User.findByIdAndDelete(id);
        console.log("Deleted form db");
        revalidatePath("/admin");
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
    previousState: any,
    formData: Iterable<readonly [PropertyKey, any]>
) => {
    const { username, email, password, img, passwordRepeat } =
        Object.fromEntries(formData);

    if (password != passwordRepeat) {
        return { error: "Passwords do not match" };
    }

    try {
        await connectToDb();
        const user = await User.findOne({ username });
        if (user) {
            return { error: "Username already exists" };
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            img,
        });
        await newUser.save();
        console.log("Saved to db");
        return { success: true };
    } catch (error: any) {
        console.log(error);
        return { error: "Something went wrong" };
    }
};

export const login = async (
    previousState: any,
    formData: Iterable<readonly [PropertyKey, any]>
) => {
    const { username, password } = Object.fromEntries(formData);

    try {
        await signIn("credentials", { username, password });
    } catch (error: any) {
        console.log(error);
        if (error.message.includes("CredentialsSignin")) {
            return { error: "Invalid username or password" };
        }
        throw error;
    }
};

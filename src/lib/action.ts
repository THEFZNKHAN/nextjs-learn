"use server";

import { revalidatePath } from "next/cache";
import { Post } from "./models";
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
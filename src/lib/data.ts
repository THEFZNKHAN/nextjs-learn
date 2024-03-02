import { ObjectId } from "mongoose";
import { unstable_noStore as noStore } from "next/cache";

import { Post, User } from "./models";
import { connectToDb } from "./utils";

export const getPost = async (slug: string) => {
    try {
        connectToDb();
        const post = await Post.findOne({ slug });
        return post;
    } catch (err) {
        throw new Error("Failed to fetch post!");
    }
};

export const getPosts = async () => {
    try {
        connectToDb();
        const posts = await Post.find();
        return posts;
    } catch (err) {
        throw new Error("Failed to fetch posts!");
    }
};

export const getUser = async (id: ObjectId) => {
    noStore();
    try {
        connectToDb();
        const user = await User.findById(id);
        return user;
    } catch (err) {
        throw new Error("Failed to fetch user!");
    }
};

export const getUsers = async () => {
    try {
        connectToDb();
        const users = await User.find();
        return users;
    } catch (err) {
        throw new Error("Failed to fetch users!");
    }
};

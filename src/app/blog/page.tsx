import React from "react";
import PostCard from "@/components/postCard/PostCard";
import { getPosts } from "@/lib/data";
import { ObjectId } from "mongoose";
import { Metadata } from "next";

interface postType {
    _id: ObjectId;
    userId: string;
    title: string;
    desc: string;
    slug: string;
    img: string;
}

export const metadata: Metadata = {
    title: "Blog Page",
    description: "Blog Description",
};

// FETCH DATA FROM AN API
const getData = async () => {
    const res = await fetch("http://localhost:3000/api/blog", {
        next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error("Something went wrong");
    return res.json();
};

const BlogPage = async () => {
    // const posts: postType[] = (await getPosts()) as postType[];
    const posts: postType[] = await getData();

    return (
        <div className="flex flex-wrap gap-5">
            {posts.map((post) => (
                <div
                    className="w-[30%] max-xl:w-2/5 max-md:w-full"
                    key={post._id.toString()}
                >
                    <PostCard post={post} />
                </div>
            ))}
        </div>
    );
};

export default BlogPage;

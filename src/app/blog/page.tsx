import React from "react";
import PostCard from "@/components/postCard/PostCard";
import { getPosts } from "@/lib/data";
import { ObjectId } from "mongoose";

interface postType {
    _id: ObjectId;
    userId: string;
    title: string;
    desc: string;
    slug: string;
    img: string;
}

const BlogPage: React.FC = async () => {
    const posts: postType[] = (await getPosts()) as postType[];

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

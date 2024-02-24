import React from "react";
import PostCard from "@/components/postCard/PostCard";

// FETCH DATA WITH AN API
const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    // const res = await fetch("https://jsonplaceholder.typicode.com/posts, {next:{revalidate:3600"}); // for refresh dat ain every hour
    // const res = await fetch("https://jsonplaceholder.typicode.com/posts, {cache: "no-store"}); // for don't store the cache in the website

    if (!res.ok) {
        throw new Error("Something went wrong");
    }
    return res.json();
};

interface postsType {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const BlogPage: React.FC = async () => {
    const posts: postsType[] = await getData();

    return (
        <div className="flex flex-wrap gap-5">
            {posts.map((post) => (
                <div
                    className="w-[30%] max-xl:w-2/5 max-md:w-full"
                    key={post.id}
                >
                    <PostCard post={post} />
                </div>
            ))}
        </div>
    );
};

export default BlogPage;

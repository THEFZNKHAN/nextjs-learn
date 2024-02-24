import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

interface PostCardProps {
    post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
    return (
        <div className="flex flex-col gap-5 mb-5">
            {/* Top Container */}
            <div className="flex">
                {/* Image Container */}
                <div className="w-11/12 h-96 relative">
                    <Image
                        src="https://images.pexels.com/photos/20293120/pexels-photo-20293120/free-photo-of-azores-portugal.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                        alt=""
                        fill
                        className="object-cover rounded-sm"
                    />
                </div>
                <span className="text-sm rotate-[270deg] m-auto">
                    01.01.2024
                </span>
            </div>

            {/* Bottom Container */}
            <div className="">
                <h1 className="text-2xl mb-4 font-semibold w-11/12">
                    {post.title}
                </h1>
                <p className="text-lg mb-4 font-light text-slate-400 w-11/12">
                    {post.body}
                </p>
                <Link
                    href={`/blog/${post.id}`}
                    className="font-semibold underline"
                >
                    READ MORE
                </Link>
            </div>
        </div>
    );
};

export default PostCard;

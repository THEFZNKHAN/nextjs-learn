import Image from "next/image";
import { Suspense } from "react";
import { getPost } from "@/lib/data";
import { ObjectId, Schema } from "mongoose";
import PostUser from "@/components/postUser/postUser";

interface PostType {
    _id: ObjectId;
    userId: ObjectId;
    title: string;
    desc: string;
    slug: string;
    img: string;
}

interface SinglePostCardProps {
    slug: string;
}

export const generateMetadata = async ({
    params,
}: {
    params: { slug: string };
}) => {
    const { slug } = params;

    const post = (await getPost(slug)) || ({} as PostType);

    return {
        title: post.title,
        description: post.desc,
    };
};

// FETCH DATA FROM AN API
const getData = async (slug: string) => {
    const res = await fetch(`https://localhost:3000/api/blog/${slug}`, {
        next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error("Something went wrong");
    return res.json();
};

const SinglePostPage: React.FC<SinglePostCardProps> = async ({ slug }) => {
    // const post = (await getPost(slug)) || ({} as PostType);
    const post = (await getData(slug)) || ({} as PostType);
    return (
        <div className="flex gap-24">
            {/* Image Container */}
            {post.img && (
                <div className="flex-1 relative h-[calc(100vh_-_200px)] max-md:hidden">
                    <Image
                        src={post.img}
                        alt=""
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            {/* Text Container */}
            <div className="flex-[2] flex flex-col gap-12">
                <h1 className="text-6xl font-bold">{post.title}</h1>

                {/* Detail Container */}
                <div className="flex gap-5">
                    {/* Detail Text Container */}
                    {post && post.userId && (
                        <Suspense fallback={<div>Loading...</div>}>
                            <PostUser
                                userId={post.userId as Schema.Types.ObjectId}
                                _id={post._id}
                                username={""}
                                email={""}
                                password={""}
                                isAdmin={false}
                            />
                        </Suspense>
                    )}

                    <div className="flex flex-col gap-2.5">
                        <span className="text-slate-400 font-bold text-lg">
                            Published
                        </span>
                        <span className="font-medium">01.01.2024</span>
                    </div>
                </div>

                {/* Description Container */}
                <div className="text-xl">{post.desc}</div>
            </div>
        </div>
    );
};

export default SinglePostPage;

import PostUser from "@/components/postUser/postUser";
import Image from "next/image";
import { Suspense } from "react";

// FETCH DATA WITH AN API
const getData = async ({ slug }: any) => {
    try {
        const res = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${slug}`
        );

        if (!res.ok) {
            throw new Error(`Failed to fetch post`);
        }

        return res.json();
    } catch (error) {
        throw new Error(`Error fetching post data: ${error}`);
    }
};

const SinglePostPage = async ({ params }: any) => {
    const { slug } = params;

    const post = await getData(slug);

    return (
        <div className="flex gap-24">
            {/* Image Container */}
            <div className="flex-1 relative h-[calc(100vh_-_200px)] max-md:hidden">
                <Image
                    src="https://images.pexels.com/photos/20293120/pexels-photo-20293120/free-photo-of-azores-portugal.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                    alt=""
                    fill
                    className="object-cover"
                />
            </div>

            {/* Text Container */}
            <div className="flex-[2] flex flex-col gap-12">
                <h1 className="text-6xl font-bold">{post.title}</h1>

                {/* Detail Container */}
                <div className="flex gap-5">
                    <Image
                        src="https://images.pexels.com/photos/20293120/pexels-photo-20293120/free-photo-of-azores-portugal.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                        alt=""
                        width={50}
                        height={50}
                        className="object-cover rounded-[50%]"
                    />

                    {/* Detail Text Container */}
                    <Suspense fallback={<div>Loading...</div>}>
                        <PostUser userId={post.userId} />
                    </Suspense>
                    <div className="flex flex-col gap-2.5">
                        <span className="text-slate-400 font-bold text-lg">
                            Published
                        </span>
                        <span className="font-medium">01.01.2024</span>
                    </div>
                </div>

                {/* Description Container */}
                <div className="text-xl">{post.body}</div>
            </div>
        </div>
    );
};

export default SinglePostPage;

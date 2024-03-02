import Image from "next/image";
import { getPosts } from "@/lib/data";
import { deletePost } from "@/lib/action";

const AdminPosts = async () => {
    const posts = await getPosts();

    return (
        <div>
            <h1 className="text-2xl font-bold">Posts</h1>
            {posts.map((post) => (
                <div
                    className="my-5 mx-0 flex items-center justify-between gap-5"
                    key={post.id}
                >
                    <div className="flex items-center gap-20">
                        <Image
                            src={post.img || "/noAvatar.png"}
                            alt=""
                            width={50}
                            height={50}
                        />
                        <span>{post.title}</span>
                    </div>
                    <form action={deletePost}>
                        <input type="hidden" name="id" value={post.id} />
                        <button className="py-1 px-2 bg-red-500 text-[var(--textColor)] rounded border-none font-semibold">
                            Delete
                        </button>
                    </form>
                </div>
            ))}
        </div>
    );
};

export default AdminPosts;

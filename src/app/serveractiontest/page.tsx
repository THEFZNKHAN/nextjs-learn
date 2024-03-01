import { addPost, deletePost } from "@/lib/action";

const ServerActionTestPage = () => {
    return (
        <div>
            <form
                action={addPost}
                method="POST"
                className="flex flex-col bg-white p-4 rounded-xl"
            >
                <input
                    type="text"
                    placeholder="title"
                    name="title"
                    className="text-white bg-[var(--bg)] text-lg m-3 p-4 rounded-lg"
                />
                <input
                    type="text"
                    placeholder="desc"
                    name="desc"
                    className="text-white bg-[var(--bg)] text-lg m-3 p-4 rounded-lg"
                />
                <input
                    type="text"
                    placeholder="slug"
                    name="slug"
                    className="text-white bg-[var(--bg)] text-lg m-3 p-4 rounded-lg"
                />
                <input
                    type="text"
                    placeholder="userId"
                    name="userId"
                    className="text-white bg-[var(--bg)] text-lg m-3 p-4 rounded-lg"
                />
                <button className="text-white bg-green-600 m-3 p-4 rounded-lg text-xl font-semibold hover:bg-green-700">
                    Create
                </button>
            </form>
            <br />
            <form
                action={deletePost}
                method="DELETE"
                className="flex flex-col bg-white p-4 rounded-xl"
            >
                <input
                    type="text"
                    placeholder="postId"
                    name="id"
                    className="text-white bg-[var(--bg)] text-lg m-3 p-4 rounded-lg"
                />
                <button className="text-white bg-red-600 m-3 p-4 rounded-lg text-xl font-semibold hover:bg-red-700">
                    Delete
                </button>
            </form>
        </div>
    );
};

export default ServerActionTestPage;

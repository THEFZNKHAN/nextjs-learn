import { addPost, deletePost } from "@/lib/action";

const ServerActionTestPage = () => {
    return (
        <div>
            <form
                action={addPost}
                method="POST"
                className="flex flex-col bg-black text-black"
            >
                <input type="text" placeholder="title" name="title" />
                <input type="text" placeholder="desc" name="desc" />
                <input type="text" placeholder="slug" name="slug" />
                <input type="text" placeholder="userId" name="userId" />
                <button className="text-white">Create</button>
            </form>
            <br />
            <form
                action={deletePost}
                method="DELETE"
                className="flex flex-col text-black"
            >
                <label htmlFor="postId">
                    <input type="text" placeholder="postId" name="id" />
                </label>
                <button className="text-white bg-black">Delete</button>
            </form>
        </div>
    );
};

export default ServerActionTestPage;

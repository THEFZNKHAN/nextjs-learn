// FETCH DATA WITH AN API
const getUsers = async ({ userId }: any) => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`,
        { cache: "no-store" }
    );

    if (!res.ok) {
        throw new Error("Something went wrong");
    }
    return res.json();
};

const PostUser = async ({ userId }: any) => {
    const user = await getUsers(userId);

    return (
        <div className="flex flex-col gap-2.5 mx-2">
            <span className="text-slate-400 font-bold text-lg">Author</span>
            <span className="font-medium">{user.username}</span>
        </div>
    );
};

export default PostUser;

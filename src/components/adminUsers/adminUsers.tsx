import Image from "next/image";
import { getUsers } from "@/lib/data";
import { deleteUser } from "@/lib/action";

const AdminUsers = async () => {
    const users = await getUsers();

    return (
        <div>
            <h1 className="text-2xl font-bold">Users</h1>
            {users.map((user) => (
                <div
                    className="my-5 mx-0 flex items-center justify-between gap-5"
                    key={user.id}
                >
                    <div className="flex items-center gap-20">
                        <Image
                            src={user.img || "/noAvatar.png"}
                            alt=""
                            width={50}
                            height={50}
                            className="rounded-full"
                        />
                        <span>{user.username}</span>
                    </div>
                    <form action={deleteUser}>
                        <input type="hidden" name="id" value={user.id} />
                        <button className="py-1 px-2 bg-red-500 text-[var(--textColor)] rounded border-none font-semibold">
                            Delete
                        </button>
                    </form>
                </div>
            ))}
        </div>
    );
};

export default AdminUsers;

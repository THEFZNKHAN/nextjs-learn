import { ObjectId } from "mongoose";
import { getUser } from "@/lib/data";
import Image from "next/image";

interface PostUserProps {
    _id: ObjectId;
    username: string;
    email: string;
    password: string;
    isAdmin: boolean;
}

interface PostUserProps {
    userId: ObjectId;
}

const PostUser: React.FC<PostUserProps> = async ({ userId }) => {
    const user = await getUser(userId);

    return (
        <div className="flex items-center gap-5">
            <Image
                src={user?.img ? user.img : "/noavatar.png"}
                alt=""
                width={50}
                height={50}
                fill
                className="rounded-ful object-cover"
            />
            <div className="flex flex-col gap-2.5 mx-2">
                <span className="text-slate-400 font-bold text-lg">Author</span>
                <span className="font-medium">{user?.username}</span>
            </div>
        </div>
    );
};

export default PostUser;

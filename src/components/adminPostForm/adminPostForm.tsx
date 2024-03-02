"use client";

import { addPost } from "@/lib/action";
import { useFormState } from "react-dom";

const AdminPostForm = (userId: any) => {
    const [state, formAction] = useFormState(addPost, undefined);

    return (
        <form action={formAction} className="flex flex-col gap-5">
            <h1 className="text-2xl font-bold">Add New Post</h1>
            <input type="hidden" name="userId" value={userId} />
            <input
                type="text"
                name="title"
                placeholder="Title"
                className="p-5 bg-[var(--bgSoft)] border-none rounded text-[var(--textColor)]"
            />
            <input
                type="text"
                name="slug"
                placeholder="slug"
                className="p-5 bg-[var(--bgSoft)] border-none rounded text-[var(--textColor)]"
            />
            <input
                type="text"
                name="img"
                placeholder="img"
                className="p-5 bg-[var(--bgSoft)] border-none rounded text-[var(--textColor)]"
            />
            <textarea
                name="desc"
                placeholder="desc"
                rows={10}
                className="p-5 bg-[var(--bgSoft)] border-none rounded text-[var(--textColor)]"
            />
            <button className="p-5 bg-[var(--btn)] border-none rounded text-[var(--textColor)] font-bold text-lg">
                Add
            </button>
            {state && state.error}
        </form>
    );
};

export default AdminPostForm;

"use client";

import { addUser } from "@/lib/action";
import { useFormState } from "react-dom";

const AdminUserForm = () => {
    const [state, formAction] = useFormState(addUser, undefined);

    return (
        <form action={formAction} className="flex flex-col gap-5">
            <h1 className="text-2xl font-bold">Add New User</h1>
            <input
                type="text"
                name="username"
                placeholder="username"
                className="p-5 bg-[var(--bgSoft)] border-none rounded text-[var(--textColor)]"
            />
            <input
                type="text"
                name="email"
                placeholder="email"
                className="p-5 bg-[var(--bgSoft)] border-none rounded text-[var(--textColor)]"
            />
            <input
                type="password"
                name="password"
                placeholder="password"
                className="p-5 bg-[var(--bgSoft)] border-none rounded text-[var(--textColor)]"
            />
            <input
                type="text"
                name="img"
                placeholder="image"
                className="p-5 bg-[var(--bgSoft)] border-none rounded text-[var(--textColor)]"
            />
            <select
                name="isAdmin"
                className="p-5 bg-[var(--bgSoft)] border-none rounded text-[var(--textColor)]"
            >
                <option value="false">Is Admin?</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
            </select>
            <button className="p-5 bg-[var(--btn)] border-none rounded text-[var(--textColor)] font-bold text-lg">
                Add
            </button>
            {state && state.error}
        </form>
    );
};

export default AdminUserForm;

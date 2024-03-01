"use client";

import { login } from "@/lib/action";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import Link from "next/link";

const LoginForm = () => {
    const router = useRouter();

    const [state, formActon] = useFormState(login, undefined);
    return (
        <form action={formActon} className="flex flex-col text-center gap-7">
            <input
                type="text"
                placeholder="username"
                name="username"
                className="p-5 bg-[var(--bg)] text-[var(--textColor)] border-none rounded"
            />
            <input
                type="password"
                placeholder="password"
                name="password"
                className="p-5 bg-[var(--bg)] text-[var(--textColor)] border-none rounded"
            />
            <button
                type="submit"
                className="p-5 cursor-pointer bg-[var(--btn)] text-[var(--textColor)] font-bold border-none rounded"
            >
                Login
            </button>
            {state?.error}
            <Link href="/register">
                {"Don't have an account?"} <b>Register</b>
            </Link>
        </form>
    );
};

export default LoginForm;

"use client";

import { register } from "@/lib/action";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import Link from "next/link";

const RegisterForm = () => {
    const router = useRouter();

    const [state, formActon] = useFormState(register, undefined);

    useEffect(() => {
        state?.success && router.push("/login");
    }, [state?.success, router]);

    return (
        <form action={formActon} className="flex flex-col text-center gap-7">
            <input
                type="text"
                placeholder="username"
                name="username"
                className="p-5 bg-[var(--bg)] text-[var(--textColor)] border-none rounded"
            />
            <input
                type="email"
                placeholder="email"
                name="email"
                className="p-5 bg-[var(--bg)] text-[var(--textColor)] border-none rounded"
            />
            <input
                type="password"
                placeholder="password"
                name="password"
                className="p-5 bg-[var(--bg)] text-[var(--textColor)] border-none rounded"
            />
            <input
                type="password"
                placeholder="password again"
                name="passwordRepeat"
                className="p-5 bg-[var(--bg)] text-[var(--textColor)] border-none rounded"
            />
            <button
                type="submit"
                className="p-5 cursor-pointer bg-[var(--btn)] text-[var(--textColor)] font-bold border-none rounded"
            >
                Register
            </button>
            {state?.error}
            <Link href="/login">
                Have an account? <b>Login</b>
            </Link>
        </form>
    );
};

export default RegisterForm;

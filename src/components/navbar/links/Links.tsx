"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import NavLink from "./navLink/navLink";
import { handleLogout } from "@/lib/action";
import { auth } from "@/lib/auth";

interface Link {
    title: string;
    path: string;
}

const links: Link[] = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "About",
        path: "/about",
    },
    {
        title: "Contact",
        path: "/contact",
    },
    {
        title: "Blog",
        path: "/blog",
    },
];

const Links = (session: any) => {
    const [open, setOpen] = useState(false);

    // temp
    const isAdmin: boolean = true;

    return (
        <div className="">
            <div className="flex items-center gap-2.5 max-md:hidden">
                {links.map((link) => (
                    <NavLink item={link} key={link.title} />
                ))}
                {session?.user ? (
                    <>
                        {session.user?.isAdmin && (
                            <NavLink
                                item={{ title: "Admin", path: "/admin" }}
                            />
                        )}
                        <form action={handleLogout}>
                            <button className="p-2.5 cursor-pointer font-bold rounded-lg bg-[var(--text)] text-[var(--bg)]">
                                Logout
                            </button>
                        </form>
                    </>
                ) : (
                    <NavLink item={{ title: "Login", path: "/login" }} />
                )}
            </div>
            <Image
                src="/menu.png"
                alt=""
                width={30}
                height={30}
                onClick={() => setOpen((prev) => !prev)}
                className="hidden max-md:block max-md:cursor-pointer"
            />
            {open && (
                <div className="hidden max-md:absolute max-md:top-24 max-md:right-0 max-md:w-1/2 max-md:h-[calc(100vh_-_100px)] max-md:bg-[var(--bg)] max-md:flex max-md:flex-col max-md:items-center max-md:justify-center max-md:gap-2.5">
                    {links.map((link) => (
                        <NavLink item={link} key={link.title} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Links;

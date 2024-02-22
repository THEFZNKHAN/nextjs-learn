"use client";

import Link from "next/link";
import { useState } from "react";

import NavLink from "./navLink/navLink";

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

const Links: React.FC = () => {
    const [open, setOpen] = useState(false);

    // temp
    const session: boolean = true;
    const isAdmin: boolean = true;

    return (
        <div className="">
            <div className="flex items-center gap-2.5 max-md:hidden">
                {links.map((link) => (
                    <NavLink item={link} key={link.title} />
                ))}
                {session ? (
                    <>
                        {isAdmin && (
                            <NavLink
                                item={{ title: "Admin", path: "/admin" }}
                            />
                        )}
                        <button className="p-2.5 cursor-pointer font-bold rounded-lg bg-[var(--text)] text-[var(--bg)]">
                            Logout
                        </button>
                    </>
                ) : (
                    <NavLink item={{ title: "Login", path: "/login" }} />
                )}
            </div>
            <button onClick={() => setOpen((prev) => !prev)} className="hidden max-md:block max-md:cursor-pointer max-md:rounded-lg max-md:p-2 max-md:font-bold max-md:bg-[var(--text)] max-md:text-[var(--bg)]">Menu</button>
            {open && (
                <div className="hidden max-md:absolute max-md:top-24 max-md:right-0 max-md:w-1/2 max-md:h-[calc(100vh_-_100px)] max-md:bg-purple-700 max-md:flex max-md:flex-col max-md:items-center max-md:justify-center max-md:gap-2.5">
                    {links.map((link) => (
                        <NavLink item={link} key={link.title} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Links;

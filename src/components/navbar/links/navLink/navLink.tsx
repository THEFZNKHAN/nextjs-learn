"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
    item: {
        path: string;
        title: string;
    };
}

const NavLink = ({ item }: NavLinkProps) => {
    const pathname: string = usePathname();

    return (
        <Link
            href={item.path}
            className={`min-w-24 p-2.5 rounded-3xl font-medium text-center cursor-pointer ${
                pathname === item.path
                    ? "bg-[var(--text)] text-[var(--bg)]"
                    : ""
            }`}
        >
            {item.title}
        </Link>
    );
};

export default NavLink;

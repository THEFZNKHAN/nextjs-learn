import Link from "next/link";

interface Link {
    title: string;
    path: string;
}

const Links: React.FC = () => {
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

    return (
        <div>
            {links.map((link) => (
                <Link key={link.title} href={link.path}>
                    {link.title}
                </Link>
            ))}
        </div>
    );
};

export default Links;

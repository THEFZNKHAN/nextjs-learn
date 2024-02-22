import Link from "next/link";

const Navbar = () => {
    return (
        <div>
            <div>logo</div>
            <div>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </div>
        </div>
    );
};

export default Navbar;

import Link from "next/link";
import Links from "./links/Links";
import { auth } from "@/lib/auth";

const Navbar = async () => {
    const session = await auth();
    
    return (
        <div className="h-24 flex items-center justify-between z-10">
            <Link href="/" className="text-3xl font-bold">
                Logo
            </Link>
            <div>
                <Links session={session} />
            </div>
        </div>
    );
};

export default Navbar;

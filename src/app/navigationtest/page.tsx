"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const NavigationTestPage = () => {
    // CLIENT SIDE NAVIGATION
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const query = searchParams.get("q");

    const handleClick = () => {
        console.log("Clicked");
        router.push("/");
        // router.refresh();
        // router.replace("/");
        // router.back();
        // router.forward();
    };

    return (
        <div>
            <Link href="/" prefetch={false}>
                Return to Home
            </Link>
            <button onClick={handleClick}>Write and Redirect</button>
        </div>
    );
};

export default NavigationTestPage;

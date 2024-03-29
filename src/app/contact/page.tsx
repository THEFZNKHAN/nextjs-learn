import type { Metadata } from "next";
import Image from "next/image";
// import dynamic from "next/dynamic";

// dynamically calling the HydrationTest component
// const HydrationTestNoSSR = dynamic(() => import("@/components/hydrationTest"), {
//     ssr: false,
// });

export const metadata: Metadata = {
    title: "Contact Page",
    description: "Contact Description",
};

const ContactPage: React.FC = () => {
    return (
        <div className="flex items-center gap-24 max-md:flex-col">
            {/* Image Container */}
            <div className="flex-1 h-[500px] relative">
                <Image
                    src="/contact.png"
                    alt=""
                    fill
                    className="object-contain"
                />
            </div>

            {/* One of way to hide the hydration warning form the side */}
            {/* <div suppressHydrationWarning>Math.random()</div> */}

            {/* Form Container */}
            <div className="flex-1">
                <form action="" className="flex flex-col gap-5">
                    <input
                        type="text"
                        placeholder="Name and Surname"
                        className="p-5 rounded-md border-none outline-none bg-[var(--bgSoft)] text-[var(--text)]"
                    />
                    <input
                        type="text"
                        placeholder="Email Address"
                        className="p-5 rounded-md border-none outline-none bg-[var(--bgSoft)] text-[var(--text)]"
                    />
                    <input
                        type="text"
                        placeholder="Phone Number (Optional)"
                        className="p-5 rounded-md border-none outline-none bg-[var(--bgSoft)] text-[var(--text)]"
                    />
                    <textarea
                        name=""
                        id=""
                        cols={30}
                        rows={10}
                        placeholder="Message"
                        className="p-5 rounded-md border-none outline-none bg-[var(--bgSoft)] text-[var(--text)]"
                    ></textarea>
                    <button className="p-5 bg-[var(--btn)] text-[var(--text)] font-bold text-xl rounded-md border-none">
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;

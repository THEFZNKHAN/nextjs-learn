import Image from "next/image";
import Link from "next/link";

const Home: React.FC = () => {
    return (
        <div className="flex gap-2.5 max-lg:flex-col max-lg:text-center">
            {/* Text Container */}
            <div className="flex-1 flex flex-col gap-12">
                <h1 className="text-8xl font-bold max-md:text-6xl">
                    Creative Thoughts Agency.
                </h1>
                <p className="text-xl max-lg:text-lg">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid voluptatibus architecto corporis quisquam quo
                    dolore!
                </p>

                {/* Buttons */}
                <div className="max-lg:justify-center">
                    <Link href="/about">
                        <button className="p-5 mr-2 min-w-28 border-none rounded-md bg-[var(--btn)] text-[var(--text)] font-semibold">
                            Learn More
                        </button>
                    </Link>
                    <Link href="/contact">
                        <button className="p-5 min-w-28 border-none rounded-md bg-[var(--text)] text-[var(--bg)] font-semibold">
                            Contact
                        </button>
                    </Link>
                </div>

                {/* Brand Container */}
                <div className="relative w-[500px] h-12 grayscale max-md:w-full">
                    <Image src="/brands.png" alt="" fill className="" />
                </div>
            </div>

            {/* Image Container  */}
            <div className="relative flex-1">
                <Image src="/hero.gif" alt="" fill className="object-contain" />
            </div>
        </div>
    );
};

export default Home;

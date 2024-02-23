import Image from "next/image";

const SinglePostPage = () => {
    return (
        <div className="flex gap-24">
            {/* Image Container */}
            <div className="flex-1 relative h-[calc(100vh_-_200px)] max-md:hidden">
                <Image
                    src="https://images.pexels.com/photos/20293120/pexels-photo-20293120/free-photo-of-azores-portugal.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                    alt=""
                    fill
                    className="object-cover"
                />
            </div>

            {/* Text Container */}
            <div className="flex-[2] flex flex-col gap-12">
                <h1 className="text-6xl font-bold">Title</h1>

                {/* Detail Container */}
                <div className="flex gap-5">
                    <Image
                        src="https://images.pexels.com/photos/20293120/pexels-photo-20293120/free-photo-of-azores-portugal.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                        alt=""
                        width={50}
                        height={50}
                        className="object-cover rounded-[50%]"
                    />

                    {/* Detail Text Container */}
                    <div className="flex flex-col gap-2.5 mx-2">
                        <span className="text-slate-400 font-bold text-lg">
                            Author
                        </span>
                        <span className="font-medium">Walter White</span>
                    </div>
                    <div className="flex flex-col gap-2.5">
                        <span className="text-slate-400 font-bold text-lg">
                            Published
                        </span>
                        <span className="font-medium">01.01.2024</span>
                    </div>
                </div>

                {/* Description Container */}
                <div className="text-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam consequuntur molestias reprehenderit ex magni, cumque
                    eaque commodi enim beatae possimus recusandae eius, quo a ea
                    veniam doloribus necessitatibus cupiditate eos.
                </div>
            </div>
        </div>
    );
};

export default SinglePostPage;

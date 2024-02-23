import Image from "next/image";

const ContactPage: React.FC = () => {
    return (
        <div className="flex items-center gap-24">
            {/* Image Container */}
            <div className="flex-1 h-[500px] relative">
                <Image src="/contact.png" alt="" fill className="object-contain" />
            </div>

            {/* Form Container */}
            <div className="flex-1">
                <form action="" className="flex flex-col gap-5">
                    <input type="text" placeholder="Name and Surname" className="p-5 rounded-md border-none outline-none bg-[var(--bgSoft)] text-[var(--text)]" />
                    <input type="text" placeholder="Email Address" className="p-5 rounded-md border-none outline-none bg-[var(--bgSoft)] text-[var(--text)]" />
                    <input type="text" placeholder="Phone Number (Optional)" className="p-5 rounded-md border-none outline-none bg-[var(--bgSoft)] text-[var(--text)]" />
                    <textarea name="" id="" cols={30} rows={10} placeholder="Message" className="p-5 rounded-md border-none outline-none bg-[var(--bgSoft)] text-[var(--text)]"></textarea>
                    <button className="p-5 bg-[var(--btn)] text-[var(--text)] font-bold text-xl rounded-md border-none">Send</button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;

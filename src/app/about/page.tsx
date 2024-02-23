import Image from "next/image";

const AboutPage: React.FC = () => {
  return (
    <div className="flex gap-24">
      {/* Text Container */}
      <div className="flex-1 flex flex-col gap-12">
        <h2 className="text-[var(--btn)] text-2xl font-semibold">About Agency</h2>
        <h1 className="text-5xl font-bold">We create digital ideas that are bigger, bolder, braver and better.</h1>
        <p className="text-xl font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe reiciendis neque consectetur perspiciatis quibusdam voluptatem nam porro, vel velit rem unde tempore quaerat atque adipisci obcaecati, commodi temporibus totam! Ad.</p>

        {/* Boxes Container */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2.5">
            <h1 className="text-[var(--btn)] text-3xl font-bold">10 K+</h1>
            <p>Year of experience</p>
          </div>

          <div className="flex flex-col gap-2.5">
            <h1 className="text-[var(--btn)] text-3xl font-bold">10 K+</h1>
            <p>Year of experience</p>
          </div>

          <div className="flex flex-col gap-2.5">
            <h1 className="text-[var(--btn)] text-3xl font-bold">10 K+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>

      {/* Image Container */}
      <div className="flex-1 relative">
        <Image src="/about.png" alt="" fill className="object-contain" />
      </div>
    </div>
  );
};

export default AboutPage;

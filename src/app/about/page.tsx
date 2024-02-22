import Image from "next/image";

const AboutPage: React.FC = () => {
  return (
    <div>
      <div className="relative h-[500px] w-full">
        <Image src="/about.png" alt="" fill />
      </div>
    </div>
  );
};

export default AboutPage;
 
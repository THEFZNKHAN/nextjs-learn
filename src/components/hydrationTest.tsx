"use client";

const HydrationTest: React.FC = () => {
    const a: number = Math.random();
    console.log(a);

    return <div>{a}</div>;
};

export default HydrationTest;

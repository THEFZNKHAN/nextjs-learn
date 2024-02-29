import Link from "next/link";

const NotFound: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-[cal(100vh-200px)]">
            <h1 className="mb-4 font-bold text-2xl">404 - Page not found</h1>
            <Link
                href="/"
                className="bg-[var(--btn)] text-white font-semibold p-2 text-lg rounded-lg hover:bg-blue-600"
            >
                Return Home
            </Link>
        </div>
    );
};

export default NotFound;

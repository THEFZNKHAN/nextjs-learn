import Link from "next/link";

const NotFound: React.FC = () => {
    return (
        <div>
            <h1>404 - Page not found</h1>
            <Link href="/">Return home</Link>
        </div>
    );
};

export default NotFound;

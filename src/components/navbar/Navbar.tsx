import Links from "./links/Links";

const Navbar = () => {
    return (
        <div className="h-24 flex items-center justify-between">
            <div className="text-3xl font-bold">Logo</div>
            <div>
                <Links />
            </div>
        </div>
    );
};

export default Navbar;

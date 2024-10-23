import { Link } from "react-router-dom";
import { MegaMenu } from "./megamenu/MegaMenu";

export function NavBar() {
    return (
        <nav className="flex justify-between items-center border-b-2 border-b-gray-100 bg-white h-20 px-7">
            <Link to="/" className="font-exo text-xl font-bold">
                ReactNavBar
            </Link>
            <MegaMenu />
            <LoginButton />
        </nav>
    );
}

function LoginButton() {
    return (
        <button className="font-semibold p-3 bg-indigo_accent rounded-full text-white">
            Login
        </button>
    );
}

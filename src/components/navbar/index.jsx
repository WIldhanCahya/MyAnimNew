import Link from "next/link"
import SearchInput from "./searchInput"
import UserActionButton from "./userActionButton"

const Navbar = () => {
    return (
        <header className="bg-neutral-900 border-b border-white">
            <nav className="flex md:justify-between md:flex-row md:items-center flex-col p-4 gap-2">
                <Link href="/" className="font-bold text-[#FFD369] text-2xl transition ease-in hpver:rotate-2 md:hover:rotate-4 hover:text-white">MyANIM</Link>
                <SearchInput/>
                <UserActionButton/>
            </nav>
        </header>
    )
}

export default Navbar
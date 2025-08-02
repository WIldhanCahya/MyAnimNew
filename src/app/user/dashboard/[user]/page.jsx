import AnimeList from "@/components/animelist"
import Header from "@/components/animelist/Header"
import MangaList from "@/components/mangalist"
import {authUserSession} from "@/libs/auth-libs"
import Image from "next/image"
import { redirect } from "next/navigation"

const Page = async({ params }) => {
    const user = await authUserSession()


    return(
        <>
        {
            user ? 
            <>
        <div className="text-white font-bold p-5 flex items-center flex-col">
            <Image src={user.image} alt={user.name} width={350} height={350} className="border border-white rounded-full"/>
            <h5 className="mt-5 text-3xl">WELCOME <span className="text-[#FFD369]">{user.name}</span></h5>
        </div>
            </>
            : redirect("/")
        }
        </>
    )
}

export default Page
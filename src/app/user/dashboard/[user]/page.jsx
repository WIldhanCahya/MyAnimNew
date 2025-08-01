import {authUserSession} from "@/libs/auth-libs"
import Image from "next/image"
import { redirect } from "next/navigation"

const Page = async({ params }) => {
    const user = await authUserSession()
    return(
        <>
        {
            user ? 
        <div className="text-white">
            <h3>DashBoard</h3>
            <h5>WELCOME {user.name}</h5>
            <Image src={user.image} alt={user.name} width={250} height={250}/>
        </div>
            : redirect("/")
        }
        </>
    )
}

export default Page
import Link from "next/link"
import {authUserSession} from "@/libs/auth-libs"
import Image from "next/image"

const UserActionButton = async() => {
    const user = await authUserSession()

    const actionLabel = user ? "Sign Out" : "Sign In"
    const actionURL = user ? "/api/auth/signout" : "/api/auth/signin"

    return(
        <div className="flex gap-3 justify-between items-center text-white">
            <Link href={actionURL} className="font-xl hover:text-[#FFD369]">{actionLabel}</Link>
        {
            user ?  <Link href={`/user/dashboard/${user.name}`} className="">{<Image src={user.image} alt=".." height={50} width={50} className="rounded-full border border-white"/>}</Link>: null
        }
        </div>
    )
}

export default UserActionButton
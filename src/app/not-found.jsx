import Image from "next/image"

const Page = () => {
return (
    <div className="h-full w-full flex justify-center p-20">
    <Image src='/assets/svg/404 Error-rafiki.png' alt="Not Found" width={500} height={500}/>
    </div>
)
}

export default Page
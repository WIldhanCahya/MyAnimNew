import { getAnimeResponse } from "@/libs/api-libs"
import Image from "next/image"

const Page = async({params}) => {
    const { id } = await params

    const manga = await getAnimeResponse(`manga/${id}`)

    return (
         <>
              <div className="min-h-screen flex-col items-center border border-white rounded-xl m-5 cursor-pointer py-5 px-3">
                <div className="flex flex-col md:flex-row gap-10 p-5">
          <div className="flex justify-center">
            <Image
              src={manga.data?.images.webp.image_url}
              alt={manga.data.title}
              width={250}
              height={400}
              className="min-w-[250px]"
            />
          </div>
          <div>
            <h1 className="font-bold text-white text-4xl md:text-5xl">
              {manga.data.title}
            </h1>

            <div className="overflow-x-auto flex gap-3 mt-3 max-w-[900px]">

              
              <div className="min-w-25 h-23 flex flex-col items-center justify-center border border-white rounded px-6">
                <h1 className="font-bold text-white md:text-xl md:mt-5">
                  Type{" "}
                </h1>
                <p className="text-[#FFD369] font-bold sm:text-xl">
                  {manga.data.type}
                </p>
              </div>

              <div className="min-w-30 h-23 flex flex-col items-center justify-center border border-white rounded px-6">
                <h1 className="font-bold text-white md:text-xl md:mt-5">
                  Chapters
                </h1>
                <p className="text-[#FFD369] font-bold sm:text-xl">
                  {manga.data.chapters ? manga.data.chapters : <span>Undefined</span>}
                </p>
              </div>

              <div className="min-w-45 h-23 flex flex-col items-center justify-center border border-white rounded px-6">
                <h1 className="font-bold text-white md:text-xl md:mt-5">
                  Status
                </h1>
                <p className="text-[#FFD369] font-bold sm:text-xl">
                  {manga.data.status}
                </p>
              </div>

              <div className="min-w-25 h-23 flex flex-col items-center justify-center border border-white rounded px-6">
                <h1 className="font-bold text-white md:text-xl md:mt-5">
                  Rank
                </h1>
                <p className="text-[#FFD369] font-bold sm:text-xl">
                  {manga.data.rank}
                </p>
              </div>

              <div className="min-w-30 h-23 flex flex-col items-center justify-center border border-white rounded px-6">
                <h1 className="font-bold text-white md:text-xl md:mt-5">
                  Score
                </h1>
                <p className="text-[#FFD369] font-bold sm:text-xl">
                  {manga.data.score}
                </p>
              </div>

              <div className="min-w-45 h-23 flex flex-col items-center justify-center border border-white rounded px-6">
                <h1 className="font-bold text-white md:text-xl md:mt-5">
                  Published
                </h1>
                <p className="text-[#FFD369] font-bold sm:text-xl">
                  {manga.data.published.prop.from.year} {manga.data.published.prop.to.year ?  <span className="text-[#FFD369] font-bold sm:text-xl">- {manga.data.published.prop.to.year}</span> : null}
                </p>
              </div>
            </div>
            <div className="mt-4">
              <h1 className="font-bold text-white md:text-md">
                Sypnosis:{" "}
                <span className="text-[#FFD369]">{manga.data.synopsis}</span>
              </h1>
            </div>
          </div>
                </div>
              </div>
            </>
    )
}

export default Page
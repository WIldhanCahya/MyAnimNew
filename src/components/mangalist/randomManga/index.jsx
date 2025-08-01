const { default: Image } = require("next/image")
const { default: Link } = require("next/link")

const RandomMangaList = ({ api }) => {
    return(
        <div className="grid grid-cols-2 gap-4 px-4 md:grid-cols-4 sm:grid-cols-3" >
        {api.data?.map((anime, index) => (
        <Link href={`/manga/${anime.mal_id}`} key={index} className="flex flex-col items-center border border-white p-3 rounded-xl hover:scale-101 transition transition-all">
            <div className="w-full h-full flex items-center">
            <Image src={anime.images.webp.image_url} alt={anime?.title} width={600} height={400} className="w-full min-h-[400px] max-h-[400px]" />
            </div>
            <div className="h-full w-full flex flex-col justify-end">
            <h3 className="font-bold md:text-xl text-md p-1 md:p-4 text-[#FFD369] text-center">{anime.title}</h3>
            </div>
        </Link>    
        ))}
    </div>
     
    )
}

export default RandomMangaList
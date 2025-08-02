const { default: Image } = require("next/image")
const { default: Link } = require("next/link")

const AnimeList = ({ api }) => {
    return(
        <div className="grid grid-cols-2 gap-4 px-4 md:grid-cols-4 sm:grid-cols-3" >
        {api.data?.map((anime, index) => (
        <Link href={`/anime/${anime.mal_id}`} key={index} className="flex flex-col items-center border border-white p-3 rounded-xl hover:scale-101 transition transition-all">
            <div className="w-full h-full flex items-end">
            <Image src={anime.images.webp.image_url} alt={anime.title} width={600} height={400} className="w-full max-h-[400px]" />
            </div>
            <div className="h-full w-full flex flex-col justify-end">
            <h3 className="font-bold md:text-xl text-md p-1 md:p-4 text-[#FFD369] text-center">{anime.title}</h3>
            <p className="text-white font-bold self-start text-sm md:text-md">Type: <span className="text-[#FFD369]">{anime.type}</span></p>
            <p className="text-white font-bold self-start text-sm md:text-md">Episodes: <span className="text-[#FFD369]">{anime.episodes}</span></p>
            <p className="text-white font-bold self-start text-sm md:text-md">Rating: <span className="text-[#FFD369]">{anime.rating}</span></p>
            <p className="text-white font-bold self-start text-sm md:text-md">Source: <span className="text-[#FFD369]">{anime.source}</span></p>
            <p className="text-white font-bold self-start text-sm md:text-md">Score: <span className="text-[#FFD369]">{anime.score}</span></p>
            </div>
        </Link>    
        ))}
    </div>
     
    )
}

export default AnimeList
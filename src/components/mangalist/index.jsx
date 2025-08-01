const { default: Image } = require("next/image")
const { default: Link } = require("next/link")

const MangaList = ({ api }) => {
    return(
        <div className="grid grid-cols-2 gap-4 px-4 md:grid-cols-4 sm:grid-cols-3">
        {api.data?.map((manga, index) => (
        <Link href={`/manga/${manga.mal_id}`} key={index} className="flex flex-col items-center border border-white p-3 rounded-xl hover:scale-101 transition transition-all ease-in">
            <div className="w-full h-full flex items-end">
            <Image src={manga.images.webp.image_url} alt={manga.title} width={600} height={400} className="w-full max-h-[400px]" />
            </div>
            <div className="h-full w-full flex flex-col justify-end">
            <h3 className="font-bold md:text-xl text-md p-1 md:p-4 text-[#FFD369] text-center">{manga.title}</h3>
            <p className="text-white font-bold self-start text-sm md:text-md">Type: <span className="text-[#FFD369]">{manga.type}</span></p>
            <p className="text-white font-bold self-start text-sm md:text-md">Chapter: <span className="text-[#FFD369]">{manga.chapters}</span></p>
            <p className="text-white font-bold self-start text-sm md:text-md">Author: <span className="text-[#FFD369]">{manga.authors[0]?.name}</span></p>
            <p className="text-white font-bold self-start text-sm md:text-md">Published: <span className="text-[#FFD369]">{manga.published.prop.from.year}</span></p>
            <p className="text-white font-bold self-start text-sm md:text-md">Score: <span className="text-[#FFD369]">{manga.score}</span></p>
            </div>
        </Link>    
        ))}
    </div>
     
    )
}

export default MangaList
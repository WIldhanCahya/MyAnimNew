import { getAnimeResponse } from "@/libs/api-libs"
import AnimeList from "@/components/animelist"
import Header from "@/components/animelist/Header"
import MangaList from "@/components/mangalist"
import { use } from "react"

export default async function Page({params}) {
    const { keyword } = await params
    const decodedKeyword = decodeURI(keyword)
    const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`)
    const searchManga = await getAnimeResponse("manga", `q=${decodedKeyword}`)

    return(
        <>
        <Header title={`Hasil Dari ${decodedKeyword}...`}/>
        <Header title={"Anime"}/>
        <section>
        <AnimeList api={searchAnime}/>
        </section>
        <Header title={"Manga"}/>
        <section>
        <MangaList api={searchManga}/>
        </section>
        </>
    )
}
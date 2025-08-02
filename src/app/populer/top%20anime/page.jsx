"use client"

import { getAnimeResponse } from "@/libs/api-libs"
import AnimeList from "@/components/animelist"
import HeaderMenu from "@/components/utilities/HeaderMenu"
import Pagination from "@/components/utilities/Pagination"
import { useEffect, useState } from "react"

const Page = () => {
    const [page, setPage] = useState(1)
    const [topAnime, setTopAnime] = useState([])

    const fetchData = async() => {
        const data = await getAnimeResponse("top/anime", `page=${page}`)
        setTopAnime(data)
    }

    useEffect(() => {
        fetchData()
    }, [page])

    return(
        <>
        <HeaderMenu title={`Anime Terpopuler #${page}`}/>
        <AnimeList api={topAnime}/>
        <Pagination page={page} lastPage={topAnime.pagination?.last_visible_page} setPage={setPage}/>
        </>
    )
}

export default Page
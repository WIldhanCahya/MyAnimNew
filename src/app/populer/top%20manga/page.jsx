"use client"

import { getAnimeResponse } from "@/libs/api-libs"
import Header from "@/components/animelist/Header"
import MangaList from "@/components/mangalist"
import HeaderMenu from "@/components/utilities/HeaderMenu"
import Pagination from "@/components/utilities/Pagination"
import { useEffect, useState } from "react"

const Page = () => {

    const [page, setPage] = useState(1)
    const [topManga, setTopManga] = useState([])

    const fetchAPI = async() => {
        // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/manga?page=${page}`)
        // const data = await response.json()
        const data = await getAnimeResponse("top/manga", `page=${page}`)
        setTopManga(data)
    }

    useEffect(() => {
        fetchAPI()
    }, [page])

    return(
        <>
        <HeaderMenu title={`Manga Terpopuler #${page}`}/>
        <MangaList api={topManga}/>
        <Pagination page={page} lastPage={topManga.pagination?.last_visible_page} setPage={setPage}/>
        </>
    )
}

export default Page
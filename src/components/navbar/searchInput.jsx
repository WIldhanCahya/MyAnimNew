"use client"

import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr"
import { useRouter } from "next/navigation"
import { useEffect, useRef } from "react"
import { ClipLoader } from "react-spinners"

const SearchInput = () => {
    const querySearch = useRef()
    const router = useRouter()

    const handleEvent = (e) => {
        const keyword = querySearch.current.value
        if (e.key == 'Enter' || e.type == 'click') {
        e.preventDefault()
        if(!keyword || keyword.trim() == '') {
            return false
        } else {
            router.push(`/search/${keyword}`)
            querySearch.current.value =''
        }
        }
    }

    return (
        <div className="relative">
        <input placeholder="Search..." id="search" className="bg-white p-2 rounded w-full" ref={querySearch}  onKeyDown={handleEvent}/>
        <button onClick={handleEvent}>
        <MagnifyingGlass size={24} className="absolute top-2 end-1 cursor-pointer" />
        </button>
        </div>
    )
}

export default SearchInput
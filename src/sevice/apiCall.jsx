import listFilm from "@/api/listFilm";
import apiGenre from "@/api/apiGenre";
import listSeri from "@/api/seri";
import useFetch from "@/hooks/useFetch";
import { useState, useMemo, createContext, useContext, useEffect } from "react";


export const ModeContext = createContext()
export const useLogin = () => {
    const [login, setLogin] = useState({
        status: false,
        inforUser: null
    })
    const handleLogin = (value, infor) => {
        setLogin({ inforUser: infor, status: value })
    }
    return [login, handleLogin]

}



export const allData = () => {
    const [dataMovie, setListFilm] = useState(null)
    const [listNameSeri, setListSeri] = useState(null)
    const [menuSeri, setListGenre] = useState(null)
    const apiCallFilm = useMemo(() =>
        listFilm.getList(),
        [])
    const apiCallSeri = useMemo(() =>
        listSeri.getSeris(),
        [])
    const apiCallGenre = useMemo(() =>

        apiGenre.getGenres(),
        [])
    //GET SERI
    useEffect(() => {
        async () => {
            const data = await listFilm.getList()
            setListFilm(data)
        }
    },)
    useEffect(() => {
        async () => {
            const data = await listSeri.getSeris(
                setListSeri(data)
            )
        }
    },)
    useEffect(() => {
        async () => {
            const data = await apiGenre.getGenres()
            setListFilm(data)
        }
    },)
    // const { data: listNameSeri } = useFetch(apiCallSeri)

    // // GET MOVIES
    // const { data: dataMovie } = useFetch(apiCallFilm)
    // // GET GENRE
    // const { data: menuSeri } = useFetch(apiCallGenre)

    return { listNameSeri, dataMovie, menuSeri }

}

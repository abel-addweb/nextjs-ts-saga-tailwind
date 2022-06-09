import type { NextPage } from 'next'
import { useEffect } from 'react'
import CharacterCard from '../../components/CharacterCard'
import Layout from '../../components/Layout'
import Loading from '../../components/Loading'
import SearchBar from '../../components/SearchBar'
import { fetchAllCharacters } from '../../redux/Character/Character.action'
import { useAppDispatch, useAppSelector } from '../../redux/hook'

const Characters: NextPage = () => {

    const disptach = useAppDispatch();
    const { characters } = useAppSelector((state) => state)

    useEffect(() => {
        disptach(fetchAllCharacters())
    }, [])

    return <Layout>
        <div className="flex items-center justify-center">
            <SearchBar handleChange={(key: string) => disptach(fetchAllCharacters({ name: key }))} />
        </div>

        {characters.fetchAll.isLoading && <Loading />}
        <div className="holder mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">

            {characters.fetchAll.isLoaded ? characters.fetchAll.payload.length === 0 ? <div className="flex items-center justify-center h-screen">
                <h1>Data not found!</h1>
            </div> : characters.fetchAll.payload.map((character) => <CharacterCard character={character} />) : <></>}

        </div>

    </Layout>
}

export default Characters
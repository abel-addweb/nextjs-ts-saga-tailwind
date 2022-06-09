import type { NextPage } from 'next';
import { useEffect } from 'react';
import EpisodeCard from '../../components/EpisodeCard';
import Layout from '../../components/Layout';
import Loading from '../../components/Loading';
import SearchBar from '../../components/SearchBar';
import { fetchAllEpisodes } from '../../redux/Episode/Episode.action';
import { useAppDispatch, useAppSelector } from '../../redux/hook';

const Episodes: NextPage = ({ }) => {

    const disptach = useAppDispatch();
    const { episodes } = useAppSelector((state) => state)

    useEffect(() => {
        disptach(fetchAllEpisodes())
    }, [])

    return <Layout>
        {episodes.fetchAll.isLoading && <Loading />}
        <div className="holder mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">

            {episodes.fetchAll.isLoaded ? episodes.fetchAll.payload.length === 0 ? <div className="flex items-center justify-center h-screen">
                <h1>Data not found!</h1>
            </div> : episodes.fetchAll.payload.map((episode) => <EpisodeCard episode={episode} />) : <></>}
        </div>
    </Layout>
}

export default Episodes;
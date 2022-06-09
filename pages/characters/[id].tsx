import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Layout from "../../components/Layout";
import Loading from "../../components/Loading";
import { fetchOneCharacter } from "../../redux/Character/Character.action";
import { CharacterActionTypes } from "../../redux/Character/Character.type";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { store, wrapper } from "../../redux/store";

const CharacterDetailPage: NextPage = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchOneCharacter(router.query?.id))
    }, [])
    const { characters } = useAppSelector((state) => state);

    return (
        <Layout>
            {characters.fetchOne.isLoading && <Loading />}
            {characters.fetchOne.isLoaded && <section className="text-gray-700 body-font overflow-hidden bg-white">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={characters.fetchOne?.payload[0]?.img} />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">{characters.fetchOne?.payload[0]?.nickname}</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{characters.fetchOne?.payload[0]?.name}</h1>
                            <div className="flex mb-4">
                                <span className="flex items-center">
                                    <span className="text-gray-600 ml-3">{characters.fetchOne?.payload[0]?.birthday}</span>
                                </span>
                                
                            </div>
                            <p className="leading-relaxed">{characters.fetchOne?.payload[0]?.occupation?.join(", ")}</p>
                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                                
                            </div>
                            <div className="">
                                <button className=" ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">{characters.fetchOne?.payload[0]?.status}</button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>}
        </Layout>
    )
}


export default CharacterDetailPage;
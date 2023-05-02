import React from 'react'
import {useQuery} from "react-query";
import {MAIN_URL} from "../../../assets/scripts/GeneralVariables";

function AboutMe() {

    const {data, isLoading, isError} = useQuery('about-me', async () => {
        const response = await fetch(`${MAIN_URL}/about-me`)
        return await response.json()
    }, {
        staleTime: 10000, // 10 seconds
        cacheTime: 60000, // 1 minute
        staleWhileRevalidate: true
    })

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error loading data</div>

    return (
        <>
            <h1
                className={
                    'text-white text-2xl md:text-3xl font-bold mb-8 border-b-4 border-teal-300 w-fit rounded-lg px-2 pb-2'
                }
            >
                About Me
            </h1>
            <p
                className={
                    'text-md md:text-lg text-gray-400 leading-8 md:leading-10 mb-3 text-justify hover:text-gray-200'
                }
            >
                {data?.about?.description}
            </p>

            <h2 className={'text-white text-2xl font-bold pt-5 mb-6'}>What I&apos;m Doing</h2>

            <div className="w-full border-2 border-gray-700 rounded-2xl p-4 md:p-8">
                <div className="flex flex-col items-center">
                    <span className="icon-code text-teal-300 text-4xl pb-3"/>
                    <span className={'text-lg mb-4 md:mb-3'}>
            <strong className={'text-white text-lg md:text-xl'}>{data?.about?.job_title}</strong>
          </span>
                    <p
                        className={
                            'text-md md:text-lg text-gray-400 leading:6 md:leading-10 mb-3 hover:text-gray-200'
                        }
                    >
                        {data?.about?.job_level}
                    </p>
                </div>
            </div>
        </>
    )
}

export default AboutMe

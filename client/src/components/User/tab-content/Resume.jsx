import React from 'react'
import {useQuery} from "react-query";
import {MAIN_URL} from "../../../assets/scripts/GeneralVariables";
import Skill from "./resume/Skill";
import Experience from "./resume/Experience";
import Education from "./resume/Education";

function Resume() {

    const {data, isLoading, isError} = useQuery('resume', async () => {
        const response = await fetch(`${MAIN_URL}/resume`)
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
                Resume
            </h1>

            <Education educations={data?.resume?.educations}/>

            <Experience experience={data?.resume?.experience}/>

            <Skill skills={data?.resume?.skills}/>

        </>
    )
}

export default Resume

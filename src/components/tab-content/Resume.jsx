import React from "react"

function Resume() {
    return (
        <>
            <h1 className={"text-white text-2xl md:text-3xl font-bold mb-8 border-b-4 border-teal-300 w-fit rounded-lg px-2 pb-2"}>Resume</h1>

            <div className="flex items-center mb-5">
                <span className="icon-icon-education text-teal-300 text-3xl"><span className="path1"></span><span
                    className="path2"></span><span className="path3"></span><span className="path4"></span><span
                    className="path5"></span><span className="path6"></span><span className="path7"></span><span
                    className="path8"></span></span>
                <h2 className={"pl-4 text-2xl text-white font-bold"}>Education</h2>
            </div>

            <div className="flex flex-col mb-5 pl-12 relative">
                <h3 className={"text-white text-lg md:text-xl mb-2 dv-resume-item font-bold"}>Shahid Madani University</h3>
                <span className={"text-slate-500 mb-2"}>2018 - 2022</span>
                <p className={"text-slate-300 text-justify hover:text-gray-200"}>Bachelor of Computer Engineering: I earned a degree from this university institution and have successfully passed all the courses with an A grade.</p>
            </div>

            <div className="flex items-center pt-5 mb-5">
                <span className="icon-icon-experience text-teal-300 text-3xl"><span className="path1"></span><span
                    className="path2"></span></span>
                <h2 className={"pl-4 text-2xl text-white font-bold"}>Experience</h2>
            </div>

            <div className="flex flex-col mb-5 pl-12 relative">
                <h3 className={"text-white text-lg md:text-xl mb-2 dv-resume-item font-bold"}>Head of the front end team</h3>
                <span className={"text-slate-500 mb-2 text-md"}>2021 - 2022</span>
                <p className={"text-slate-300 text-md text-justify hover:text-gray-200"}>As a head of the front-end department of <a
                    href="http://rahkargostaran.ir" target={"_blank"} rel="noreferrer"><b>Rahkargostaran</b></a>, I have led the company&apos;s projects in a professional way with the team members and also managed the tasks.</p>
            </div>

            <div className="flex flex-col mb-5 pl-12 relative">
                <h3 className={"text-white text-lg md:text-xl mb-2 dv-resume-item font-bold"}>Front-End Developer</h3>
                <span className={"text-slate-500 mb-2 text-md"}>2019 - 2021</span>
                <p className={"text-slate-300 text-md text-justify hover:text-gray-200"}>After serving my internship at <a href="http://app.aral.studio" target={"_blank"} rel="noreferrer"><b>Aral Studio</b></a> company, I worked there as a front-end programmer, developing different web projects including store and management web applications.</p>
            </div>

            <div className="flex items-center pt-5 mb-5">
                <span className="icon-code text-teal-300 text-3xl"/>
                <h2 className={"pl-4 text-2xl text-white font-bold"}>My Skill</h2>
            </div>



        </>
    )
}

export default Resume
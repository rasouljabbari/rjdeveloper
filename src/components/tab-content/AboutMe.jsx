import React from "react"

function AboutMe() {
    return (
        <>
            <h1 className={"text-white text-2xl md:text-3xl font-bold mb-8 border-b-4 border-teal-300 w-fit rounded-lg px-2 pb-2"}>About Me</h1>
            <p className={"text-md md:text-lg text-gray-400 leading-8 md:leading-10 mb-3 text-justify hover:text-gray-200"}>
                I&apos;m Rasoul Jabbari. <strong>Senior Web Developer</strong> with over 3 years of
                experience specializing in front end development. Experienced with all stages of the
                development cycle for dynamic web projects.Having an in-depth knowledge including
                advanced JavaScript, <b>React</b>, <b>Next</b>, JQuery, SASS, JSON, AJAX, CSS3, HTML5.
                Strong background in management and leadership.
            </p>

            <h2 className={"text-white text-2xl font-bold pt-5 mb-6"}>What I&apos;m Doing</h2>

            <div className="w-full border-2 border-gray-700 rounded-2xl p-4 md:p-8">
                <div className="flex flex-col items-center">
                    <span className="icon-code text-teal-300 text-4xl pb-3"/>
                    <span className={"text-lg mb-4 md:mb-3"}>
                        <strong className={"text-white text-lg md:text-xl"}>Front End Developer</strong>
                    </span>
                    <p className={"text-md md:text-lg text-gray-400 leading:6 md:leading-10 mb-3 hover:text-gray-200"}>High-quality development of sites at the professional level.</p>
                </div>
            </div>
        </>
    )
}

export default AboutMe
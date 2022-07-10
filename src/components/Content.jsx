import React, {useState} from "react"
import AboutMe from "./tab-content/AboutMe"
import Resume from "./tab-content/Resume"
import Contact from "./tab-content/Contact"

// eslint-disable-next-line react/prop-types
function Content() {

    const [openTab, setOpenTab] = useState(1)

    return (
        <div className="w-full flex">
            <ul
                className="sticky top-0 flex flex-col items-center justify-center mb-0 list-none flex-wrap w-12 mr-4 lg:mr-8 lg:w-1/6 bg-gray-900 px-1 py-2 lg:px-4 xl:p-8 lg:py-4 xl:p-8 rounded-2xl shadow-md shadow-gray-900 h-fit"
                role="tablist"
            >
                <li className="mb-4 flex-auto text-center w-auto lg:w-32 xl:w-36">
                    <a
                        className={
                            "uppercase flex flex-col p-2 lg:p-4 xl:p-6 rounded-lg lg:rounded-2xl " +
                            (openTab === 1
                                ? "text-white bg-gradient-to-r from-cyan-500 to-blue-500"
                                : "text-stone-300 bg-gray-800 hover:text-sky-500")
                        }
                        onClick={e => {
                            e.preventDefault()
                            setOpenTab(1)
                        }}
                        data-toggle="tab"
                        href="#link1"
                        role="tablist"
                    >
                        <span className="icon-user-tie text-2xl lg:text-4xl lg:pb-3"/>
                        <span className={"md:text-md xl:text-lg hidden lg:block"}>About me</span>
                    </a>
                </li>
                {/*<li className="mb-4 flex-auto text-center w-auto lg:w-32 xl:w-36">*/}
                {/*    <a*/}
                {/*        className={*/}
                {/*            "uppercase flex flex-col p-2 lg:p-4 xl:p-6 rounded-lg lg:rounded-2xl " +*/}
                {/*            (openTab === 2*/}
                {/*                ? "text-white bg-gradient-to-r from-cyan-500 to-blue-500"*/}
                {/*                : "text-stone-300 bg-gray-800 hover:text-sky-500")*/}
                {/*        }*/}
                {/*        onClick={e => {*/}
                {/*            e.preventDefault()*/}
                {/*            setOpenTab(2)*/}
                {/*        }}*/}
                {/*        data-toggle="tab"*/}
                {/*        href="#link2"*/}
                {/*        role="tablist"*/}
                {/*    >*/}
                {/*        <span className="icon-profile text-2xl lg:text-4xl lg:pb-3"/>*/}
                {/*        <span className={"md:text-md xl:text-lg hidden lg:block"}>resume</span>*/}
                {/*    </a>*/}
                {/*</li>*/}
                {/*<li className="flex-auto text-center w-auto lg:w-32 xl:w-36">*/}
                {/*    <a*/}
                {/*        className={*/}
                {/*            "uppercase flex flex-col p-2 lg:p-4 xl:p-6 rounded-lg lg:rounded-2xl " +*/}
                {/*            (openTab === 3*/}
                {/*                ? "text-white bg-gradient-to-r from-cyan-500 to-blue-500"*/}
                {/*                : "text-stone-300 bg-gray-800 hover:text-sky-500")*/}
                {/*        }*/}
                {/*        onClick={e => {*/}
                {/*            e.preventDefault()*/}
                {/*            setOpenTab(3)*/}
                {/*        }}*/}
                {/*        data-toggle="tab"*/}
                {/*        href="#link3"*/}
                {/*        role="tablist"*/}
                {/*    >*/}
                {/*        <span className="icon-phone text-2xl lg:text-4xl lg:pb-3"/>*/}
                {/*        <span className={"md:text-md xl:text-lg hidden lg:block"}>contact</span>*/}
                {/*    </a>*/}
                {/*</li>*/}
            </ul>
            <div className="relative flex flex-col min-w-0 w-fit w-3/4 lg:w-5/6 break-words bg-gray-900 mb-6 shadow-lg bg-gray-900 p-3 md:p-8 rounded-2xl shadow-md shadow-gray-900">
                <div className="px-2 md:px-4 py-5 flex-auto">
                    <div className="tab-content tab-space">
                        <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                            <AboutMe/>
                        </div>
                        <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                            <Resume/>
                        </div>
                        <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                            <Contact/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content
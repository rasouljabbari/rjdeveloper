import React, {useState} from "react"
import AboutMe from "./tab-content/AboutMe"
import Resume from "./tab-content/Resume"
// import Contact from "./tab-content/Contact"

// eslint-disable-next-line react/prop-types
function Content() {

    const [openTab, setOpenTab] = useState(1)

    return (
        <div className="w-full flex flex-col lg:flex-row">
            <ul
                className="sticky top-0 hidden lg:flex lg:flex-col items-center justify-center mb-0 list-none border-b-2 lg:border-b-0 border-blue-500 flex-wrap w-full mb-4 z-10 lg:mb-0 mr-4 lg:mr-8 lg:w-1/6 bg-gray-900 pt-2 lg:px-4 xl:p-8 lg:py-4 xl:p-8 lg:rounded-2xl lg:shadow-md lg:shadow-gray-900 h-fit"
                role="tablist"
            >
                <li className=" lg:mb-4 flex-auto text-center w-auto lg:w-32 xl:w-36">
                    <a
                        className={
                            "uppercase flex flex-col px-2 py-4 lg:p-4 xl:p-6 rounded-lg lg:rounded-2xl " +
                            (openTab === 1
                                ? "text-white bg-gradient-to-l from-cyan-500 to-blue-500"
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
                        <span className={"text-sm xl:text-lg"}>About me</span>
                    </a>
                </li>
                <li className=" lg:mb-4 flex-auto text-center w-auto lg:w-32 xl:w-36">
                    <a
                        className={
                            "uppercase flex flex-col px-2 py-4 lg:p-4 xl:p-6 rounded-lg lg:rounded-2xl " +
                            (openTab === 2
                                ? "text-white bg-gradient-to-l from-cyan-500 to-blue-500"
                                : "text-stone-300 bg-gray-800 hover:text-sky-500")
                        }
                        onClick={e => {
                            e.preventDefault()
                            setOpenTab(2)
                        }}
                        data-toggle="tab"
                        href="#link2"
                        role="tablist"
                    >
                        <span className="icon-profile text-2xl lg:text-4xl lg:pb-3"/>
                        <span className={"text-sm xl:text-lg"}>resume</span>
                    </a>
                </li>
                {/*<li className=" flex-auto text-center w-auto lg:w-32 xl:w-36">*/}
                {/*    <a*/}
                {/*        className={*/}
                {/*            "uppercase flex flex-col px-2 py-4 lg:p-4 xl:p-6 rounded-lg lg:rounded-2xl " +*/}
                {/*            (openTab === 3*/}
                {/*                ? "text-white bg-gradient-to-l from-cyan-500 to-blue-500"*/}
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
                {/*        <span className={"text-sm xl:text-lg"}>contact</span>*/}
                {/*    </a>*/}
                {/*</li>*/}
            </ul>
            <div className="relative flex flex-col min-w-0 w-full lg:w-5/6 break-words bg-gray-900 mb-6 shadow-lg bg-gray-900 p-3 md:p-8 rounded-2xl shadow-md shadow-gray-900">
                <ul
                    className="sticky top-0 flex lg:hidden lg:flex-col items-center justify-center mb-0 list-none border-b-2 lg:border-b-0 border-teal-300 flex-wrap w-full mb-4 z-10 lg:mb-0 mr-4 lg:mr-8 lg:w-1/6 bg-gray-900 pt-2 lg:px-4 xl:p-8 lg:py-4 xl:p-8 lg:rounded-2xl lg:shadow-md lg:shadow-gray-900 h-fit"
                    role="tablist"
                >
                    <li className=" lg:mb-4 flex-auto text-center w-1/3 lg:w-32 xl:w-36">
                        <a
                            className={
                                "uppercase flex flex-col px-2 py-4 lg:p-4 xl:p-6 rounded-t-lg lg:rounded-t-2xl rounded-b-0 " +
                                (openTab === 1
                                    ? "text-white bg-gradient-to-b from-cyan-500 to-teal-300"
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
                            <span className={"text-sm xl:text-lg"}>About me</span>
                        </a>
                    </li>
                    <li className=" lg:mb-4 flex-auto text-center w-1/3 lg:w-32 xl:w-36">
                        <a
                            className={
                                "uppercase flex flex-col px-2 py-4 lg:p-4 xl:p-6 rounded-t-lg lg:rounded-t-2xl " +
                                (openTab === 2
                                    ? "text-white bg-gradient-to-b from-cyan-500 to-teal-300"
                                    : "text-stone-300 bg-gray-800 hover:text-sky-500")
                            }
                            onClick={e => {
                                e.preventDefault()
                                setOpenTab(2)
                            }}
                            data-toggle="tab"
                            href="#link2"
                            role="tablist"
                        >
                            <span className="icon-profile text-2xl lg:text-4xl lg:pb-3"/>
                            <span className={"text-sm xl:text-lg"}>resume</span>
                        </a>
                    </li>
                    {/*<li className=" flex-auto text-center w-1/3 lg:w-32 xl:w-36">*/}
                    {/*    <a*/}
                    {/*        className={*/}
                    {/*            "uppercase flex flex-col px-2 py-4 lg:p-4 xl:p-6 rounded-t-lg lg:rounded-t-2xl rounded-b-0 lg:rounded-b-0 " +*/}
                    {/*            (openTab === 3*/}
                    {/*                ? "text-white bg-gradient-to-b from-cyan-500 to-teal-300"*/}
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
                    {/*        <span className={"text-sm xl:text-lg"}>contact</span>*/}
                    {/*    </a>*/}
                    {/*</li>*/}
                </ul>
                <div className="px-2 md:px-4 py-5 flex-auto">
                    <div className="tab-content tab-space">
                        <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                            <AboutMe/>
                        </div>
                        <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                            <Resume/>
                        </div>
                        {/*<div className={openTab === 3 ? "block" : "hidden"} id="link3">*/}
                        {/*    <Contact/>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content
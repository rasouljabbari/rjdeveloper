import React from "react"
import Rasoul from "../assets/images/rasoul.jpeg"

function Header() {
    return (
        <div
            className={"bg-gray-900 p-8 rounded-2xl relative grid grid-cols-1 lg:grid-cols-2 gap-4 m-4 shadow-md shadow-gray-900"}>
            <div className="flex flex-wrap items-start relative pr-3 mb-6 lg:mb-0 lg:border-r border-gray-600">
                <div className="rounded-2x ml-0 mr-auto sm:mx-0 mb-4 sm:mb-0 -mt-16">
                    <img src={Rasoul} width={162} height={162} className="rounded-3xl" alt={"rasoul jabbari"}/>
                </div>
                <div className="sm:ml-8">
                    <h1 className={"text-white text-3xl mb-2"}>Rasoul Jabbari</h1>
                    <h3 className={"text-stone-400 text-lg mb-2 hover:text-white hover:cursor-default"}>Web
                        Developer</h3>
                    <div className="flex items-center">
                        <div className="flex items-center">
                            <a href={"https://www.instagram.com/accounts/login/?next=/rjdeveloper.ir/"} rel="noreferrer" target={"_blank"}>
                                <span className="icon-instagram hover:text-pink-500 text-stone-400 text-xl pr-3"/>
                            </a>
                            <a href={"https://wa.me/+989106878810?text=Hello Rasoul !"} rel="noreferrer" target={"_blank"}>
                                <span className="icon-whatsapp hover:text-green-500 text-stone-400 text-xl pr-3"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap items-start">

                <ul className={"pr-4 md:pl-14"}>
                    <li className={"lg:mb-5"}>
                        <span className={"text-stone-400 text-sm mb-1 uppercase"}>Email</span>
                        <p className={"text-white text-md mb-4 lg:mb-2"}>rasoul@rjdeveloper.ir</p>
                    </li>
                    <li>
                        <span className={"text-stone-400 text-sm mb-1 uppercase"}>phone</span>
                        <p className={"text-white text-md mb-4 lg:mb-2"}>09106878810</p>
                    </li>
                </ul>

                <ul className={"md:pl-14"}>
                    <li className={"lg:mb-5"}>
                        <span className={"text-stone-400 text-sm mb-1 uppercase"}>BIRTHDAY</span>
                        <p className={"text-white text-md mb-4 lg:mb-2"}>1998</p>
                    </li>
                    <li>
                        <span className={"text-stone-400 text-sm mb-1 uppercase"}>LOCATION</span>
                        <p className={"text-white text-md mb-4 lg:mb-2"}>Tabriz</p>
                    </li>
                </ul>

            </div>

        </div>
    )
}

export default Header
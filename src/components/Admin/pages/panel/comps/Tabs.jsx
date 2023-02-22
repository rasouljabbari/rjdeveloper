import React, {memo} from 'react';
import {NavLink} from "react-router-dom";

function Tabs() {

    const PAGES = ['profile', 'about', 'resume', 'contact']

    return (
        <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab"
                data-tabs-toggle="#myTabContent" role="tabList">
                {
                    PAGES.map(elem =>
                        <li key={elem} className="mr-2" role="presentation">
                            <NavLink
                                to={elem}
                                className={({isActive}) =>
                                    isActive ?
                                        'capitalize inline-block px-4 py-3 text-md md:text-lg text-justify border-b-2 text-sky-400 hover:text-sky-500 border-b-sky-500' :
                                        'capitalize inline-block px-4 py-3 text-md md:text-lg text-justify border-b-2 dark:text-slate-300 border-b-transparent'}
                                id={`${elem}-tab`}
                                type="button">{elem}
                            </NavLink>
                        </li>
                    )
                }
            </ul>
        </div>
    );
}

export default memo(Tabs);
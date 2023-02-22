import React, {useState} from 'react';

function Tabs({tabHandler}) {

    const PAGES = ['profile', 'about', 'resume', 'contact']
    const [tabId, setTabId] = useState('profile')

    const tabSelect = (elem) => {
        setTabId(elem)
        tabHandler(elem)
    }
    return (
        <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab"
                data-tabs-toggle="#myTabContent" role="tabList">
                {
                    PAGES.map(elem =>
                        <li key={elem} className="mr-2" role="presentation">
                            <button
                                onClick={() => tabSelect(elem)}
                                className={`capitalize inline-block px-4 py-3 text-md md:text-lg mb-2 text-justify border-b-2 ${tabId === elem ? 'text-sky-400 hover:text-sky-500 border-b-sky-500' : 'dark:text-slate-300 border-b-transparent'}`}
                                id={`${elem}-tab`}
                                data-tabs-target={`#${elem}`} type="button" role="tab" aria-controls={elem}
                                aria-selected="false">{elem}
                            </button>
                        </li>
                    )
                }
            </ul>
        </div>
    );
}

export default Tabs;
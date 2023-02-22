import React from 'react';
import Profile from "../tab-content/Profile";
import About from "../tab-content/About";
import Resume from "../tab-content/Resume";
import Contact from "../tab-content/ContactMe";

function TabContent({tabId}) {
    return (
        <div
            className="p-4" id={tabId} role="tabPanel"
            aria-labelledby="profile-tab">
            {
                tabId === 'profile' ? <Profile/> :
                    tabId === 'about' ? <About/> :
                        tabId === 'resume' ? <Resume/> : <Contact/>
            }
        </div>
    );
}

export default TabContent;
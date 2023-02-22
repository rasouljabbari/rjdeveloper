import React, {useState} from 'react';
import Tabs from "./comps/Tabs";
import TabContent from "./comps/TabContent";

function Dashboard() {
    const [tabId, setTabId] = useState('profile')

    const tabHandler = (elem) => {
        setTabId(elem)
    }

    return (
        <>
            <Tabs tabHandler={tabHandler}/>
            <div id="myTabContent">
                <TabContent tabId={tabId}/>
            </div>
        </>
    );
}

export default Dashboard;
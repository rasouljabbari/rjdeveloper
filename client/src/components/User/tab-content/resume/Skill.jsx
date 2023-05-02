import {memo} from 'react';

function Skill({skills}) {
    return (
        <>
            <div className="flex items-center pt-5 mb-5">
                <span className="icon-code text-teal-300 text-3xl"/>
                <h2 className={'pl-4 text-2xl text-white font-bold'}>My Skill</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 pt-4">
                {
                    skills?.map(skill => (
                        <div
                            key={skill.title}
                            className="flex flex-col mb-5 p-5 bg-gradient-to-b from-cyan-500 to-teal-500 items-center rounded-xl w-full sm:w-3/4 pointer-default">
                            <i className={`${skill?.icon} text-4xl text-white`}></i>
                            <span className={'text-md md:text-lg font-normal sm:font-bold text-slate-100'}>{skill?.title}</span>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default memo(Skill);
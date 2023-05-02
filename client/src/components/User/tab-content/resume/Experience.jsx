import {memo} from 'react';

function Experience({experience}) {
    return (
        <>
            <div className="flex items-center pt-5 mb-5">
                <div className="icon-icon-experience text-teal-300 text-3xl">
                    <span className="path1"></span>
                    <span className="path2"></span>
                </div>
                <h2 className={'pl-4 text-3xl text-white font-bold'}>Experience</h2>
            </div>

            {
                experience?.map(item => (
                    <div key={item.title} className="flex flex-col mb-5 pl-12 relative">
                        <h3 className={'text-white text-lg md:text-xl mb-2 dv-resume-item font-bold'}>
                            {item.title}
                        </h3>
                        <h5 className={'text-white mb-2 dv-resume-item font-bold'}>{item.company} - {item.status}</h5>
                        <span
                            className={'text-slate-400 mb-2 text-sm'}>{item?.start_date?.split('T')[0]} - {item.end_date ? item?.end_date?.split('T')[0] : 'Present'} </span>
                        <span className={'text-slate-400 mb-2 text-sm'}>{item.location}</span>
                        <p className={'text-slate-300 text-md text-justify hover:text-gray-200 mb-2'}>{item.description}</p>
                        {
                            item?.skills?.length > 0 &&
                            <span className={'text-slate-300 text-md'}>
                            <span className={'text-teal-300'}>Skills :</span>
                                {item?.skills.join(' - ')}
                        </span>
                        }
                    </div>
                ))
            }
        </>
    );
}

export default memo(Experience);
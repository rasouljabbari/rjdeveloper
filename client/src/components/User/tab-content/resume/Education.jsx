import {memo} from 'react';

function Education({educations}) {
    console.log(educations)

    return (
        <>
            <div className="flex items-center mb-5">
                <div className="icon-icon-education text-teal-300 text-3xl">
                    <span className="path1"></span>
                    <span className="path2"></span>
                    <span className="path3"></span>
                    <span className="path4"></span>
                    <span className="path5"></span>
                    <span className="path6"></span>
                    <span className="path7"></span>
                    <span className="path8"></span>
                </div>
                <h2 className={'pl-4 text-3xl text-white font-bold'}>Education</h2>
            </div>

            {
                educations?.map(education => (
                    <div key={education?.title} className="flex flex-col mb-5 pl-12 relative">
                        <h3 className={'text-white text-lg md:text-xl mb-2 dv-resume-item font-bold'}>
                            {education?.title}
                        </h3>
                        <span
                            className={'text-slate-500 mb-2'}>{education?.start} - {education?.end ? education?.end : 'Present'}</span>
                        <p className={'text-slate-300 text-justify hover:text-gray-200'}>{education?.description}</p>
                    </div>
                ))
            }
        </>
    );
}

export default memo(Education);
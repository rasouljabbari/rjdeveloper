import React, {useState} from 'react';
import {labelClass, inputClass, skills, submitClass} from "../../../../stateList";
import Select from "react-select";

function Resume() {
    const [education, setEducation] = useState({
        title: '',
        date: '',
        description: ''
    });

    const [experience, setExperience] = useState({
        title: '',
        company: '',
        date: '',
        location: '',
        description: '',
        skills: [],
    });

    const formHandler = (e) => {
        e.preventDefault()
    }

    return (
        <form onSubmit={formHandler}>
            <div className={'gap-8 grid grid-cols-1 lg:grid-cols-2'}>
                <div>
                    <div className="flex items-center mb-5">
                <span className="icon-icon-education text-teal-300 text-3xl">
                    <span className="path1"></span>
                    <span className="path2"></span>
                    <span className="path3"></span>
                    <span className="path4"></span>
                    <span className="path5"></span>
                    <span className="path6"></span>
                    <span className="path7"></span>
                    <span className="path8"></span>
                </span>
                        <h2 className={'pl-4 text-3xl text-white font-bold'}>Education</h2>
                    </div>
                    <label
                        className={labelClass}
                        htmlFor="title">
                        Title
                        <input
                            type='text'
                            className={inputClass}
                            name="title" id="title"
                            value={education?.title}
                            onChange={({target: {value}}) => setEducation({...education, title: value})}
                        />
                    </label>
                    <label
                        className={labelClass}
                        htmlFor="date">
                        Date
                        <input
                            type='text'
                            className={inputClass}
                            name="date" id="date"
                            value={education?.date}
                            onChange={({target: {value}}) => setEducation({...education, date: value})}
                        />
                    </label>
                    <label
                        className={labelClass}
                        htmlFor="description">
                        Description
                        <textarea
                            className={inputClass}
                            name="description" id="description" cols="30" rows="10"
                            value={education?.description}
                            onChange={({target: {value}}) => setEducation({...education, description: value})}
                        ></textarea>
                    </label>
                </div>

                <div>
                    <div className="flex items-center mb-5">
                    <span className="icon-icon-experience text-teal-300 text-3xl">
                        <span className="path1"></span>
                        <span className="path2"></span>
                    </span>
                        <h2 className={'pl-4 text-3xl text-white font-bold'}>Experience</h2>
                    </div>
                    <label
                        className={labelClass}
                        htmlFor="title">
                        Title
                        <input
                            type='text'
                            className={inputClass}
                            name="title" id="title"
                            value={experience?.title}
                            onChange={({target: {value}}) => setExperience({...experience, title: value})}
                        />
                    </label>
                    <label
                        className={labelClass}
                        htmlFor="company">
                        Company
                        <input
                            type='text'
                            className={inputClass}
                            name="company" id="company"
                            value={experience?.company}
                            onChange={({target: {value}}) => setExperience({...experience, company: value})}
                        />
                    </label>
                    <label
                        className={labelClass}
                        htmlFor="date">
                        Date
                        <input
                            type='text'
                            className={inputClass}
                            name="date" id="date"
                            value={experience?.date}
                            onChange={({target: {value}}) => setExperience({...experience, date: value})}
                        />
                    </label>
                    <label
                        className={labelClass}
                        htmlFor="location">
                        Location
                        <input
                            type='text'
                            className={inputClass}
                            name="location" id="location"
                            value={experience?.location}
                            onChange={({target: {value}}) => setExperience({...experience, location: value})}
                        />
                    </label>

                    <label
                        className={labelClass}
                        htmlFor="skills">
                        Skills
                        <Select
                            className={`dv-dark-input`}
                            defaultValue={experience?.skills}
                            isMulti
                            options={skills}
                            onChange={(value) => setExperience({...experience, skills: value})}
                            classNamePrefix="select"
                        />
                    </label>

                    <label
                        className={labelClass}
                        htmlFor="description">
                        Description
                        <textarea
                            className={inputClass}
                            name="description" id="description" cols="30" rows="10"
                            value={experience?.description}
                            onChange={({target: {value}}) => setExperience({...experience, description: value})}
                        ></textarea>
                    </label>
                </div>
            </div>

            <button type='submit' className={submitClass}>Submit Form</button>
        </form>
    );
}

export default Resume;
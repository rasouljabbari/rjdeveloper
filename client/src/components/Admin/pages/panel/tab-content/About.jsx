import React, {useState} from 'react';
import {labelClass, inputClass, submitClass} from "../../../../stateList";

function About() {
    const [description, setDescription] = useState('');

    const formHandler = (e) => {
        e.preventDefault()
        console.log(description)
    }

    return (
        <form onSubmit={formHandler} className={'max-w-[900px] mx-auto'}>
            <label
                className={labelClass}
                htmlFor="description">
                About Description
                <textarea
                    className={inputClass}
                    name="description" id="description" cols="30" rows="10"
                    value={description}
                    onChange={({target: {value}}) => setDescription(value)}
                ></textarea>
            </label>
            <button
                type="submit"
                className={submitClass}
            >
                Sign in
            </button>
        </form>
    );
}

export default About;
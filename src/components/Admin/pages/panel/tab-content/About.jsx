import React, {useState} from 'react';

function About() {
    const [description, setDescription] = useState('');

    const formHandler = (e) => {
        e.preventDefault()
        console.log(description)
    }
    const inputClass =
        'mt-3 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
    const labelClass = 'block mb-2 text-sm font-medium text-gray-900 dark:text-white'
    return (
        <form onSubmit={formHandler}>
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
        </form>
    );
}

export default About;
import React, {useState} from 'react'
import Input from './Input'
import {useNavigate} from "react-router";
import {submitClass} from "../../../../stateList";
import axios from "axios";
import {MAIN_URL} from "../../../../../assets/scripts/GeneralVariables";

function Form({inputs, setInputs}) {
    const [error , setError] = useState('')
    const navigate = useNavigate()
    const inputHandler = ({target: {name, value}}) => {
        setInputs({...inputs, [name]: value})
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post(`${MAIN_URL}/auth/login`, inputs)
            .then(function (response) {
                if(response.status === 200) {
                    const {token} = response.data
                    localStorage.setItem('Token',token)
                    navigate('/admin/dashboard')
                }
            })
            .catch(function (error) {
                setError(error?.response?.data)
            });
    }

    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <h1
                className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white font-serif"
            >
                Rasoul Jabbari
            </h1>
            <div
                className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Sign in to your account
                    </h1>
                    <form onSubmit={submitHandler} className="space-y-4 md:space-y-6">
                        <Input
                            name="mobile"
                            type="number"
                            placeholder="09123456789"
                            value={inputs?.mobile}
                            inputHandler={inputHandler}
                        />
                        <Input
                            name="password"
                            type="password"
                            placeholder="••••••••"
                            value={inputs?.password}
                            inputHandler={inputHandler}
                        />
                        {
                            error && <p className={'text-rose-500 text-center text-md'}>{error}</p>
                        }
                        <button
                            type="submit"
                            className={submitClass}
                        >
                            Sign in
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form

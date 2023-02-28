import React, {useState} from 'react'
import Form from './comp/Form'

function Login() {
    const [inputs, setInputs] = useState({
        mobile: '',
        password: '',
    })

    return (
        <Form inputs={inputs} setInputs={setInputs}/>
    )
}

export default Login

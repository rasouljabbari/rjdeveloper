import React, {useState} from "react"

function Contact() {

    const [inputs , setInputs] = useState({
        full_name: "",
    })

    const formHandler = (e) => {
        e.preventDefault()
        console.log(inputs)
    }

    return (
        <>
            <h1 className={"text-white text-2xl md:text-3xl font-bold mb-5 border-b-4 border-teal-300 w-fit rounded-lg px-2 pb-2"}>Contact</h1>

            <h2 className={"text-2xl text-white font-bold mb-6"}>Contact Form</h2>

            <form onSubmit={formHandler}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <input type="text" name="full_name" className={"w-auto border-0 outline-0 p-3 rounded-xl mb-5"} placeholder={"Full name"} value={inputs?.full_name} onChange={(e)=>{setInputs(prevState => ({...prevState , full_name : e.target.value}))}}/>

                    <input type="number" name="mobile" className={"w-auto border-0 outline-0 p-3 rounded-xl mb-5"} placeholder={"Phone Number"} value={inputs?.mobile} onChange={(e)=>{setInputs(prevState => ({...prevState , mobile : e.target.value}))}}/>

                    <input type="email" name="email" className={"w-auto border-0 outline-0 p-3 rounded-xl mb-5 "} placeholder={"Email Address"} value={inputs?.email} onChange={(e)=>{setInputs(prevState => ({...prevState , email : e.target.value}))}}/>
                </div>

                <textarea name="message" className={"w-full border-0 outline-0 p-3 rounded-xl mb-5 "} placeholder={"Your Message"} value={inputs?.message} onChange={(e)=>{setInputs(prevState => ({...prevState , message : e.target.value}))}}/>

                <button type={"submit"}>Send Message</button>
            </form>

        </>
    )
}

export default Contact
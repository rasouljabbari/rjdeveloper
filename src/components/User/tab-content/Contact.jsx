import React, { useState } from 'react'
import {
  emptyErrorHandling,
  maxLengthHandler,
  dataSubmitRegex,
  emptySubmitErrorHandling,
} from '../../../assets/scripts/errorHandling'
import Swal from 'sweetalert2'

function Contact() {
  const [inputs, setInputs] = useState({
    full_name: '',
    mobile: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState({
    full_name: '',
    mobile: null,
    email: '',
    message: '',
  })

  const focusHandler = (e) => {
    let name = e.target.name
    if (emptyErrorHandling(e)) {
      setErrors((prevState) => ({ ...prevState, [name]: emptyErrorHandling(e) }))
    } else {
      setErrors((prevState) => ({ ...prevState, [name]: '' }))
    }
  }

  const inputHandler = (e) => {
    if (e.target.value.length > 0) {
      if (maxLengthHandler(e)) {
        setErrors((prevState) => ({ ...prevState, [e.target.name]: maxLengthHandler(e) }))
        return false
      }
      setInputs((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))
      setErrors((prevState) => ({ ...prevState, [e.target.name]: '' }))
    } else {
      setInputs((prevState) => ({ ...prevState, [e.target.name]: '' }))
      focusHandler(e)
    }
  }

  const formHandler = (e) => {
    e.preventDefault()
    if (errors) {
      console.log(errors)

      let keys = Object.keys(inputs)
      let hasErrors = false

      for (let key of keys) {
        let input = document.getElementById(key)
        if (emptySubmitErrorHandling(input)) {
          setErrors((prevState) => ({ ...prevState, [key]: emptySubmitErrorHandling(input) }))
          hasErrors = true
        }
        if (dataSubmitRegex(input)) {
          setErrors((prevState) => ({ ...prevState, [key]: dataSubmitRegex(input) }))
          hasErrors = true
        }
      }
      console.log(hasErrors)
      if (hasErrors) {
        return false
      } else {
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          text: 'form has been submitted',
          showConfirmButton: false,
          timer: 5000,
        })
      }
    }
  }

  return (
    <>
      <h1
        className={
          'text-white text-2xl md:text-3xl font-bold mb-5 border-b-4 border-teal-300 w-fit rounded-lg px-2 pb-2'
        }
      >
        Contact
      </h1>

      <h2 className={'text-2xl text-white font-bold mb-6'}>Contact Form</h2>

      <form onSubmit={formHandler}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
          <div className={'flex flex-col pb-9 relative'}>
            <input
              type="text"
              name="full_name"
              id="full_name"
              className={
                'w-auto outline-0 p-3 rounded-2xl bg-gray-800 text-slate-200 mb-1 border-2' +
                (errors?.full_name ? ' border-rose-500' : 'border-slate-200')
              }
              data-required={'true'}
              onFocus={(e) => focusHandler(e)}
              placeholder={'Full name'}
              value={inputs?.full_name}
              onChange={(e) => {
                setInputs((prevState) => ({ ...prevState, full_name: e.target.value }))
                setErrors((prevState) => ({ ...prevState, [e.target.name]: '' }))
              }}
            />
            {errors?.full_name && (
              <span className={'text-rose-500 text-md absolute left-0 bottom-2'}>
                {errors?.full_name}
              </span>
            )}
          </div>

          <div className={'flex flex-col pb-9 relative'}>
            <input
              type="number"
              name="mobile"
              id="mobile"
              className={
                'w-auto outline-0 p-3 rounded-2xl bg-gray-800 text-slate-200 mb-1 border-2' +
                (errors?.mobile ? ' border-rose-500' : 'border-slate-200')
              }
              data-maxlength={11}
              data-required={'true'}
              onFocus={(e) => focusHandler(e)}
              placeholder={'Phone Number'}
              value={inputs?.mobile}
              onChange={inputHandler}
            />
            {errors?.mobile && (
              <span className={'text-rose-500 text-md absolute left-0 bottom-2'}>
                {errors?.mobile}
              </span>
            )}
          </div>

          <div className={'flex flex-col pb-9 relative'}>
            <input
              type="email"
              name="email"
              id="email"
              className={
                'w-auto outline-0 p-3 rounded-2xl bg-gray-800 text-slate-200 mb-1 border-2' +
                (errors?.email ? ' border-rose-500' : 'border-slate-200')
              }
              data-required={'true'}
              onFocus={(e) => focusHandler(e)}
              placeholder={'Email Address'}
              value={inputs?.email}
              onChange={(e) => {
                setInputs((prevState) => ({ ...prevState, email: e.target.value }))
                setErrors((prevState) => ({ ...prevState, [e.target.name]: '' }))
              }}
            />
            {errors?.email && (
              <span className={'text-rose-500 text-md absolute left-0 bottom-2'}>
                {errors?.email}
              </span>
            )}
          </div>
        </div>

        <div className={'flex flex-col pb-9 relative'}>
          <textarea
            name="message"
            id="message"
            rows={5}
            className={
              'w-full outline-0 p-3 rounded-2xl bg-gray-800 text-slate-200 mb-1 border-2' +
              (errors?.message ? ' border-rose-500' : 'border-slate-200')
            }
            data-required={'true'}
            onFocus={(e) => focusHandler(e)}
            placeholder={'Your Message'}
            value={inputs?.message}
            onChange={(e) => {
              setInputs((prevState) => ({ ...prevState, message: e.target.value }))
              setErrors((prevState) => ({ ...prevState, [e.target.name]: '' }))
            }}
          />
          {errors?.message && (
            <span className={'text-rose-500 text-md absolute left-0 bottom-2'}>
              {errors?.message}
            </span>
          )}
        </div>

        <button
          type={'submit'}
          className={
            'bg-gradient-to-l from-cyan-500 to-blue-500 rounded-3xl text-white py-4 px-12 transition-transform hover:-translate-y-1 duration-300'
          }
        >
          Send Message
        </button>
      </form>
    </>
  )
}

export default Contact

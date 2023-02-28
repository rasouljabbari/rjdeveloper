import React from 'react'
import Rasoul from '../../assets/images/rasouljabbari.jpeg'
import Resume from '../../assets/cv/RasoulJabbari-cv.pdf'
function Header() {
  return (
    <div
      className={
        'bg-gray-900 p-8 rounded-2xl relative grid grid-cols-1 lg:grid-cols-2 gap-4 m-4 shadow-md shadow-gray-900'
      }
    >
      <div className="flex flex-wrap items-start relative pr-3 mb-6 lg:mb-0 lg:border-r border-gray-600">
        <div className="rounded-2x ml-0 mr-auto sm:mx-0 mb-4 sm:mb-0 -mt-16">
          <img
            src={Rasoul}
            width={162}
            height={162}
            className="rounded-3xl"
            alt={'rasoul jabbari'}
          />
        </div>
        <div className="sm:ml-8">
          <h1 className={'text-white text-3xl mb-2'}>Rasoul Jabbari</h1>
          <p className={'text-stone-400 text-lg mb-2 hover:text-white hover:cursor-default'}>
            React Js Developer
          </p>
          <div className="flex items-center mb-3">
            <div className="flex items-center">
              <a
                href={'https://www.instagram.com/accounts/login/?next=/rjdeveloper.ir/'}
                rel="noreferrer"
                target={'_blank'}
              >
                <span className="icon-instagram hover:text-pink-500 text-stone-400 text-xl pr-3" />
              </a>
              <a
                href={'https://wa.me/+989106878810?text=Hello Rasoul !'}
                rel="noreferrer"
                target={'_blank'}
              >
                <span className="icon-whatsapp hover:text-green-500 text-stone-400 text-xl pr-3" />
              </a>
            </div>
          </div>

          <a
            href={Resume}
            download
            className={
              'flex justify-center items-center px-2 py-2 rounded-lg text-white bg-gradient-to-l from-cyan-500 to-blue-500 hover:bg-gradient-to-r'
            }
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              ></path>
            </svg>
            <span className={'pl-4'}>Download CV</span>
          </a>
        </div>
      </div>

      <div className="flex flex-wrap items-start">
        <ul className={'pr-4 md:pl-14'}>
          <li className={'lg:mb-5'}>
            <span className={'text-stone-400 text-sm mb-1 uppercase'}>Email</span>
            <p className={'text-white text-md mb-4 lg:mb-2'}>rjdeveloper17@gmail.com</p>
          </li>
          <li>
            <span className={'text-stone-400 text-sm mb-1 uppercase'}>phone</span>
            <p className={'text-white text-md mb-4 lg:mb-2'}>09106878810</p>
          </li>
        </ul>

        <ul className={'md:pl-14'}>
          <li className={'lg:mb-5'}>
            <span className={'text-stone-400 text-sm mb-1 uppercase'}>BIRTHDAY</span>
            <p className={'text-white text-md mb-4 lg:mb-2'}>1998</p>
          </li>
          <li>
            <span className={'text-stone-400 text-sm mb-1 uppercase'}>LOCATION</span>
            <p className={'text-white text-md mb-4 lg:mb-2'}>Tabriz</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header

import React from 'react'

function Resume() {
  return (
    <>
      <h1
        className={
          'text-white text-2xl md:text-3xl font-bold mb-8 border-b-4 border-teal-300 w-fit rounded-lg px-2 pb-2'
        }
      >
        Resume
      </h1>

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

      <div className="flex flex-col mb-5 pl-12 relative">
        <h3 className={'text-white text-lg md:text-xl mb-2 dv-resume-item font-bold'}>
          Shahid Madani University
        </h3>
        <span className={'text-slate-500 mb-2'}>2018 - 2022</span>
        <p className={'text-slate-300 text-justify hover:text-gray-200'}>
          Bachelor of Computer Engineering: I earned a degree from this university institution and
          have successfully passed all the courses with an A grade.
        </p>
      </div>

      <div className="flex items-center pt-5 mb-5">
        <span className="icon-icon-experience text-teal-300 text-3xl">
          <span className="path1"></span>
          <span className="path2"></span>
        </span>
        <h2 className={'pl-4 text-3xl text-white font-bold'}>Experience</h2>
      </div>

      <div className="flex flex-col mb-5 pl-12 relative">
        <h3 className={'text-white text-lg md:text-xl mb-2 dv-resume-item font-bold'}>
          React Js Developer
        </h3>
        <h5 className={'text-white mb-2 dv-resume-item font-bold'}>Aral Studio - Freelance</h5>
        <span className={'text-slate-400 mb-2 text-sm'}>Jan 2021 - Present</span>
        <span className={'text-slate-400 mb-2 text-sm'}>Istanbul, Turkey</span>
        <p className={'text-slate-300 text-md text-justify hover:text-gray-200 mb-2'}>
          Developed and maintained React Js web applications for the company&apos;s clients,
          including bug fixes, enhancements, and new features. Collaborated with other developers to
          ensure code quality standards are met and followed best practices in software development.
        </p>
        <span className={'text-slate-300 text-md'}>
          <span className={'text-teal-300'}>Skills :</span> JavaScript - React.js
        </span>
      </div>

      <div className="flex flex-col mb-5 pl-12 relative">
        <h3 className={'text-white text-lg md:text-xl mb-2 dv-resume-item font-bold'}>
          Front-End Developer
        </h3>
        <h5 className={'text-white mb-2 dv-resume-item font-bold'}>Rahkargostaran · Full-time</h5>
        <span className={'text-slate-400 mb-2 text-sm'}>Jun 2020 - Jan 2021</span>
        <span className={'text-slate-400 mb-2 text-sm'}>Tabrīz, East Azerbaijan, Iran</span>
        <p className={'text-slate-300 text-md text-justify hover:text-gray-200 mb-2'}>
          Worked with a team of developers to create an e-commerce website using React Js and Node
          for backend processing. Designed multiple dynamic and browser compatible pages using
          HTML5, CSS3, Javascript (React, Redux)
        </p>
        <span className={'text-slate-300 text-md'}>
          <span className={'text-teal-300'}>Skills :</span> JavaScript - React.js
        </span>
      </div>

      <div className="flex flex-col mb-5 pl-12 relative">
        <h3 className={'text-white text-lg md:text-xl mb-2 dv-resume-item font-bold'}>
          Front-End Developer
        </h3>
        <h5 className={'text-white mb-2 dv-resume-item font-bold'}>eSanj · Freelance</h5>
        <span className={'text-slate-400 mb-2 text-sm'}>Feb 2020 - Jun 2020</span>
        <span className={'text-slate-400 mb-2 text-sm'}>Tehran, Iran</span>
        <p className={'text-slate-300 text-md text-justify hover:text-gray-200 mb-2'}>
          Produced multiple visual elements of web applications by translating UI/UX design
          wireframes into code, producing high quality markup using HTML and CSS and Javascript.
        </p>
        <span className={'text-slate-300 text-md'}>
          <span className={'text-teal-300'}>Skills :</span> JavaScript - CSS3 - Bootstrap5
        </span>
      </div>

      <div className="flex flex-col mb-5 pl-12 relative">
        <h3 className={'text-white text-lg md:text-xl mb-2 dv-resume-item font-bold'}>
          Front-End Developer
        </h3>
        <h5 className={'text-white mb-2 dv-resume-item font-bold'}>Birka Market · Full-time</h5>
        <span className={'text-slate-400 mb-2 text-sm'}>Nov 2019 - Feb 2020</span>
        <span className={'text-slate-400 mb-2 text-sm'}>Tabrīz, East Azerbaijan, Iran</span>
        <p className={'text-slate-300 text-md text-justify hover:text-gray-200 mb-2'}>
          Worked clisely with an agile team of 10 members and provided end-to-end solutions for
          clients. Managing and conducting the development of multiple ongoing projects.
        </p>
        <span className={'text-slate-300 text-md'}>
          <span className={'text-teal-300'}>Skills :</span> React.js - Bootstrap5
        </span>
      </div>

      <div className="flex items-center pt-5 mb-5">
        <span className="icon-code text-teal-300 text-3xl" />
        <h2 className={'pl-4 text-2xl text-white font-bold'}>My Skill</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 pt-4">
        {/*<div className="flex flex-col mb-5 p-5 bg-teal-200 sm:bg-teal-300 dv-skill-card items-center rounded-xl w-full sm:w-3/4 pointer-default">*/}
        <div className="flex flex-col mb-5 p-5 bg-gradient-to-b from-cyan-500 to-teal-500 items-center rounded-xl w-full sm:w-3/4 pointer-default">
          <i className="devicon-html5-plain text-4xl text-white"></i>
          <span className={'text-md md:text-lg font-normal sm:font-bold text-slate-100'}>
            HTML5
          </span>
        </div>

        <div className="flex flex-col mb-5 p-5 bg-gradient-to-b from-cyan-500 to-teal-500 items-center rounded-xl w-full sm:w-3/4 pointer-default">
          <i className="devicon-css3-plain text-4xl text-white"></i>
          <span className={'text-md md:text-lg font-normal sm:font-bold text-slate-100'}>CSS3</span>
        </div>

        <div className="flex flex-col mb-5 p-5 bg-gradient-to-b from-cyan-500 to-teal-500 items-center rounded-xl w-full sm:w-3/4 pointer-default">
          <i className="devicon-bootstrap-plain text-4xl text-white"></i>
          <span className={'text-md md:text-lg font-normal sm:font-bold text-slate-100'}>
            Bootstrap
          </span>
        </div>

        <div className="flex flex-col mb-5 p-5 bg-gradient-to-b from-cyan-500 to-teal-500 items-center rounded-xl w-full sm:w-3/4 pointer-default">
          <i className="devicon-tailwindcss-plain text-4xl text-white"></i>
          <span className={'text-md md:text-lg font-normal sm:font-bold text-slate-100'}>
            Tailwind
          </span>
        </div>

        <div className="flex flex-col mb-5 p-5 bg-gradient-to-b from-cyan-500 to-teal-500 items-center rounded-xl w-full sm:w-3/4 pointer-default">
          <i className="devicon-sass-original text-4xl text-white"></i>
          <span className={'text-md md:text-lg font-normal sm:font-bold text-slate-100'}>Sass</span>
        </div>

        <div className="flex flex-col mb-5 p-5 bg-gradient-to-b from-cyan-500 to-teal-500 items-center rounded-xl w-full sm:w-3/4 pointer-default">
          <i className="devicon-javascript-plain text-4xl text-white"></i>
          <span className={'text-md md:text-lg font-normal sm:font-bold text-slate-100'}>
            Javascript
          </span>
        </div>

        <div className="flex flex-col mb-5 p-5 bg-gradient-to-b from-cyan-500 to-teal-500 items-center rounded-xl w-full sm:w-3/4 pointer-default">
          <i className="devicon-jquery-plain text-4xl text-white"></i>
          <span className={'text-md md:text-lg font-normal sm:font-bold text-slate-100'}>
            Jquery
          </span>
        </div>

        <div className="flex flex-col mb-5 p-5 bg-gradient-to-b from-cyan-500 to-teal-500 items-center rounded-xl w-full sm:w-3/4 pointer-default">
          <i className="devicon-npm-original-wordmark text-4xl text-white"></i>
          <span className={'textsdm md:text-l font-normalgsm: font-bold text-slate-100'}>Npm</span>
        </div>

        <div className="flex flex-col mb-5 p-5 bg-gradient-to-b from-cyan-500 to-teal-500 items-center rounded-xl w-full sm:w-3/4 pointer-default">
          <i className="devicon-react-original text-4xl text-white"></i>
          <span className={'text-md md:text-lg font-normal sm:font-bold text-slate-100'}>
            React
          </span>
        </div>

        <div className="flex flex-col mb-5 p-5 bg-gradient-to-b from-cyan-500 to-teal-500 items-center rounded-xl w-full sm:w-3/4 pointer-default">
          <i className="devicon-redux-original text-4xl text-white"></i>
          <span className={'text-md md:text-lg font-normal sm:font-bold text-slate-100'}>
            Redux
          </span>
        </div>

        <div className="flex flex-col mb-5 p-5 bg-gradient-to-b from-cyan-500 to-teal-500 items-center rounded-xl w-full sm:w-3/4 pointer-default">
          <i className="devicon-nextjs-line text-4xl text-white"></i>
          <span className={'text-md md:text-lg font-normal sm:font-bold text-slate-100'}>
            Next Js
          </span>
        </div>

        <div className="flex flex-col mb-5 p-5 bg-gradient-to-b from-cyan-500 to-teal-500 items-center rounded-xl w-full sm:w-3/4 pointer-default">
          <i className="devicon-jest-plain text-4xl text-white"></i>
          <span className={'text-md md:text-lg font-normal sm:font-bold text-slate-100'}>Jest</span>
        </div>
      </div>
    </>
  )
}

export default Resume

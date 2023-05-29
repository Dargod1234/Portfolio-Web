// eslint-disable-next-line no-unused-vars
import React from 'react'
import js from '../../public/img/js.png'
import css from '../../public/img/css.png'
import node from '../../public/img/nodejs.png'
import php from '../../public/img/php.png'
import react from '../../public/img/react.png'
import tailwind from '../../public/img/tailwind.png'
import webpack from '../../public/img/webpack.png'
import wordpress from '../../public/img/wordpress.png'

const skills = () => {
  return (
    <section id="skills" className="justify-center bg-transparent pb-16">
      <div className=" flex flex-col flex-wrap content-center ">
        <div className="flex justify-center pb-20">
          <h3 className="relative bg-gradient-to-t from-pink-500 to-violet-500 bg-clip-text text-6xl font-bold text-transparent ">
            Skills
          </h3>
        </div>
        <div className=" flex w-[75rem] flex-grow justify-center">
          <div className="inline p-3">
            <div className="flex flex-wrap justify-center">
              <img src={js} alt="jslogo" className="logo-skills w-16"></img>
            </div>
            <div className="flex justify-center">
              <h4 className="m-[0.30rem] font-bold leading-[3rem] text-violet-800 ">
                JavaScript
              </h4>
            </div>
          </div>
          <div className=" p-3">
            <div className="flex flex-wrap justify-center">
              <img src={css} alt="csslogo" className=" logo-skills w-16"></img>
            </div>
            <div className="flex justify-center">
              <h4 className="m-[0.30rem] font-bold leading-[3rem] text-violet-800 ">
                Css
              </h4>
            </div>
          </div>
          <div className=" p-3">
            <div className="flex flex-wrap justify-center">
              <img
                src={react}
                alt="reactlogo"
                className=" logo-skills w-16"
              ></img>
            </div>
            <div className="flex justify-center">
              <h4 className="m-[0.30rem] font-bold leading-[3rem] text-violet-800 ">
                React.js
              </h4>
            </div>
          </div>
          <div className=" p-3">
            <div className="flex flex-wrap justify-center">
              <img
                src={webpack}
                alt="webpacklogo"
                className=" logo-skills w-16"
              ></img>
            </div>
            <div className="flex justify-center">
              <h4 className="m-[0.30rem] font-bold leading-[3rem] text-violet-800 ">
                Webpack
              </h4>
            </div>
          </div>
        </div>
        <div className=" flex w-[75rem] flex-grow justify-center">
          <div className=" p-3">
            <div className="flex flex-wrap justify-center">
              <img
                src={node}
                alt="nodelogo"
                className=" logo-skills w-16"
              ></img>
            </div>
            <div className="flex justify-center">
              <h4 className="m-[0.30rem] font-bold leading-[3rem] text-violet-800 ">
                Node.js
              </h4>
            </div>
          </div>
          <div className=" p-3">
            <div className="flex flex-wrap justify-center">
              <img
                src={tailwind}
                alt="twlogo"
                className="logo-skills w-16"
              ></img>
            </div>
            <div className="flex justify-center">
              <h4 className="m-[0.30rem] font-bold leading-[3rem] text-violet-800 ">
                Taildwind
              </h4>
            </div>
          </div>
          <div className=" p-3">
            <div className="flex flex-wrap justify-center">
              <img
                src={wordpress}
                alt="wplogo"
                className=" logo-skills w-16"
              ></img>
            </div>
            <div className="flex justify-center">
              <h4 className="m-[0.30rem] font-bold leading-[3rem] text-violet-800 ">
                Wordpress
              </h4>
            </div>
          </div>
          <div className=" p-3">
            <div className="flex flex-wrap justify-center">
              <img src={php} alt="phplogo" className=" logo-skills w-16"></img>
            </div>
            <div className="flex justify-center">
              <h4 className="m-[0.30rem] font-bold leading-[3rem] text-violet-800 ">
                PHP
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default skills

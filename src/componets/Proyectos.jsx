// eslint-disable-next-line no-unused-vars
import React from 'react'
import ProjectList from './ListaProyectos.jsx'

function Proyectos () {
  return (
    <div id="proyectos" className=" pb-16">
      <div className="flex justify-center">
        <h2 className="relative bg-gradient-to-t from-pink-500 to-violet-500 bg-clip-text pb-16 text-6xl font-bold text-transparent ">
          Proyectos
        </h2>
      </div>
      <ProjectList />
    </div>
  )
}

export default Proyectos

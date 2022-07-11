import React from 'react'
import Project from './Project'

const Cards = ({projects}) => {
  return (
    <div>
      {projects?.map((project)=> <Project key={project._id } project={project} />)}
          
    </div>
  )
}

export default Cards
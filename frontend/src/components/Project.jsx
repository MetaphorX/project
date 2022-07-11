import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'
import { client } from '../client'
import { shortenAbstract } from '../utils/shortenAbstract'

const Project = ({project:{title, supervisedBy, department,abstract, _id}}) => {
  
  const [projectHovered, setProjectHovered] = useState(false)
  
  const navigate = useNavigate()
  
  return (
    <div>
      
    <div>
      <div className="mb-3 mt-5 shadow-lg lg:border-3-0 lg:border lg:border-red-500 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal hover:cursor-pointer">
        <div className="mb-5 flex-col"
          onMouseEnter={()=> setProjectHovered(true)}
          onMouseLeave={()=> setProjectHovered(false)}
        >
          <button 
            type="button" 
            onClick={()=> navigate(`/department/${_id}`)} 
            className='text-sm text-gray-600 items-center'
            >{department}
            </button>
          <div className="text-gray-900 font-bold text-xl mb-2 border-b border-red-200 p-2">
            <button type="button " onClick={()=> navigate(`/project-detail/${_id}`)}>{title} </button>
          </div>
          <p className="text-gray-700 text-base">{abstract}</p>
        </div>
        <div className="flex items-center bg-red-400 p-2">
          <div className="text-sm">
            <button 
              onClick={()=> navigate(`/supervisor/${_id}`)}
              type="button" className="text-gray-900 leading-none">{supervisedBy}</button>
            <p className="text-gray-600">Aug 18</p>
          </div>
        </div>
      </div>
    </div>


</div> 

  )
}

export default Project
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {client} from '../client'
import Cards from './Cards'
import Spinner from './Spinner'
import { feedQuery, searchQuery } from '../utils/data'


const Feed = () => {
  const [loading, setLoading] = useState(false)
  const [projects, setProjects] = useState(null)
  const {departmentId} = useParams()

  
  useEffect(()=>{
    setLoading(true);
      
    if(departmentId){
      const query = searchQuery(departmentId)
      client.fetch(query)
        .then((data) =>{
          setProjects(data)
          setLoading(false)
        });
    }else{
      client.fetch(feedQuery)
        .then((data)=>{
          setProjects(data)
          setLoading(false)
        });
    }
  },[departmentId])

  if(loading){
     return <Spinner message = "Loading Projects !!!"/>
    }
  return (
    <div>
      {projects && <Cards projects={projects} />}
    </div>
  )
}

export default Feed
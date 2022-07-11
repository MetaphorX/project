import React, {useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import {Navbar, Feed, ProjectDetail, Search, Department} from '../components'

const Projects = () => {

  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className='px-2 md:px-5'>
      <div className='bg-gray-50'>
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      </div>
      <div className='h-full'>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/department/:departmentId" element={<Department />} />
          <Route path="/project-detail/:projectId" element={<ProjectDetail />} />
          <Route path="/search" element={<Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />} />
        </Routes>

      </div>
    </div>
  )
}

export default Projects
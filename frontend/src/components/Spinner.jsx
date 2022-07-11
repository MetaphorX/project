import React from 'react'
import { CirclesWithBar } from 'react-loader-spinner'

const Spinner = ({message}) => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-full'>
        <CirclesWithBar 
            type="Circles"
            color="#f44336"
            height={400}
            width={200}
            className="m-5"
        />
        <p className='text-lg font-extrabold text-brightRed text-center px-2'>{message}</p>
    </div>
  )
}

export default Spinner
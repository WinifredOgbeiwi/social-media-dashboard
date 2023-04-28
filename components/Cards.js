import React from 'react'
import{FaFacebookSquare, FaInstagramSquare, FaTwitterSquare} from 'react-icons/fa'
function Cards() {
  return (
    <div className='m-5'>
    <div className=' shadow-2xl w-fit py-5 px-10 flex flex-col items-center'>
        <FaFacebookSquare className='text-5xl text-sky-500'/>
        <h3 className='font-bold text-5xl'>200K</h3>
        <p>Followers</p>
 
    </div>
    </div>
  )
}

export default Cards

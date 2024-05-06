import React from 'react'
import ThreeImagesWithTitles from '../components/ImageTitle/ThreeImagesWithTitles'
import Excos from '../components/Excos/Excos'

const page = () => {
  return (
    <div className='py-4'>
        <h3 className="font-bold text-xl">PAST PRESIDENTS OF FIS<br></br>2018-2023 Academic Session</h3>
        <ThreeImagesWithTitles/>
        <Excos/>
    </div>
  )
}

export default page
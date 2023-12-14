import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Facilities, Labs, Sports, NCC } from '../../components';

const FaciltiesPage = () => {
  return (
    <div className='main-content'>
      <Routes>
        <Route path={"/"} element={<Facilities />} />
        <Route path={"/labs"} element={<Labs />} />
        <Route path={"/sports"} element={<Sports />} />
        <Route path={"/ncc"} element={<NCC />} />
      </Routes>
    </div>
  )
}

export default FaciltiesPage
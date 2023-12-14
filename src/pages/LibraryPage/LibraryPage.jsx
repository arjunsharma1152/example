import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Library, ELibrary, QuickLinks, NewArrivals } from '../../components'

const LibraryPage = () => {
  return (
    <div className='main-content'>
      <Routes>
        <Route path={"/"} element={<Library />} />
        <Route path={"/elibrary"} element={<ELibrary />} />
        <Route path={"/links"} element={<QuickLinks />} />
        <Route path={"/arrivals"} element={<NewArrivals />} />
      </Routes>
    </div>
  )
}

export default LibraryPage
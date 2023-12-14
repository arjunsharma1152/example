import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Gallery, News, Photo, Video } from '../../components'

const GalleryPage = () => {
  return (
    <div className='main-content'>
      <Routes>
        <Route path={"/"} element={<Gallery />} />
        <Route path={"/news"} element={<News />} />
        <Route path={"/photo"} element={<Photo />} />
        <Route path={"/video"} element={<Video />} />
      </Routes>
    </div>
  )
}

export default GalleryPage
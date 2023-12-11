import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { AboutUs, Chairman, Faculty, ManagingCommittee, Objectives, Principal } from '../../components';

const About = () => {
  return (
    <div className='main-content'>
    <Routes>
      <Route path={"/"} element={<AboutUs />} />
      <Route path={"/chairman-message"} element={<Chairman />} />
      <Route path={"/principal-message"} element={<Principal />} />
      <Route path={"/managing-committee"} element={<ManagingCommittee />} />
      <Route path={"/objectives"} element={<Objectives />} />
      <Route path={"/faculty"} element={<Faculty />} />
    </Routes>
    </div>
  )
}

export default About
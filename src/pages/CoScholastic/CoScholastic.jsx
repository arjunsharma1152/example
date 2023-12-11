import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { AboutUs, Chairman, Faculty, ManagingCommittee, Objectives, Principal } from '../../components';


const CoScholastic = () => {
  return (
<div className='main-content'>
    <Routes>
      <Route path={"/"} element={<AboutUs />} />
      <Route path={"/school-timing"} element={<Chairman />} />
      <Route path={"/school-uniform"} element={<Principal />} />
      <Route path={"/alumni"} element={<ManagingCommittee />} />
      <Route path={"/inter-house"} element={<Objectives />} />
      <Route path={"/inter-class"} element={<Faculty />} />
      <Route path={"/inter-school"} element={<Faculty />} />
      <Route path={"/inter-exams"} element={<Faculty />} />
    </Routes>
    </div>  )
}

export default CoScholastic
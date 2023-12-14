import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { CoScholastic, SchoolTiming, InterClass, Alumni, InterHouse, SchoolUniform, InterSchool, Exams } from '../../components';


const CoScholasticPage = () => {
  return (
<div className='main-content'>
    <Routes>
      <Route path={"/"} element={<CoScholastic />} />
      <Route path={"/school-timing"} element={<SchoolTiming />} />
      <Route path={"/school-uniform"} element={<SchoolUniform />} />
      <Route path={"/alumni"} element={<Alumni />} />
      <Route path={"/inter-house"} element={<InterHouse />} />
      <Route path={"/inter-class"} element={<InterClass />} />
      <Route path={"/inter-school"} element={<InterSchool />} />
      <Route path={"/inter-exams"} element={<Exams />} />
    </Routes>
    </div>  )
}

export default CoScholasticPage
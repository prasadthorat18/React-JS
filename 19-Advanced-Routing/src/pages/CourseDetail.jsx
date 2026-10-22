import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const CourseDetail = () => {

    const params = useParams()
    console.log(params.id);

    
  return (
    <div>
      <h1>{params.id} Course Details</h1>
    </div>
  )
}

export default CourseDetail

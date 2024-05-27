import React from 'react'
import { useSelector } from 'react-redux';

const Student = () => {

    const data=useSelector(item=>item.student)

  return (
   <h2>The Name of the Student is {data.name}</h2>
  )
}

export default Student
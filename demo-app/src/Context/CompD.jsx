import React ,{useContext}from 'react'
import { Global } from './GlobalContext'

const CompD = () => {
    const data=useContext(Global)
  return (
    <>
    {/* <h1>We are Learning {data}</h1> */}
    <h1>The name of the student is {data.fullname}</h1>
    <h1>The age of the student is {data.age}</h1>
    <h1>The address of the student is {data.address}</h1>
    </>
  )
}

export default CompD
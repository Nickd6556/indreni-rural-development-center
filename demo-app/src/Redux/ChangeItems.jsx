import React from 'react'
import { useDispatch } from 'react-redux'

const ChangeItems = () => {
    const dispatch=useDispatch()
    const add=()=>{
        dispatch({type:'Add_To_Cart'})
    }

    const sub=()=>{
        dispatch({type:'Remove_From_Cart'})
    }
  return (
    <>
    <div className="container my-2">
        <div className="row d-flex justify-content-center">
            <div className="col-2">
                <button className='btn btn-outline-info' onClick={add}>+</button>
             
            </div>
            <div className="col-1">
                
                <button className='btn btn-outline-danger'onClick={sub}>-</button>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default ChangeItems
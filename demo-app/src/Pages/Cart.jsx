import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React,{useEffect,useState}from 'react'
import { FaTrashAlt } from "react-icons/fa";

const Cart = () => {
  const [products,setProduct]=useState([])
  useEffect(()=>{
    const cartitems =JSON.parse(localStorage.getItem('cartData'))
    setProduct(cartitems)
  },[])

  //increase QTY

  const increaseQty =(id)=>{
    const updateProduct=products.map(item=>{
      if(item.id === id){
        return{...item,quantity:item.quantity+1}
      }
      return item


    })

    setProduct(updateProduct)
    localStorage.setItem('cartData',JSON.stringify(updateProduct))
  }

  //decreaseQty
  const decreaseQty =(id)=>{
    const updateProduct=products.map(item=>{
      if(item.id === id && item.quantity>1){
        return{...item,quantity:item.quantity-1}
      }
      return item


    })

    setProduct(updateProduct)
    localStorage.setItem('cartData',JSON.stringify(updateProduct))
  }

  const removeCartItem=(id,title)=>{

    const confirm=window.confirm("Are you sure you want to remove this item from cart.")

    if(confirm){
      const filterData = products.filter(item=>item.id!==id)
      localStorage.setItem('cartData',JSON.stringify(filterData))
      setProduct(filterData)
      toast.success(`${title} is Sucessfully Deleted`)
    }
  }



  return (
    <>
    <ToastContainer theme='colored' position='top-center'/>
    <div className="container my-3">
      <div className="row d-flex justify-content-between">
        {products.length === 0 ?

        <h2 className='text-center'>Your Cart is Empty !</h2>
        

        :(
          <>
          <h2 className='text-center'>Items in Cart</h2>

          <div className="col-md-8 shadow">
            {products.map((item,i)=>(
              <div key={i}>
                <hr/>
                <div className="row d-flex align-items-center">
                  <div className="col-2">
                    <img src={item.image} alt={item.title} width={100} />
                  </div>
                  <div className="col-3">
                    <p>{item.title}</p>
                  </div>
                  <div className ="col-2 ">
                    {item.price} $

                  </div>

                  <div className="col-3">
                    <button className='btn btn-outline-info'onClick={()=>increaseQty(item.id)}>+</button>
                    &nbsp;
                    <span>{item.quantity}</span>
                    &nbsp;
                    <button className='btn btn-outline-success' onClick={()=>decreaseQty(item.id)}>-</button>
                  </div>

                  <div className="col-1">
                    <button className='btn btn-danger' onClick={()=>removeCartItem(item.id,item.title)}><FaTrashAlt /></button>

                  </div>
                </div>


              </div>


            ))}


          </div>

          <div className="col-md-3">
            <h3>Cart Summary</h3>
            <hr/>
            <p><strong>Units :</strong>{products.reduce((ac,item)=>ac+(item.quantity),0)}</p>
            <hr/>
            <p><strong>Total :</strong>{products.reduce((ac,item)=>(ac+(item.price*item.quantity)),0)}$</p>
            <hr/>
            <button className='btn btn-outline-info'>Check Out</button>


          </div>
          
          </>
        )
      }

      </div>
    </div>
    </>
  )
}

export default Cart
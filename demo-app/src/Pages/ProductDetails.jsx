import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ProductDetails = () => {

    const[product,setProduct]=useState({})
    const params =useParams()
    const id=params.productId 
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(res=>setProduct(res.data))
        .catch(err=>console.log(err))
    },[id])

    const addToCart=()=>{
      const cartItems =JSON.parse(localStorage.getItem('cartData')) || []
      const productItem ={id:product.id,
        title:product.title,
        description:product.description,
        price:product.price,
        image:product.image,
        quantity:1}

      //to check if the item is present in the cart on not
  
      const existingItem= cartItems.find(items=>items.id===product.id)
        if(existingItem){
            toast.error("The item is already in the cart")
        }
        else{
            cartItems.push(productItem)
            localStorage.setItem('cartData',JSON.stringify(cartItems))
            toast.success("Item added successfully")
        }
    }
  return (
    <>
    <ToastContainer theme='colored'position='top-center'/>

    <div className="container">
      <div className="row d-flex my-5">
        <div className="col-md-3">
            <img src={product.image} alt={product.title} width={300} />


        </div>

        <div className="col-md-5 mt-5 px-5">
            <h1>{product.title}</h1>
            <h2>{product.price}</h2>
            <p>{product.description}</p>
            <p><strong>Category:</strong>{product.category}</p>
            <div className="mb-3">
                <button className='btn btn-outline-info' onClick={addToCart}>Add to Cart</button>
            </div>
        </div>
      </div>

    </div>
    
    </>
  )
}

export default ProductDetails


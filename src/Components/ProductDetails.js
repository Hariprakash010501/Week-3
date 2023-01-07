import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { selectedProduct } from '../redux/actions/productActions'
const ProductDetails = () => {
    const product=useSelector((state)=>state.product)
    const{id}=useParams()
    const {image,title,price,category,description}=product;
    const dispatch=useDispatch();
    const fetchProductDetails=async()=>{
        const response=await axios.get("https://fakestoreapi.com/products/"+id).catch()
        dispatch(selectedProduct(response.data))
    }
    useEffect(()=>{
        if(id&&id!=="")
        fetchProductDetails()},[id])
        console.log(product)
  return (
    <div className="productDetails">
      <img src={image} className="size" alt=""></img>
      <h3>TITLE : {title}</h3>
      <h3>DESCRIPTION : {description}</h3>
      <h3>CATEGORY : {category}</h3>
      <h3>PRICE : {price}</h3>
      <button >Add to cart</button></div>
  )
}

export default ProductDetails
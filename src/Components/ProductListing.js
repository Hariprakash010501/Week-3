import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProductComponent } from './ProductComponent'
import axios from 'axios';
import { setProducts,fetchProducts } from '../redux/actions/productActions';
import { useEffect } from 'react';
const ProductListing = () => {
    const products=useSelector((state)=>state)
    const dispatch=useDispatch();
    const fetchProducts=async()=>{
        const response=await axios.get("https://fakestoreapi.com/products").catch()
        dispatch(setProducts(response.data));
    
    }
    useEffect(()=>{
      fetchProducts();
    },[])
    console.log(products)
  return (
    <div><ProductComponent/></div>
  )
}

export default ProductListing
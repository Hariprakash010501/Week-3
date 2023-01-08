import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProductComponent } from './ProductComponent'
import axios from 'axios';
import { setProducts } from '../redux/actions/productActions';
import { useEffect } from 'react';
export const Home = () => {
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
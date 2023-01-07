import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
export const ProductComponent = () => {
    const products =useSelector((state)=>state.allProducts.products)
    const List=products.map((product)=>{ 
        const {id,title,image}=product;
        return (
        <div className="align" key={id}>
            <div>
            <img className="size" src={image} alt=""/>
            <h3>{title}</h3>
            <Link to={'/product/'+id}>More info</Link>
            </div>
            </div>
      )});
  return(
    <>{List}</>
  );
}


import React, {useEffect, useState} from 'react';
//import {Pagination} from './components/Pagination';//<Pagination productsPerPage={productsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} totalProducts={totalProducts}/>

export const ProductList = () => {

const [products, setProducts] = useState([]);
const totalProducts= products.length
const [productsPerPage, setProductsPerPage] = useState(6);
const [currentPage, setCurrentPage] = useState(1);

const productList=async( ) => {
  const data= await fetch('https://fakestoreapi.com/products');
const products= await data.json();

setProducts(products);
}
useEffect(() => {
  productList();
},[]);

  return (
    <>
    <div className='container-products'>
      {products.map(product =>(
       <div className="card-product">
        <figure className="conatiner-img">
          <img src={product.image } alt={product.title} />
        </figure>
        <div className="info-product">
          <h3>{product.title}</h3>
          <p className="price">${product.price}</p>
          <button>agregar</button>
        </div>
       </div>

      ))}
    </div>

    </>
  ) ;
  
};

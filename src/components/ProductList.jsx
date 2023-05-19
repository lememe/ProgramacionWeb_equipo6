import React, {useEffect, useState} from 'react';
<<<<<<< HEAD
import { Pagination } from './Pagination';


export const ProductList = () => {

  const [products, setProducts] = useState([]);
  const totalProducts= products.length
  const [productsPerPage, setProductsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  const lastIndex=currentPage*productsPerPage//=1*6
  const firstIndex=lastIndex-productsPerPage//6-6=0


  const productList=async( ) => {
  const data= await fetch('https://fakestoreapi.com/products');
  const products= await data.json();

  setProducts(products);
=======
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
>>>>>>> d10f7feec0ac1944338aee72189b7790452465df
}
useEffect(() => {
  productList();
},[]);

<<<<<<< HEAD
return (
  <>
    <div className='container-products'>
      {products.map(product => (
        <div className="card-product" key={product.id}>
          <figure className="container-img">
            <img src={product.image} alt={product.title} />
          </figure>
          <div className="info-product">
            <h3>{product.title}</h3>
            <p className="price">${product.price}</p>
            <button>Añadir al carrito</button>
          </div>
        </div>
      )).slice(firstIndex,lastIndex)};
    </div>
    <Pagination 
      productsPerPage={productsPerPage} 
      currentPage={currentPage} 
      setCurrentPage={setCurrentPage}
      totalProducts={totalProducts}
    />
  </>
  )
=======
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
  
>>>>>>> d10f7feec0ac1944338aee72189b7790452465df
};

import React, { useState, useEffect } from 'react'
import '../App.css';
import axios from 'axios';
import { Pagination } from './Pagination';

const Product = () => {

  const [products, setProducts] = useState([]);
  const totalProducts = products.length
  const [productsPerPage, setProductsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

  const lastIndex = currentPage * productsPerPage//=1*6
  const firstIndex = lastIndex - productsPerPage//6-6=0

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true)
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products",
    })
      .then(res => {
        console.log(res.data)
        setData(res.data)
      })
      .catch(e => console.log(e))
      .finally(() => setLoading(false))

  }, []);

  return (
    <>
      <div className='products-container'>
        {loading && (
          <div>
            {" "}
            <h1>Cargando. . . </h1>
          </div>
        )}

        {data.map((product) => (
          <div key={product.id} className='card'>
            <div> <img src={product.image} alt="#" /> </div>
            <div className='card-description'>
              <h6>{product.title}</h6>
              <h6>{`Precio: ${product.price}`}</h6>
              <h6>{`Categoria: ${product.category}`}</h6>
              <button>Añadir al carrito</button>
            </div>
          </div>
        )).slice(firstIndex, lastIndex)}
      </div>
      <Pagination
        productsPerPage={productsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalProducts={totalProducts}
      />
    </>
  );
};

export default Product;
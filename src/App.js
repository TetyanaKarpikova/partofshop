

import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Header } from './components/header';
import { ProductList } from './components/product-list';
import './App.css';
import './style.css';
import { useServices } from './services';
import {setProducts} from './redux'

export default function App() {
  const { cart, wishlist, products } = useSelector(
    ({ cart: { cart }, wishlist: { wishlist }, products: { products } }) => ({
      cart,
      wishlist,
      products
    })
  );

  const dispatch = useDispatch();

  // const fetchData = useCallback(async () => {
  //   const response = await productService.getProducts();
  //   const json = await response.json();

  //   dispatch(setProducts(json));
  // }, []);

  useEffect(() => {
    // fetchData();
    dispatch(setProducts());
  }, []);

  return (
    <div className="App">      
      <Header />
      <ProductList products={products}/>
    </div>
  );
}


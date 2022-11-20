import axios from 'axios';
// import { useEffect } from 'react';

// function ApiTest() {
//   useEffect(() => {
//     const getProducts = async () => {
//       try {
//         await axios.get(`${process.env.REACT_APP_API_URL}/products`);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     getProducts();
//   }, []);
// }

export const getProductsFromBack = async () => axios.get(`${process.env.REACT_APP_API_URL}/products`);

export const createCustomer = async (newUser) => axios.post(`${process.env.REACT_APP_API_URL}/customers`, newUser);

export const loginCustomer = async (userData) => axios.post(`${process.env.REACT_APP_API_URL}/customers/login`, userData);

export const createOrder = async (newOrder) => axios.post(`${process.env.REACT_APP_API_URL}/orders`, newOrder);

export const getCart = async () => axios.get(`${process.env.REACT_APP_API_URL}/cart`);

export const addProductInCart = async (id) => axios.put(`${process.env.REACT_APP_API_URL}/cart/${id}`);

export const deleteProductInCart = async (id) => axios.delete(`${process.env.REACT_APP_API_URL}/cart/${id}`);

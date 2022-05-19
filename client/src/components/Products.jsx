import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import React from "react";

const Container = styled.div`
	padding: 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	background-color: #eee;
	z-index: 1;
`;

const Products = ({ products,addToCart }) => {
	// console.log(products);
	// const [products, setProducts] = useState([]);
	// const [filteredProducts, setFilteredProducts] = useState([]);

	// useEffect(() => {
	// 	const getProducts = async () => {
	// 		try {
	// 			const res = await axios.get("http://localhost:5000/api/products");
	// 			console.log(res);
	// 		} catch (err) {}
	// 	};
	// 	getProducts();
	// }, [cat]);
	// console.log(products);

	return (
		<Container>
			{products.map((product) => (
				<Product key={product.ID} product={product} addToCart={addToCart} />
			))}
		</Container>
	);
};
export default Products;

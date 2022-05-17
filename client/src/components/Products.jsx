import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
	padding: 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	background-color: #eee;
	z-index: 1;
`;
// const Image = styled.img`
// 	width: 100%;
// 	height: 80vh;
// 	z-index: 0;
// 	margin-bottom: -150px;
// 	mask-image: linear-gradient(to bottom, rgb(0, 0, 0, 1), rgba(0, 0, 0, 0.25));
// `;
const Products = (cat, filters, sort) => {
	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);

	// useEffect(() => {
	// 	const getProducts = async () => {
	// 		try {
	// 			const res = await axios.get("http://localhost:5000/api/products");
	// 			console.log(res);
	// 		} catch (err) {}
	// 	};
	// 	getProducts();
	// }, [cat]);
	return (
		<Container>
			{/* <Image src="https://cdn.getyourguide.com/img/tour/5e54f4fc1c26f.jpeg/98.jpg" /> */}
			{popularProducts.map((item) => (
				<Product item={item} key={item.id} />
			))}
		</Container>
	);
};

export default Products;

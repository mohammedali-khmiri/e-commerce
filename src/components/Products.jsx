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
const Products = () => {
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

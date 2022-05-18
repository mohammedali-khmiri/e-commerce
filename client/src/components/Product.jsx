import {
	FavoriteBorderOutlined,
	SearchOutlined,
	ShoppingCartOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Info = styled.div`
	opacity: 0;
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.2);
	z-index: 3;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.5s ease;
	cursor: pointer;
`;

const Container = styled.div`
	flex: 1;
	margin: 5px;
	min-width: 280px;
	min-height: 350px;
	display: flex;
	flex-direction: column;
	align-items: center;

	background-color: white;
	position: relative;
	&:hover ${Info} {
		opacity: 1;
	}
`;

// const Circle = styled.div`
//   width: 200px;
//   height: 200px;
//   border-radius: 50%;
//   background-color: white;
//   position: absolute;
// `;
const InfoContainer = styled.div`
	padding: 0px 10px;
	${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
	font-weight: 200;
`;

const Desc = styled.p`
	margin: 10px 0px;
`;

const Price = styled.span`
	font-weight: 100;
	font-size: 20px;
`;

const Image = styled.img`
	margin-left: 10px;
	margin-top: 20px;
	z-index: 2;
	max-width: 50%;
`;

const Icon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 10px;
	transition: all 0.5s ease;
	&:hover {
		background-color: #e9f5f5;
		transform: scale(1.1);
	}
`;

const Product = ({ product }) => {
	console.log(product);
	return (
		<Container>
			{/* <Circle /> */}
			<InfoContainer>
				<Image src={product.url} alt="product-img" />
				<Title>{product.title}</Title>
				<Desc>{product.description}</Desc>
				<Price> {product.price} TND</Price>
			</InfoContainer>

			<Info>
				<Icon>
					<ShoppingCartOutlined />
				</Icon>
				<Icon>
					<Link to={`/product/${product.ID}`}>
					<SearchOutlined />
					</Link>
					
				</Icon>
				<Icon>
					<FavoriteBorderOutlined />
				</Icon>
			</Info>
		</Container>
	);
};

export default Product;

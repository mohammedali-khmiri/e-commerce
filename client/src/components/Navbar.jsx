import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../config/Config";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
	height: 60px;
	${mobile({ height: "50px" })}
	background-color: #f7f9fa
`;

const Wrapper = styled.div`
	padding: 5px 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	${mobile({ padding: "10px 10px" })}
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	${mobile({ flex: 0.5, marginLeft: "6px" })}
`;

const Language = styled.span`
	font-size: 14px;
	cursor: pointer;
	${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
	border: 0.5px solid lightgray;
	display: flex;
	align-items: center;
	margin-left: 25px;
	padding: 5px;
`;

const Input = styled.input`
	border: none;
	${mobile({ width: "50px" })}
`;

const Center = styled.div`
	flex: 1;
	text-align: center;
	${mobile({ width: "50px", flex: 0.8 })}
`;

const Logo = styled.h1`
	font-weight: bold;
	${mobile({ fontSize: "24px", margin: "0px 10px" })}
`;
const Right = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	${mobile({ flex: 2, justifyContent: "center", marginRight: "15px" })}
`;

const MenuItem = styled.div`
	font-size: 14px;
	cursor: pointer;
	margin: 0px 20px;
	${mobile({ fontSize: "12px", margin: "0px 5px" })}
`;

const Navbar = ({ user }) => {
	const navigate = useNavigate();

	const handleLogout = () => {
		auth.signOut().then(() => {
			navigate("/login");
		});
	};
	// const quantity = useSelector((state) => state.cart.quantity);

	// console.log(quantity);
	return (
		<Container>
			<Wrapper>
				<Left>
					<Language>EN</Language>
					<SearchContainer>
						<Input placeholder="Search" />
						<Search style={{ color: "gray", fontSize: 16 }} />
					</SearchContainer>
				</Left>
				<Center>
					<Logo>EMS.</Logo>
				</Center>
				<Right>
					{!user && (
						<>
							<Link to="/register">
								<MenuItem >REGISTER</MenuItem>
							</Link>
							<Link to="/login">
								<MenuItem>SIGN IN</MenuItem>
							</Link>
						</>
					)}

					{user && (
						<>
							<MenuItem >Hello , {user}</MenuItem>
							<MenuItem>
								<Badge badgeContent={4} color="primary">
									<ShoppingCartOutlined />
								</Badge>
							</MenuItem>
							<button class="btn btn-outline-dark" onClick={handleLogout}>
								LogOut
							</button>
						</>
					)}
				</Right>
			</Wrapper>
		</Container>
	);
};

export default Navbar;

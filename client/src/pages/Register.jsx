import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(
			rgba(255, 255, 255, 0.5),
			rgba(255, 255, 255, 0.5)
		),
		url("https://img.freepik.com/photos-gratuite/idee-entreprise-copy-space-background-concept_1421-193.jpg?w=826&t=st=1652525413~exp=1652526013~hmac=835db546d5303d68cdb4d5e6807e78b9ac2fa0a3aa45eda6c2475625ffdeccd3")
			center;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: right;
	
`;

const Wrapper = styled.div`
	width: 25%;
	padding: 20px;
	background-color: white;
    margin-right: 300px;
	${mobile({ width: "80%",margin:"auto" })}
`;

const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
`;

const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 20px 10px 0px 0px;
	padding: 10px;
`;

const Agreement = styled.span`
	font-size: 12px;
	margin: 20px 0px;
`;

const Button = styled.button`
	width: 40%;
	border: none;
	padding: 15px 20px;
	background-color: teal;
	color: white;
	cursor: pointer;
`;

const Register = () => {
	return (
		<Container>
			<Wrapper>
				<Title>CREATE AN ACCOUNT</Title>
				<Form>
					<Input placeholder="name" />
					<Input placeholder="last name" />
					<Input placeholder="username" />
					<Input placeholder="email" />
					<Input placeholder="password" />
					<Input placeholder="confirm password" />
					<Agreement>
						By creating an account, I consent to the processing of my personal
						data in accordance with the <b>PRIVACY POLICY</b>
					</Agreement>
					<Button>CREATE</Button>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default Register;

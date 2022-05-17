import styled from "styled-components";
import { mobile } from "../responsive";
import React, { useState } from "react";
import { auth, fs } from "../config/Config";
import { useNavigate } from 'react-router-dom';

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
	${mobile({ width: "80%", margin: "auto" })}
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
	// width: 40%;
	// border: none;
	// padding: 15px 20px;
	// background-color: teal;
	// color: white;
	// cursor: pointer;
`;

const Register = () => {

	const navigate = useNavigate();

	const [fullName, setFullname] = useState("");
	

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [errorMsg, setErrorMsg] = useState("");
	const [successMsg, setSuccessMsg] = useState("");

	const handleSignup = (e) => {
		e.preventDefault();
		// console.log(fullName, userName, email, password);
		auth
			.createUserWithEmailAndPassword(email, password)
			.then((credentials) => {
				console.log(credentials);
				fs.collection("users")
					.doc(credentials.user.uid)
					.set({
						FullName: fullName,
						
						Email: email,
						Password: password,
					})
					.then(() => {
						setSuccessMsg(
							"Signup Successfull. You will now automatically get redirected to Login"
						);
						setFullname("");
						
						setEmail("");
						setPassword("");
						setErrorMsg("");
						setTimeout(() => {
							setSuccessMsg("");
							navigate("/login");
						}, 3000);
					})
					.catch((error) => setErrorMsg(error.message));
			})
			.catch((error) => {
				setErrorMsg(error.message);
			});
	};

	return (
		<Container>
			<Wrapper>
				<Title>CREATE AN ACCOUNT</Title>
				<hr></hr>
            {successMsg&&<>
                <div className='alert alert-success'>{successMsg}</div>
                <br></br>
            </>}
				<Form onSubmit={handleSignup}>
					<Input
						placeholder="Full name"
						onChange={(e) => setFullname(e.target.value)}
						value={fullName}
					/>
					
					<Input
						placeholder="email"
						onChange={(e) => setEmail(e.target.value)}
						value={email}
					/>
					<Input
						placeholder="password"
						onChange={(e) => setPassword(e.target.value)}
						value={password}
					/>

					<Agreement>
						By creating an account, I consent to the processing of my personal
						data in accordance with the <b>PRIVACY POLICY</b>
					</Agreement>
					<Button className='btn btn-success btn-md'>CREATE</Button>
				</Form>
				{errorMsg&&<>
                <br></br>
                <div className='alert alert-danger'>{errorMsg}</div>                
            </>}
			</Wrapper>
		</Container>
	);
};

export default Register;

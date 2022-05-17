import styled from "styled-components";
import { mobile } from "../responsive";
import React, { useState } from "react";
import { auth } from "../config/Config";
import { useNavigate } from 'react-router-dom';


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background:
    url("https://image.shutterstock.com/image-photo/blurred-office-interior-space-businessman-260nw-1011514708.jpg")
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
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  // width: 40%;
  // border: none;
  // padding: 15px 20px;
  // background-color: teal;
  // color: white;
  // cursor: pointer;
  // margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;z
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {

  const navigate = useNavigate();


	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [errorMsg, setErrorMsg] = useState("");
	const [successMsg, setSuccessMsg] = useState("")
	const handleSignup = (e) => {
		e.preventDefault();
		// console.log( userName, password);
    auth
			.signInWithEmailAndPassword(email, password).then(() => {
        setSuccessMsg(
          "SignIn Successfull. You will now automatically get redirected to Home"
        );
        setEmail("");
        setPassword("");
        setErrorMsg("");
        setTimeout(() => {
          setSuccessMsg("");
          navigate("/");
        }, 3000);
      })
      .catch((error) => setErrorMsg(error.message));
	};

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <hr></hr>
            {successMsg&&<>
                <div className='alert alert-success'>{successMsg}</div>
                <br></br>
            </>}
        <Form onSubmit={handleSignup}>
          <Input placeholder="email" onChange={(e) => setEmail(e.target.value)}
						value={email}/>
          <Input placeholder="password" onChange={(e) => setPassword(e.target.value)}
						value={password}/>
          <Button className='btn btn-success btn-md'>LOGIN</Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
        {errorMsg&&<>
                <br></br>
                <div className='alert alert-danger'>{errorMsg}</div>                
            </>}
      </Wrapper>
    </Container>
  );
};

export default Login;
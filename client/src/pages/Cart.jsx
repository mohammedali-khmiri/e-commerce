import { Add, Remove } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { auth, fs } from "../config/Config";
import { mobile } from "../responsive"; 

const Container = styled.div`
`;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
  ${mobile({ display: "none" })}
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: " 20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = (cartProduct) => {
  //getting current user function
	function GetCurrentUser() {
		const [user, setUser] = useState(null);

		useEffect(() => {
			auth.onAuthStateChanged((user) => {
				if (user) {
					fs.collection("users")
						.doc(user.uid)
						.get()
						.then((snapshot) => {
							setUser(snapshot.data().FullName);
						});
				} else {
					setUser(null);
				}
			});
		}, []);
		return user;
	}
	const user = GetCurrentUser();
	// console.log(user);

  // state of cart products
  const [cartProducts, setCartProducts]=useState([]);

   // getting cart products from firestore collection and updating the state
   useEffect(()=>{
    auth.onAuthStateChanged(user=>{
        if(user){
            fs.collection('Cart' + user.uid).onSnapshot(snapshot=>{
                const newCartProduct = snapshot.docs.map((doc)=>({
                    ID: doc.id,
                    ...doc.data(),
                }));
                setCartProducts(newCartProduct);  
                                  
            })
            
        }
        else{
            console.log('user is not signed in to retrieve cart');
        }
    })
},[])

console.log(cartProducts);

  return (
    <Container>
      <Navbar user={user}/>
      {cartProducts.length > 0 && (
        <Wrapper>
        <Title>YOUR CART</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
           { cartProducts.map((cartProduct)=>(
            <Product key={cartProduct.ID} cartProduct={cartProduct} >
              <ProductDetail>
                <Image src={cartProduct.url} />
                <Details>
                  <ProductName>
                    <b>Product:</b> {cartProduct.title}
                  </ProductName>
                  <ProductId>
                    <b>Description:</b> {cartProduct.description}
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Mark:</b> XX1
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>{cartProduct.quantity}</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>{cartProduct.price} TND</ProductPrice>
              </PriceDetail>
            
            </Product>
            
            ))}
              <Hr/>
            
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>{cartProduct.TotalProductPrice}</SummaryItemPrice>
            </SummaryItem>
            <Button >CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      )}
       {cartProducts.length < 1 && (
         
         <div class="container-fluid">
         <h1 class="display-4">No products to show</h1>
       </div>
            ) }
      <Footer />
    </Container>
  );
};

export default Cart;
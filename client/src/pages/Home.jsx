import React, { useState, useEffect } from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import { auth, fs } from "../config/Config";

const Home = () => {
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

	// state of products
	const [products, setProducts] = useState([]);

	// getting products function
	const getProducts = async () => {
		const products = await fs.collection("Products").get();
		const productsArray = [];
		for (var snap of products.docs) {
			var data = snap.data();
			data.ID = snap.id;
			productsArray.push({
				...data,
			});
			if (productsArray.length === products.docs.length) {
				setProducts(productsArray);
			}
		}
	};

	useEffect(() => {
		getProducts();
	}, []);

	return (
		<div>
			<Navbar user={user} />
			
			 {products.length > 0 && (
				<div> 
					<Announcement />
					<Products  products={products}/>
					<Categories />
				<Newsletter />
			<Footer />
			</div>
			)}
			{ products.length < 0 && (
					<div>
					<h1>Please wait ....</h1>
				</div>
				) }
		
		</div>
	);
};

export default Home;

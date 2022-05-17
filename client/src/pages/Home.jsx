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
	return (
		<div>
			<Navbar user={user} />
			<Announcement />
			<Products />
			<Categories />
			<Newsletter />
			<Footer />
		</div>
	);
};

export default Home;

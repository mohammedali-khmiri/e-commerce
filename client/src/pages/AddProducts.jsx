import React, { useState } from "react";
import { storage, fs } from "../config/Config";

export const AddProducts = () => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState("");
	const [image, setImage] = useState(null);

	//msg error for type of image
	const [imageError, setImageError] = useState("");

	//msg error for invalid or failed upload
	const [successMsg, setSuccessMsg] = useState("");
	const [uploadError, setUploadError] = useState("");

	const types = ["image/jpg", "image/jpeg", "image/png", "image/PNG"];
	const handleProductImg = (e) => {
		let selectedFile = e.target.files[0];
		//condition if selected file or not
		if (selectedFile) {
			//condiction if the type file selected matches these types in array
			if (selectedFile && types.includes(selectedFile.type)) {
				setImage(selectedFile);
				//msg error is empty because we have an file selected
				setImageError("");
			} else {
				setImage(null);
				setImageError("please select a valid image file type (png or jpg)");
			}
		} else {
			console.log("please select your file");
		}
	};

	const handleAddProducts = (e) => {
		e.preventDefault();

		// console.log(title, description, price);
		// console.log(image);

		//stored image in firestore storage
		const uploadTask = storage.ref(`product-images/${image.name}`).put(image);
		uploadTask.on(
			"state_changed",
			(snapshot) => {
				const progress =
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				console.log(progress);
			},
			(error) => setUploadError(error.message),

			//get the URL od that saved image from firebase storage
			() => {
				storage
					.ref("product-images")
					.child(image.name)
					.getDownloadURL()
					.then((url) => {
						fs.collection("Products")
							.add({
								title,
								description,
								price: Number(price),
								url,
							})
							.then(() => {
								setSuccessMsg("Product added successfully");
								setTitle("");
								setDescription("");
								setPrice("");
								document.getElementById("file").value = "";
								setImageError("");
								setUploadError("");
								setTimeout(() => {
									setSuccessMsg("");
								}, 3000);
							})
							.catch((error) => setUploadError(error.message));
					});
			}
		);
	};

	return (
		<div className="container">
			<br></br>
			<br></br>
			<h1>Add Product</h1>
			<hr></hr>
			{successMsg && (
				<>
					<div className="alert alert-success">{successMsg}</div>
					<br></br>
				</>
			)}
			<form
				autoComplete="off"
				className="form-group"
				onSubmit={handleAddProducts}
			>
				<label>Product Title</label>
				<input
					type="text"
					className="form-control"
					required
					onChange={(e) => setTitle(e.target.value)}
					value={title}
				></input>
				<br></br>
				<label>Product Description</label>
				<input
					type="text"
					className="form-control"
					required
					onChange={(e) => setDescription(e.target.value)}
					value={description}
				></input>
				<br></br>
				<label>Product Price</label>
				<input
					type="number"
					className="form-control"
					required
					onChange={(e) => setPrice(e.target.value)}
					value={price}
				></input>
				<br></br>
				<label>Upload Product Image</label>
				<br></br>
				<input
					type="file"
					id="file"
					className="form-control"
					required
					onChange={handleProductImg}
				></input>

				{imageError && (
					<>
						<br></br>
						<div className="alert alert-danger">{imageError}</div>
					</>
				)}
				<br></br>
				<div style={{ display: "flex", justifyContent: "flex-end" }}>
					<button type="submit" className="btn btn-success btn-md">
						SUBMIT
					</button>
				</div>
			</form>

			{uploadError && (
				<>
					<br></br>
					<div className="alert alert-danger">{uploadError}</div>
				</>
			)}
		</div>
	);
};

export default AddProducts;

const router = require("express").Router();
const User = require("../models/User");
const db = require("../db");

//REGISTER
router.post("/register", async (req, res) => {
	try {
		const data = req.body;
		await db.collection("users").doc().set(data);
		res.send("successfuly");
	} catch (error) {
		res.status(400).send(error.message);
	}
});

module.exports = router;

const express = require("express");
const app = express();

const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`server is running on PORT ${PORT}`);
});

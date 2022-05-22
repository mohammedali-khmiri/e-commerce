const express = require("express");
const app = express();
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");

// const admin = require("firebase-admin");
// const serviceAccount = require("./serviceAccountKey.json");

// admin.initializeApp({
// 	credential: admin.credential.cert(serviceAccount),
// });

app.use(express.json());

app.use("/apis/user", userRoute);

app.use("/apis/auth", authRoute);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`server is running on PORT ${PORT}`);
});

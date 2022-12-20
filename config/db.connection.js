const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set("strictQuery", true);
const connectionStr = process.env.MONGODB_URI;

mongoose.connect(connectionStr);

mongoose.connection
	.on("open", () => console.log("You're connected to mongoose"))
	.on("close", () => console.log("You're disconnected from mongoose"))
	.on("error", () => console.log(error));

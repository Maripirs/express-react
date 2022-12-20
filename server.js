require("./config/db.connection");
const express = require("express");
const app = express();
require("dotenv").config();
const { PORT } = process.env;
const cors = require("cors");
const morgan = require("morgan");

//------MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));
//------MIDLEWARE

const peopleController = require("./controllers/people.controllers");
app.use("/people", peopleController);

app.use((err, req, res, next) => res.status(500).send(err));

app.all("/*", (req, res) => {
	return res.status(404).json({ error: "No resource found" });
});

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));

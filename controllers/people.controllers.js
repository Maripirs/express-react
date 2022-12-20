const express = require("express");
const router = express.Router();
const { People } = require("../models");

router.get("/", async (req, res, next) => {
	console.log("attempt get");
	try {
		const people = await People.find({});
		return res.status(200).json(people);
	} catch (error) {
		console.log(error);
		next(error);
	}
});

router.post("/", async (req, res, next) => {
	try {
		res.json(await People.create(req.body));
	} catch (error) {
		console.log(error);
		res.status(400).json(error);
	}
});

router.get("/:id", async (req, res) => {
	res.status(200).json({ message: "people show route: " + req.params.id });
});

router.delete("/:id", async (req, res) => {
	res.status(200).json({ message: "people delete route: " + req.params.id });
});

router.put("/:id", async (req, res) => {
	console.log(req.body);
	res.status(200).json({ message: "people update route: " + req.params.id });
});

module.exports = router;

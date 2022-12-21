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
	try {
		res.json(await People.findById(req.params.id));
	} catch (error) {
		res.status(400).json(error);
	}
});

router.delete("/:id", async (req, res) => {
	try {
		res.json(await People.findByIdAndDelete(req.params.id));
	} catch (error) {
		res.status(400).json(error);
	}
});

router.put("/:id", async (req, res) => {
	try {
		res.json(await People.findByIdAndUpdate(req.params.id), req.body, {
			new: true,
		});
	} catch (error) {
		res.status(400).json(error);
	}
});

module.exports = router;

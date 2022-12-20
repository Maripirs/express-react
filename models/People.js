const mongoose = require("mongoose");

const PeopleSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "name is required"],
			unique: true,
		},
		image: {
			type: String,
			maxLength: [250, "Exceeded max length of 20 characters"],
			default:
				"https://img.freepik.com/premium-vector/male-avatar-icon-unknown-anonymous-person-default-avatar-profile-icon-social-media-user-business-man-man-profile-silhouette-isolated-white-background-vector-illustration_735449-120.jpg?w=360",
		},
		title: {
			type: String,
			maxLength: [30, "Exceeded max length of 100 characters"],
			required: [true, "title is required"],
		},
	},
	{ timestamps: true }
);

const People = mongoose.model("People", PeopleSchema);

module.exports = People;

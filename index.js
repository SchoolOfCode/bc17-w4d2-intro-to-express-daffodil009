// import the express framework for creating web application

import express from "express";

// initialize the express application instance
const app = express();

// set the port number for the server to listen to
const port = 3000;

// define a route for GET to root path
app.get("/", (req, res) => {
	res.send({
		message: "Hello, world! A JSON response...yay",
	});
});

app.get("/about", (req, res) => {
	res.send("About us. Its all about us!");
});

// starts the server
app.listen(port, () => {
	console.log(`Listening to port ${port}`);
});

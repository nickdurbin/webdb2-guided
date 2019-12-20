require('dotenv').config()
const express = require("express")
const helmet = require("helmet")
const fruitsRouter = require("./fruits/fruits-router")

const server = express()
const host = process.env.HOST || "localhost"
const port = process.env.PORT || 5000

server.use(helmet())
server.use(express.json())

server.use("/api/fruits", fruitsRouter)

server.get("/", (req, res) => {
	res.send("<h1>I am your server. Yes, I am running!</h2>")
})

server.use((req, res) => {
	res.status(404).json({ message: "You have drifted into the ether. Turn back now!"})
})


server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

server.listen(port, host, () => {
	console.log(`\nRunning on http://${host}:${port}\n`)
})
const express = require("express");
const app = express();
const PORT = process.env.PORT || 300;

app.get("/", (req,res)=> res.send("Hello"));

app.listen(PORT, () =>{
	//eslint-disable-next-line no-console
	console.log(`This port is ${PORT}`);
});

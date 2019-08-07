let express = require("express");
let cors = require("cors");
let app = express();

app.use(cors());
app.get("/",function (req, res) {
	res.send("Hello, Node.js!");
});

app.listen(591);
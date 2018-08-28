const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//set server port
const port = "3021";
//view engine
app.set('view engine', 'ejs');
//body parser
app.use(bodyParser.urlencoded({ extended: false }));


//set routes
app.get("/", (req, res) => {
    res.render("home");
});

//initialise server
app.listen(port, () =>{
    console.log(`App running on port ${port}`);
})
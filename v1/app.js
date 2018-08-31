"use strict";
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//set server port
const port = "3021";
//view engine
app.set('view engine', 'ejs');
//body parser
app.use(bodyParser.urlencoded({ extended: false }));

// //array to push user input to
const posts = [
    {title: "The Universe", image: "https://pixabay.com/get/eb32b50d29f5023ed1584d05fb1d4e97e07ee3d21cac104496f5c679a3ebb7bc_340.jpg"},
    {title: "The Milky Way", image: "https://pixabay.com/get/e835b30c2bf0013ed1584d05fb1d4e97e07ee3d21cac104496f5c679a3ebb7bc_340.jpg"},
    {title: "Adromeda Galaxy", image: "https://pixabay.com/get/ee30b40b2cf61c22d2524518b7444795ea76e5d004b0144290f7c17da1efb1_340.jpg"}
];

//set routes
app.get("/", (req, res) => {
    res.render("home");
});
//list all posts
app.get("/timeline", (req, res) => {
    res.render("timeline", {posts : posts});
});

app.post("/timeline", (req, res) => {
    //get user input
    let title = req.body.title;
    let imageUrl = req.body.image;
    // console.log(`${title} : ${imageUrl}`);
    // add to posts array
    posts.push({title : title, image : imageUrl});
    //redirect
    res.redirect("/timeline");
});

app.get("/timeline/new", (req, res) => {
    //route to add new post
    res.render("newPost");
});


//initialise server
app.listen(port, () =>{
    console.log(`App running on port ${port}`);
})
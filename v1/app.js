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
//list all posts
app.get("/timeline", (req, res) => {
    //array with unpersisted values to display on timeline
    const posts = [
        {title: "Chilling", image: "https://photosforclass.com/download/pixabay-2425121?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2Feb31b30a29f6003ed1584d05fb1d4e97e07ee3d21cac104496f5c47ea3eab5bc_960.jpg&user=5688709"},
        {title: "Telescope", image: "https://photosforclass.com/download/pixabay-3380548?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2Fea36b90f2df0093ed1584d05fb1d4e97e07ee3d21cac104496f5c47ea3eab5bc_960.jpg&user=pixel2013"},
        {title: "Deep field", image: "https://pixabay.com/get/ef31b60a2afc1c22d2524518b7444795ea76e5d004b0144290f5c67da0edb1_340.jpg"}
    ];
    res.render("timeline", {posts : posts});
});

app.post("/timeline", (req, res) => {
    //get user input
    // add to posts array
    //redirect
});

app.get("/timeline/new", (req, res) => {
    //route to add new post
    res.render("newPost");
});


//initialise server
app.listen(port, () =>{
    console.log(`App running on port ${port}`);
})
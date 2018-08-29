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
        {title: "Deep field", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhREgpHLcp7-PKXxgX4AZcJ1jl9EJdpn4WY_uLsrLL7dTLeFXeDw"},
        {title: "Telescope", image: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwiY6Yiht5LdAhVMJhoKHRflAbQQjRx6BAgBEAU&url=https%3A%2F%2Fwww.madabouthorror.co.uk%2Fproduct%2Fgoosebumps-slappy-the-dummy-mask%2F&psig=AOvVaw3P2nauXDKr_7-fnbffcnQi&ust=1535637090658853"},
        {title: "Deep field", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhREgpHLcp7-PKXxgX4AZcJ1jl9EJdpn4WY_uLsrLL7dTLeFXeDw"}
    ];
    res.render("timeline", {posts : posts});
});


//initialise server
app.listen(port, () =>{
    console.log(`App running on port ${port}`);
})
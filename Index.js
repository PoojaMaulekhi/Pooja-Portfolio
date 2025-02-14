const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
const ejs = require("ejs");
const User = require("./schema.js");

// Set up the view engine to use EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Redirect root URL to the portfolio page
app.get("/", (req, res) => {
    res.redirect("/portfolio");
});

// Render the portfolio page
app.get("/portfolio", (req, res) => {
  res.render("portfolio.ejs");
});

// Render the liked page
app.get('/portfolio/liked', (req, res) => {
  res.render('liked.ejs');
});

// Render the education page
app.get("/portfolio/education", (req, res) => {
  res.render("education.ejs");
});

// Render the skills page
app.get("/portfolio/skills", (req, res) => {
  res.render("skills.ejs");
});

// Render the about page
app.get("/portfolio/about", (req, res) => {
  res.render("about.ejs");
});

// Render the contact page
app.get("/portfolio/contact", (req, res) => {
  res.render("contact.ejs");
});

// Render the project page
app.get("/portfolio/project", (req, res) => {
  res.render("project.ejs");
});

// Render the register page
app.get("/portfolio/register", (req, res) => {
  res.render("register.ejs");
});

// Handle form submission for user registration
app.post("/register", (req, res) => {
  const newUser = new User({
    username: req.body.username,
    password: req.body.password,
  });
  newUser.save();
  console.log(req.body);
  res.render("portfolio.ejs");
})

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/portfolio')
  .then(() => {
    console.log('MongoDB Connected');
    main();
  })
  .catch(err => console.log(err));

// Main function to log a message
async function main() {
  try {
    console.log("working");
  } catch (err) {
    console.error(err);
  }
}

// Start the server on port 3000
app.listen(3000, () => {
  console.log("Server running on port 3000");
});

const express = require('express');
const app = express();
const port = 2500;
const mongoose = require('mongoose');
require('dotenv').config();

const jokes = [{
    "joke1": "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "joke2": "Why don't scientists trust atoms? Because they make up everything!",
    "joke3": "Why did the bicycle fall over? Because it was two-tired!",
    "joke4": "Why did the tomato turn red? Because it saw the salad dressing!",
},
{
    "joke5": "Why did the math book look sad? Because it had too many problems.",
    "joke6": "Why did the computer go to the doctor? Because it had a virus!",
    "joke7": "Why did the chicken cross the playground? To get to the other slide!",
    "joke8": "Why did the cookie go to the doctor? Because it was feeling crumbly!",
}

]

app.get('/jokes', (req, res) => {
    res.json(jokes);
});


app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/home', (req, res) => {
  res.send('This is the home page.');
});

app.get('/about', (req, res) => {
  res.send('This is the about page.');
});

app.get('/contact', (req, res) => {
  res.send('This is the contact page.');
});

app.get('/services', (req, res) => {
  res.send('This is the services page.');
});

app.get('/products', (req, res) => {
  res.send('This is the products page.');
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("Database connected successfully");
})
.catch((error) => {
    console.error("Database Not connected");
    console.error(error);
});


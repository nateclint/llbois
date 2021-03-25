const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();
const fs=require('fs');
const PORT = process.env.PORT || 3000;



app.use(express.static("src"));


app.get('/',(req,res)=>{
	fs.readFile('src/index.html',(err,data)=>{
		res.statusCode=200;
		res.setHeader('content-type','text/html');
		res.send(data);
	})
})

app.get('/home',(req,res)=>{
	fs.readFile('src/index.html',(err,data)=>{
		res.statusCode=200;
		res.setHeader('content-type','text/html');
		res.send(data);
	})
})

app.get('/mens',(req,res)=>{
	fs.readFile('src/pages/mens.html',(err,data)=>{
		res.statusCode=200;
		res.setHeader('content-type','text/html');
		res.send(data);
	})
})

app.get('/womens',(req,res)=>{
	fs.readFile('src/pages/womens.html',(err,data)=>{
		res.statusCode=200;
		res.setHeader('content-type','text/html');
		res.send(data);
	})
})

app.get('/account/login',(req,res)=>{
	fs.readFile('src/pages/login.html',(err,data)=>{
		res.statusCode=200;
		res.setHeader('content-type','text/html');
		res.send(data);
	})
})

app.get('/account/register',(req,res)=>{
	fs.readFile('src/pages/register.html',(err,data)=>{
		res.statusCode=200;
		res.setHeader('content-type','text/html');
		res.send(data);
	})
})

app.get('/account/cart',(req,res)=>{
	fs.readFile('src/pages/cart.html',(err,data)=>{
		res.statusCode=200;
		res.setHeader('content-type','text/html');
		res.send(data);
	})
})

app.get('/account/:user_id/profile',(req,res)=>{
	fs.readFile('src/pages/account/profile.html',(err,data)=>{
		res.statusCode=200;
		res.setHeader('content-type','text/html');
		res.send(data);
	})
})

app.get('/account/:user_id/profile-edit',(req,res)=>{
	fs.readFile('src/pages/account/profile-edit.html',(err,data)=>{
		res.statusCode=200;
		res.setHeader('content-type','text/html');
		res.send(data);
	})
})

app.get('/account/:user_id/settings',(req,res)=>{
	fs.readFile('src/pages/account/settings.html',(err,data)=>{
		res.statusCode=200;
		res.setHeader('content-type','text/html');
		res.send(data);
	})
})

app.get('/account/:user_id/billing',(req,res)=>{
	fs.readFile('src/pages/account/billing.html',(err,data)=>{
		res.statusCode=200;
		res.setHeader('content-type','text/html');
		res.send(data);
	})
})

app.get('/account/:user_id/history',(req,res)=>{
	fs.readFile('src/pages/account/history.html',(err,data)=>{
		res.statusCode=200;
		res.setHeader('content-type','text/html');
		res.send(data);
	})
})

app.get('/account/:user_id/billing-add',(req,res)=>{
	fs.readFile('src/pages/account/billing-add.html',(err,data)=>{
		res.statusCode=200;
		res.setHeader('content-type','text/html');
		res.send(data);
	})
})

app.get('/account/:user_id/billing-edit',(req,res)=>{
	fs.readFile('src/pages/account/billing-edit.html',(err,data)=>{
		res.statusCode=200;
		res.setHeader('content-type','text/html');
		res.send(data);
	})
})
/*
    ROUTER CONTROLER
*/
/*
router.get('/account/login', (req,res) => {
    res.sendFile(path.join(__dirname + "/src/pages/login.html"))
})

router.get('/account/register', (req,res) => {
    res.sendFile(path.join(__dirname + "/src/pages/register.html"))
})

router.get('/account/cart', (req,res) => {
    res.sendFile(path.join(__dirname + "/src/pages/cart.html"))
})

router.get('/account/:user_id/history', (req,res) => {
    res.sendFile(path.join(__dirname + "/src/pages/account/history.html"))
})

router.get('/account/:user_id/profile', (req,res) => {
    res.sendFile(path.join(__dirname + "/src/pages/account/profile.html"))
})

router.get('/account/:user_id/profile/edit', (req,res) => {
    res.sendFile(path.join(__dirname + "/src/pages/account/profile-edit.html"))
})

router.get('/account/:user_id/settings', (req,res) => {
    res.sendFile(path.join(__dirname + "/src/pages/account/settings.html"))
})

router.get('/account/:user_id/billing', (req,res) => {
    res.sendFile(path.join(__dirname + "/src/pages/account/billing.html"))
})

router.get('/account/:user_id/billing-add', (req,res) => {
    res.sendFile(path.join(__dirname + "/src/pages/account/billing-add.html"))
})

router.get('/account/:user_id/billing/edit', (req,res) => {
    res.sendFile(path.join(__dirname + "/src/pages/account/billing-edit.html"))
})

router.get('/account/wishlist', (req,res) => {
    console.log("Hello")
})

router.get("/women", (req, res) => {
    res.sendFile(path.join(__dirname + "/src/pages/womens.html"));
});

router.get("/men", (req, res) => {
    res.sendFile(path.join(__dirname + "/src/pages/mens.html"));
});

app.use("/", router);
*/
	
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));



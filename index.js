const express=require("express")
var hbs = require('hbs');
const app=express();
require('dotenv').config()
app.set("view engine" ,"hbs");
hbs.registerPartials(__dirname + '/views/partials', function (err) {});


app.use(express.static("public"))
app.get("/",(req,res)=>{
    res.render("index",{
        title:"home",
        autor:"ismaila kaba",
        content:"lorem"
    })
  
})

app.get("/dashboard",(req,res)=>{
    res.render("dashboard",{
        title:"dashboard",
        autor:"ismaila kaba",

    })
  
})

app.get("/contact",(req,res)=>{
     res.render("contact",{
        title:"contact",
    })
  
})
app.listen(process.env.PORT);
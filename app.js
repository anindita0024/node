const express = require("express")
const app = express()
const {engine} = require("express-handlebars")


app.use(express.static('public'));
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get("/" , (req,res) =>{

     res.render("home");

})

app.get("/portfolio",(req,res) =>{
    let personName = req.query.name
    res.json({name:personName})
})

app.listen(8081, () =>{
    console.log("Server is running");
})
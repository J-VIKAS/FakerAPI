const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));

const Faker_API = "https://fakerapi.it/api/v1/";
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

app.get("/",function(req,res){
    res.redirect("index.html");    
});

app.post("/",function(req,res){
    const data_member = Object.keys(req.body);
    const data = Object.values(req.body);
    var Fetch_API = Faker_API + req.body.category + '?';
    var check = true;
    for ( var i = 1; i<data_member.length; i++ ){
        if ( data[i] == '' ) continue;
        if ( data_member[i] == 'locale' && data[i] == 'en_US' ) continue;
        if ( data_member[i] == 'width' && data[i] == '640' ) continue;
        if ( data_member[i] == 'height' && data[i] == '480' ) continue;
        if ( data_member[i] == 'price_min' && data[i] == '0.01' ) continue;
        if ( data_member[i] == 'taxes' && data[i] == '22' ) continue;
        if ( data_member[i] == 'categories' && data[i] == 'integer' ) continue;
        if ( data_member[i] == 'characters' && data[i] == '200' ) continue;
        if ( data_member[i] == 'birthday_start' && data[i] == (yyyy-90) + '-' + mm + '-' + dd ) continue;
        if ( data_member[i] == 'birthday_end' && data[i] == yyyy + '-' + mm + '-' + dd ) continue;
        if ( check ){
            Fetch_API += ( '_' + data_member[i] + '=' + data[i] );
            check = false;
        } else Fetch_API += ( '&_' + data_member[i] + '=' + data[i] );
    } console.log("Generated API URL : " + Fetch_API);
    res.redirect(Fetch_API);
});

app.listen(3000,(err)=>{
    if ( !err ) console.log("Server started listening at port 3000");
    else console.log("ERROR : " + err);
})
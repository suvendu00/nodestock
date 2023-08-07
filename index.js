const express = require('express');
const app = express();
const path = require('path');
const exphbs = require('express-handlebars');



const PORT = process.env.PORT || 5000;

//Set handlebar middleware
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

//handlebar used to make dynamic web pages. to pass data from backend to frontend
//and this can be used as angular common hom page and replace whatever is rrequired on that page

const otherStuff = "This is other stuff.."
//Set handlebar routes 
app.get('/', (req, res) => {
    //we can pass variables also in handlebars
    res.render('home',{
        stuff: "This is stuff",
        otherStuff: otherStuff
    });
});

app.get('/hello', (req, res)=>{
    res.send("Hello world");
})

//Set stagtic folder
app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT , ()=>{ console.log('Server listenong on port '+PORT)});
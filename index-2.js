const express = require('express');
const app = express();
const reqFilter = require('./middleware');
const route = express.Router();
// app.use(reqFilter);

route.use(reqFilter);

app.get('/',(req,res)=> {
    res.send(`
        <h1>Welcome to home page</h1> 
        `)
});

app.get('/about',(req,res)=> {
    res.send(`
        <h1>Welcome to about page</h1> 
        `)
});
route.get('/user',(req,res)=> {
    res.send(`
        <h1>Welcome to user page</h1> 
        `)
});
route.get('/contact',(req,res)=> {
    res.send(`
        <h1>Welcome to contact page</h1> 
        `)
});
app.use('/',route);

app.listen(4300,()=>{
    console.log('listening to port 4300');
});
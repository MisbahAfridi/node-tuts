const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'public');
// app.use(express.static(publicPath));

app.get('',(req,res)=> {
    res.sendFile(`${publicPath}/index.html`)
});

app.get('/about',(req,res)=> {
    res.sendFile(`${publicPath}/about.html`)
});

app.get('#', (_, res) => { 
    res.sendFile(`${publicPath}/nopage.html`);
})

app.listen(4300);

// app.get('',(req,res)=> {
//     console.log('data sent by browser =====>>>', req.query.name);
//     res.send(`
//         <h1>Welcome to home page <a href="/about">Go to About</a></h1> 
        
//         `)
// });

// app.get('/about',(req,res)=> {
//     res.send(`
//         <input type="text" placeholder="enter user name" />
//         <button>Click me</button>
//         `)
// });

// app.listen(4300);

// const http = require('http');
// const data = require('./data');

// http.createServer((req,res)=> {
// res.writeHead(200,{'Content-Type':'application/json'});
// res.write(JSON.stringify(data));

// res.end();
// }).listen(4000, "127.0.0.1");

// console.log(process.argv[3]);

// const fs = require('fs')

// const input = process.argv;
// if(input[2]=='remove')
// fs.writeFileSync(input[2], input[3]);
// fs.unlinkSync(input[3])
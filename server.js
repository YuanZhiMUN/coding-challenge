const express = require('express');
const path = require('path');
const mysql = require('mysql');
const app = express();
var cors = require('cors')
const axios = require('axios');
const SAVA_ALL = "";

app.use(cors());
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Yz081221@',
    database: 'coding'
});

connection.connect(err => {
    if(err){
        return err;
    }
});

app.get('/balancesearch', (req, res) => {
    const {address} = req.query;
    axios.get(`https://api.blockcypher.com/v1/btc/main/addrs/${address}/balance`).then(results=>
        {
            return res.json({balance: results.data.balance});
        }
    );
 });

app.get('/transaction', (req, res) => {
    const {inputAdd, outputAdd, value} = req.query;
    var newtx = { inputs: [{addresses: [inputAdd]}],
        outputs: [{addresses: [outputAdd], 
        value: parseInt(value)}]
    };
    
    axios.post('https://api.blockcypher.com/v1/bcy/test/txs/new', JSON.stringify(newtx)).then(results=>
        {
            return res.json({data: results.data});
        }
    );
 });

app.get('/', (req, res) => {
     res.send("from server side");
 });
//app.get('/', function(req, res) {
  //res.sendFile(path.join(__dirname, 'build', 'index.html'));
//});
// app.get('/', (req, res)=>{
//     res.send('Hello from the server side');
// });

app.listen(9000, () => {
    console.log('Good');
});
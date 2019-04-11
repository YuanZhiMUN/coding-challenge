const express = require('express');
const path = require('path');
const mysql = require('mysql');
const app = express();
var cors = require('cors')
const axios = require('axios');

//create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '******', 
    database: '******'
});

//Create
db.connect(err => {
    if(err){
        console.log("err is : ", err);
    }else{
    console.log('MySql connected...');
    }
});

app.use(cors());

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
            const INSERT_DATA = `INSERT INTO transaction (Total, Fees, Size) VALUES(${results.data.tx.total}, ${results.data.tx.fees}, ${results.data.tx.size})`;
            db.query(INSERT_DATA, (err, results) => {
                if (err){
                    console.log("Insert data wrong", err);
                }
                console.log('Insert data successfully');
            });
            return res.json({data: results.data});
        }
    );
 });

app.listen(9000, () => {
    console.log('The server is on port 9000');
});
require('dotenv').config()
var wol = require('node-wol');
const express = require('express')
const app = express()

app.get('/', function (req, res) {
	wol.wake(process.env.DEFAULT_MAC_ADDRESS, {
	  address: process.env.DEFAULT_IP_ADDRESS,
	  port: process.env.DEFAULT_PORT
	}, function(error) {
	  if(error) {
      res.send('Magic Packet NOT Sent')
	    return;
	  }
    res.send('Magic Packet Sent succesfully')
	});
})

app.listen(3000)

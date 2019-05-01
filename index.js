const serverless = require('serverless-http');
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Smell the Glove!')
})

module.exports.handler = serverless(app);

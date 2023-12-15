const express = require('express');
const cors = require('cors')
const client = require('./s3');
require("dotenv").config()

const app = express();

app.use(cors())

app.get('/s3url', async (req, res) => {
  const {name, type} = req.query
  client.presignedUrl('PUT', "europetrip", `${name}.${type}`, 24 * 60 * 60, (err, url) => {
    if (err) throw err
    res.end(url)
  })
})

app.listen(80, () => {console.log("working")})
require("dotenv").config()
const Minio = require('minio')


var client = new Minio.Client({
  endPoint: 'hb.ru-msk.vkcs.cloud',
  useSSL: true,
  accessKey: process.env.ACCESSKEY,
  secretKey: process.env.SECRETKEY
})

module.exports = client;

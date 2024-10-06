const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors())
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");




  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
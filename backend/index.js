const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
app.use(express.json());
app.use(cors())
dotenv.config();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const userName= process.env.DATABASE_USER;  
const password= process.env.MONGOBD_PASSWORD;


const uri = `mongodb+srv://${userName}:${password}@cluster0.jgrjq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // All Get Method 
    app.get('/products', async(req, res) =>{
      const result = await productCollection.find().toArray();
      res.send(result)
    })

    // all Database collection
    const database=client.db('furnito');
    const productCollection = database.collection('products');


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Your Server Is running')
})

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
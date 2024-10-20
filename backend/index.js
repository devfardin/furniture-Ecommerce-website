const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const userName = process.env.DATABASE_USER;
const password = process.env.MONGOBD_PASSWORD;

const uri = `mongodb+srv://${userName}:${password}@cluster0.jgrjq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // all Database collection
    const database = client.db("furnito");
    const productCollection = database.collection("products");
    const usersCollection = database.collection("users");

    // All Get Method
    app.get("/products", async (req, res) => {
      const result = await productCollection.find().toArray();
      res.send(result);
    });
    // Get Single product Data
    app.get("/product/:id", async (req, res) => {
      const id = req.params.id;
      const query = {
        _id: new ObjectId(id),
      };
      const result = await productCollection.findOne(query);
      res.send(result);
    });

    // Post Data Method

    // Save user in bd
    app.put("/user", async (req, res) => {
      const user = req.body;

      // check if user already exists in bd
      const isExist = await usersCollection.findOne({ email: user?.email });
      if (isExist) return res.send(isExist);

      const options = { upsert: true }; 
      const query = { email: user?.email };
      const updateDoc = {
        $set: {
          ...user,
        },
      };
      const result = await usersCollection.updateOne(query, updateDoc, options);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Your Server Is running");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

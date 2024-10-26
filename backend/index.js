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
    const cartCollection = database.collection("cart");

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

    // get Cart Single product data
    app.get("/cart/:id", async (req, res) => {
      const id = req.params.id;
      const result = await cartCollection.findOne(id);
      res.send(result);
    });

    // get cart product base on user email
    app.get("/carts", async (req, res) => {
      const email = req?.query?.email;
      if (!email) return res.send([]);
      query = { customerEmail: email };
      const result = await cartCollection.find(query).toArray();
      res.send(result);
    });

    // get all user cart data in db
    app.get('/cartproduct', async(req, res)=>{
      const result = await cartCollection.find().toArray()
      res.send(result) 
    })

    // ----------------------------------------------------
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

    app.put("/cart", async (req, res) => {
      const productData = req.body;

      // come from client or user data
      const productId = productData?.productId;
      const customerEmail = productData?.customerEmail;

      const productQuan = productData?.productQuantity;

      // come data from database
      const query = { productId: productId }
      const query2 ={ customerEmail: customerEmail }
      const isExist = await cartCollection.findOne( query && query2 );

      console.log(isExist);
      
      


      console.log();
      

      

      const dbQuantity =  isExist?.productQuantity;
      

      const filter = { "productId": productData?.productId };
      const options = { upsert: true };

      if (  ''  ) {
          const updateDoc = {
            $set: {
              productQuantity: dbQuantity + productQuan,
            },
          };
          // const result = cartCollection.updateOne(filter, updateDoc, options);
          // return res.send(result);
      }
      // const result = await cartCollection.insertOne(productData);
      // res.send(result);
    });

    // ----------------------------------------------------------------------

    // Get Single User data base on the email address
    app.get("/user/:email", async (req, res) => {
      const email = req.params.email;
      const result = await usersCollection.findOne({ email });
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

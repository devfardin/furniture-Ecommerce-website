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
    const wishListCollection = database.collection("wishlist");

    // All Get Method here 👈
    // =====================================================

    // get all product for user
    // ------------------------
    app.get("/products", async (req, res) => {
      const result = await productCollection.find().toArray();
      res.send(result);
    });

    // get all product for admin
    app.get("/all-products", async (req, res) => {
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

    // get wishlist product base on user email
    app.get("/wishlist", async (req, res) => {
      const email = req?.query?.email;
      if (!email) return res.send([]);
      query = { customerEmail: email };
      const result = await wishListCollection.find(query).toArray();
      res.send(result);
    });

    // get all user cart data in db
    app.get("/cartproduct", async (req, res) => {
      const result = await cartCollection.find().toArray();
      res.send(result);
    });

    // get all user Wishlist data in db
    app.get("/wishlist", async (req, res) => {
      const result = await cartCollection.find().toArray();
      res.send(result);
    });

    // Get Single User data base on the email address
    app.get("/user/:email", async (req, res) => {
      const email = req.params.email;
      const result = await usersCollection.findOne({ email });
      res.send(result);
    });

    // ===============================================================

    // Post or put Method Here 👈
    // -----------------------------

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

    // cart Product post Method
    // ---------------------------
    app.put("/cart", async (req, res) => {
      const productData = req.body;
      // come from client or user data
      const productId = productData?.productId;
      const customerEmail = productData?.customerEmail;
      const productQuan = productData?.productQuantity;
      // come data from database
      const queryId = { productId: productId, customerEmail: customerEmail };
      const query2 = { customerEmail: customerEmail };
      const isExistId = await cartCollection.findOne(queryId);
      const isExistEmail = await cartCollection.findOne(query2);
      const isExistDbId = isExistId?.productId;
      const isExistDbEmail = isExistEmail?.customerEmail;
      const dbQuantity = isExistId?.productQuantity;
      if (productId === isExistDbId && customerEmail === isExistDbEmail) {
        const filter = {
          productId: productId,
          customerEmail: customerEmail,
        };
        const options = {
          upsert: productId === isExistDbId && customerEmail === isExistDbEmail,
        };
        const updateDoc = {
          $set: {
            productQuantity: dbQuantity + productQuan,
          },
        };
        const result = cartCollection.updateOne(filter, updateDoc, options);
        if (result) {
          return res.status(200).json({
            success: true,
            message:
              "This item is already in your cart. Quantity has been updated.",
          });
        }
      }
      const result = await cartCollection.insertOne(productData);
      if (result) {
        return res.status(200).json({
          success: true,
          message: "Item added to your cart successfully.",
        });
      }

      // res.send(result);
    });

    // Wish list Product post method
    // -------------------------------
    app.put("/wishlist", async (req, res) => {
      const wishListProduct = req.body;
      const productId = wishListProduct?.productId;
      const customerEmail = wishListProduct?.customerEmail;

      const query = { productId: productId, customerEmail: customerEmail };
      const isExist = await wishListCollection.findOne(query);

      if (isExist) {
        return res.status(400).json({
          success: false,
          message: "The item already exists in your records.",
        });
      }
      const result = await wishListCollection.insertOne(wishListProduct);
      return res.send(result);
    });

    // =============================================================================

    // All Delete Methor Here 👈
    // -------------------------

    // get delte from database
    app.delete("/cart/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await cartCollection.deleteOne(query);
      res.send(result);
    });
    // get delte from database
    app.delete("/wishlist/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await wishListCollection.deleteOne(query);
      res.send(result);
    });

    // ===================================================================================

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

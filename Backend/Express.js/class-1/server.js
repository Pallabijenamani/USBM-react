const express = require('express');
const fs = require('fs');
require('dotenv').config();

const app = express();
 // middleware
// Use express.json() middleware to parse JSON requests
app.use(express.json());

// Helper function to read data from data.json
const read = () => {
  try {
    const data = fs.readFileSync('data.json'); // Read the file
    return JSON.parse(data); // Parse and return the data as a JavaScript object
  } catch (err) {
    console.error("Error reading file", err);
    return []; // Return an empty array if there's an error (e.g., file not found)
  }
};

// Helper function to write data to data.json
const write = (data) => {
  try {
    fs.writeFileSync('data.json', JSON.stringify(data, null, 2)); // Write the data back to the file
  } catch (err) {
    console.error("Error writing file", err);
  }
};

// Routes

app.get("/", (req, res) => {
  res.status(200).send({ msg: "Home page" });
});

app.get("/contact", (req, res) => {
  res.status(200).send("Contact");
});

app.get("/service", (req, res) => {
  res.status(200).send("Service");
});

 

//Route for Products

app.get("/products",(req,res) => {
    const data = read();
    res.status(200).send({products:data});
});

// //Add Data

app.put("/add-product", (req, res) => {
    const data = read();  
    const { name, price } = req.body;  
  
    // Create a new product object
    const newProduct = {
      id: data.length + 1, 
      name,
      price,
    };
    data.push(newProduct);
    write(data);
    res.status(201).send({ msg: 'Product added successfully', product: newProduct });
  });
  


 // POST method to add a new product

app.post("/add-product", (req, res) => {
    const data = read(); // Read the existing data from the file
    const { name, price } = req.body;  
  
    if (!name || !price) {
      return res.status(400).send({ msg: 'Name and price are required' });
    }
  
    // Create a new product object
    const newProduct = {
      id: data.length + 1,  
      name,
      price,
    };
    data.push(newProduct);
    write(data);
  
    // Send a success response
    res.status(201).send({ msg: 'Product added successfully', product: newProduct });
  });
  
  // PATCH method to update a product
app.patch("/update-product/:id", (req, res) => {
    const data = read(); // Read the existing data from the file
    const { id } = req.params; // Get the ID from the URL params
    const { name, price } = req.body; // Get the name and price from the request body
  
    const productIndex = data.findIndex(product => product.id === parseInt(id));
  
    if (productIndex === -1) {
      return res.status(404).send({ msg: 'Product not found' });
    }
  
    // Update the product details
    if (name) data[productIndex].name = name;
    if (price) data[productIndex].price = price;
  
    // Write the updated data back to the file
    write(data);
  
    // Send a success response
    res.status(200).send({ msg: 'Product updated successfully', product: data[productIndex] });
  });
  

  // DELETE a product by ID
app.delete("/delete-product/:id", (req, res) => {
    const data = read();
    const { id } = req.params;
  
    const productIndex = data.findIndex(product => product.id === parseInt(id));
  
    if (productIndex === -1) {
      return res.status(404).send({ msg: 'Product not found' });
    }
  //Remove the product from data array
    const deletedProduct = data.splice(productIndex, 1);
    write(data);
  
    res.status(200).send({ msg: 'Product deleted successfully', product: deletedProduct });
  });



//Listen the Server 

const port = process.env.PORT || 8000;
// // const port = 5000;
app.listen(port, () => 
    { console.log( `Server running on port ${port}`) });

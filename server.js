// Import express, cors and router respectively 
const express = require("express"); 
const cors = require("cors");
const calculateRouter = require("./routes/v1/calculator");

// Initialize the Express application
const app = express();

// Define the port
const PORT = 4000;

// Initialize the cors application
app.use(cors());


app.use(express.json());

// Define the route
app.use("/v1/calculate", calculateRouter);

//Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

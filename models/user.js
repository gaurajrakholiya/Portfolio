const mongoose = require("mongoose");


const portfolioSchema = new mongoose.Schema({
    username: String,
    email: String,
    description: String,
  });
  
  const Portfolio = mongoose.model("Portfolio", portfolioSchema);



module.exports = Portfolio
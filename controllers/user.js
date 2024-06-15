const Portfolio = require("../models/user");

const validator = require("validator");

async function getUser(req, res) {
  try {
    let por = await Portfolio.find();
    return res.send(por);
    // console.log(por.json())
  } catch (err) {
    return console.log(err);
  }
}
async function createUser(req, res) {
  let user = new Portfolio();
  user.username = req.body.username;
  user.email = req.body.email;
  user.description = req.body.description;
  function validateEmail(email) {
    // Use the 'isEmail' method from the 'validator' library
    return validator.isEmail(email);
  }

  if (validateEmail(user.email)) {
    const doc = await user.save();
    console.log(doc);
    return res.json(doc);
    // console.log(`${user.email} is a valid email address.`);
  } else {
    return console.log(`${user.email} is not a valid email address.`);
  }
}

module.exports = {
  createUser,
  getUser,
};

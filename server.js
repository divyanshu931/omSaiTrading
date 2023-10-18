//const path = require("path");
const mongoose = require("mongoose");
const express = require("express");
const nodemailer = require("nodemailer");
const Dotenv = require("dotenv");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const morgan = require("morgan");
const Query = require("./Querry");
const Product = require("./product");
const Categories = require("./categories");
const User = require("./users");

Dotenv.config();
const app = express();

const port = process.env.PORT || 7000;

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//if (process.env.NODE_ENV == "production") {
 // app.use(express.static(path.join(__dirname, "./client/build")));
//}

//-------------------------------------------------connection to mongo databse--------------------------//
const connection_url = process.env.DATABASE;

mongoose
  .connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`DB connected`))
  .catch((error) => console.log(`error: ${error}`));

//if (process.env.NODE_ENV == "production") {
  //app.use("*", function (req, res) {
    //res.sendFile(path.join(__dirname, "./client/build/index.html"));
  //});
//}

app.post("/signup", async (req, res) => {
  try {
    const newPassword = await bcrypt.hash(req.body.password, 10);
    const existingUser = await User.findOne({ email: req.body.email });

    if (existingUser) {
      return res.status(400).send("Email already exists");
    }
    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: newPassword,
    });
    res.status(201).send(req.body);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error occurred");
  }
});

app.post("/login", async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
  });

  if (!user) {
    return { status: "error", error: "Invalid login" };
  }

  const isPasswordValid = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (isPasswordValid) {
    const token = jwt.sign(
      {
        name: user.name,
        email: user.email,
      },
      "secret123"
    );

    return res.json({ status: "ok", user: token });
  } else {
    return res.json({ status: "error", user: false });
  }
});

app.get("/products/:batch", (req, res) => {
  //getting the single user details

  Product.find({ batch: req.params.batch })
    .then((data) => {
  
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.get("/Categories", async (req, res) => {
  try {
    const data = await Categories.find();
  
    res.status(200).send(data);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

app.get("/Products", (req, res) => {
  //geting products
  Product.find()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.post("/admin/add/product", async (req, res) => {
  // add in Category collection api
  try {
    const respone = await Product.create(req.body);
    res.send(respone);
  } catch (error) {
    console.log(error);
  }
});

app.post("/admin/add/Categories", async (req, res) => {
  // add in Category collection api
  try {
    const respone = await Categories.create(req.body);
    res.send(respone);
   
  } catch (error) {
    console.log(error);
  }
});

app.post("/mail", async (req, res) => {
  console.log(req.body);
  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  // First email
  var mailOptions1 = {
    from: process.env.SMTP_MAIL,
    to: req.body.email, // first recipient's email address
    subject: "Thank You for Your Interest",
    text: `Dear ${req.body.name},
Thank you for expressing interest in our product/service. We appreciate your enthusiasm and are delighted to have caught your attention.

Our team is currently reviewing your inquiry and will be in touch with you shortly to provide more information. In the meantime, please feel free to reach out to us if you have any additional questions or concerns.

Thank you again for your interest, and we look forward to speaking with you soon.

Best regards,
Om Sai Trading`, // text for the first email
  };

  // Second email
  var mailOptions2 = {
    from: process.env.SMTP_MAIL,
    to: "divyanshu_bca21@jimsindia.org", // onwnerrecipient's email address
    subject: "New Query Received",
    text: `Dear OWNER,
  
  We have received a new query from a customer. The customer's name is ${req.body.name}, their email address is ${req.body.email}, and their phone number is ${req.body.phonenumber}. Please see below for the details of the query:
  
  Query: ${req.body.query}
  
  For more details, please check the query box in the admin panel of our website.
  
  We will be responding to this query shortly. In the meantime, please feel free to reach out to us if you have any additional questions or concerns.
  
  This email is AI-generated by our website.
  
  Thank you for your attention to this matter.
  
  Sincerely,
  OM SAI TRANDING`, // text for the second email
  };

  try {
    const response = await Query.create(req.body);

    // Send first email
    transporter.sendMail(mailOptions1, function (error, info) {});

    // Send second email
    transporter.sendMail(mailOptions2, function (error, info) {});

    res.send(response);
  } catch (error) {
    res.status(501).send("Error");
  }
});

app.listen(port, () => console.log(`Server started at port: ${port}`));

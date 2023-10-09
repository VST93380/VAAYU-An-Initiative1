const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const regtemp = require("../models/registration");
const communitytemp = require("../models/community");
const itenaryModel = require("../models/itenary");

//register
router.post("/register", async (req, res) => {
  const usercheck = await regtemp.findOne({ username: req.body.username });
  const emailcheck = await regtemp.findOne({ email: req.body.email });
  const phonecheck = await regtemp.findOne({ phone: req.body.phone });
  if (usercheck == null && emailcheck == null && phonecheck == null) {
    const saltpwd = await bcrypt.genSalt(10);
    console.log(saltpwd);

    // Hash the password using the generated salt
    const securepassword = await bcrypt.hash(req.body.password, saltpwd);

    const signupuser = new regtemp({
      username: req.body.username,
      email: req.body.email,
      phone: req.body.phone,
      password: securepassword,
    });
    signupuser
      .save()
      .then((data) => {
        res.send(data);
      })
      .catch((e) => {
        res.json(e);
      });
  } else if (usercheck != null) {
    res.send("userexist");
  } else if (phonecheck != null) {
    res.send("phoneexist");
  } else if (emailcheck != null) {
    res.send("emailexist");
  }
});

//login
router.post("/login", async (req, res) => {
  try {
    const user = await regtemp.findOne({ phone: req.body.phone });
    if (!user) {
      return res.send("newuser");
    }
    const passwordCheck = await bcrypt.compare(
      req.body.password,
      user.password
    );
    console.log(passwordCheck);
    if (!passwordCheck) {
      return res.send("invalid");
    } else {
      const { username, email, phone, role, date } = user;

      // Create a JSON object with the desired fields
      const userData = {
        username,
        email,
        phone,
        role,
        date,
      };
      res.status(200).send({
        message: "Login Successful",
        user: userData,
      });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).send({
      message: "Internal Server Error",
    });
  }
});

router.post("/comment", async (req, res) => {
  const { username, blogmsg, title, imagelink } = req.body;

  try {
    // Input validation
    if (!username || !blogmsg || !title || !imagelink) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const comment = new communitytemp({
      username: username,
      title: title,
      blogmsg: blogmsg,
      imagelink: imagelink,
    });

    await comment.save();
    res.status(201).json({ message: "Comment added successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to add comment" });
  }
});

router.get("/getcomments", async (req, res) => {
  try {
    const items = await communitytemp.find();
    res.json(items);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// itenary
router.post("/itinerary", async (req, res) => {
  const { username, place, city, state, category, openingHours } = req.body;
  console.log(req.body);

  try {
    const itinerary = new itenaryModel({
      username: username,
      place: place,
      city: city,
      state: state,
      category: category,
      openingHours: openingHours,
    });

    await itinerary.save();

    res.status(201).json({ message: "Itinerary added successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to add itinerary" });
  }
});

router.get("/getitinerary", async (req, res) => {
  const user = req.query.user;
  try {
    const itineraries = await itenaryModel.find({ username: user });
    res.json(itineraries);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to get itineraries" });
  }
});

module.exports = router;

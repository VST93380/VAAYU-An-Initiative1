const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const regtemp = require("../models/registration");


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
            gender: req.body.gender,
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
    } else if (emailcheck != null) {
        res.send("emailexist");
    } else if (phonecheck != null) {
        res.send("phoneexist");
    }
});

//login
router.post("/login", async (req, res) => {
    const usercheck = await regtemp.findOne({ username: req.body.username });
    if (usercheck == null) {
        res.send("newuser");
    } else {
        const validate = await bcrypt.compare(
            req.body.password,
            usercheck.password
        );
        if (!validate) {
            res.send("invalid");
        } else {
            regtemp
                .findOne({ username: req.body.username })
                // if email exists
                .then((user) => {
                    // compare the password entered and the hashed password found
                    bcrypt
                        .compare(req.body.password, user.password)
                        // if the passwords match
                        .then((passwordCheck) => {
                            // check if password matches
                            if (!passwordCheck) {
                                return res.status(400).send({
                                    message: "Passwords does not match",
                                    error,
                                });
                            }
                            //   return success response
                            res.status(200).send({
                                message: "Login Successful",
                                username: user.username,
                                role: user.role,

                            });
                        })
                        // catch error if password does not match
                        .catch((error) => {
                            res.status(400).send({
                                message: "Passwords does not match",
                                error,
                            });
                        });
                })
                // catch error if email does not exist
                .catch((e) => {
                    res.status(404).send({
                        message: "Email not found",
                        e,
                    });
                });
        }
    }
});


module.exports = router;
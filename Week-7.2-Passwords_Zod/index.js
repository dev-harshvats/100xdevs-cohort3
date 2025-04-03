const bcrypt = require("bcrypt");
const express = require("express");
const { UserModel, TodoModel } = require("./db");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "asdasdasd";
const mongoose = require("mongoose");
const { z } = require("zod");

mongoose.connect("");

const app = express();
app.use(express.json());

app.post("/signup", async function(req, res){
    // Creating a zod object for input validation
    const requireBody = z.object({
        email: z.string().min(3).max(100).email(),
        name: z.string().min(3).max(100),
        password: z.string().min(3).max(30)
    })
    //const parsedData = requireBody.parse(req.body);
    const parsedDataWithSuccess = requireBody.safeParse(req.body);

    if(!parsedDataWithSuccess.success){
        res.json({
            message: "Incorrect format",
            error: parsedDataWithSuccess.error
        })
        return
    }

    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    let errorThrown = false;
    try{
        const hashedPassword = await bcrypt.hash(password, 5);
        console.log(hashedPassword);

        await UserModel.create({
            email: email,
            password: hashedPassword,
            name: name
        })
    } catch(e){
        res.json({
            message: "User already exists"
        })
        errorThrown = true;
    }
    
    if(!errorThrown){
        res.json({
            message: "You are signed up"
        })
    }
});

app.post("/signin", async function(req, res){
    const email = req.body.email;
    const password = req.body.password;

    const response = await UserModel.findOne({
        email: email,
        password: password
    })

    const passwordMatch = await bcrypt.compare(password, response.password)

    if(passwordMatch){
        const token = jwt.sign({
            id: response._id.toString()
        }, JWT_SECRET)
        res.json({
            token
        })
    } else{
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }
});

app.post("/todo", auth, function(req, res){
    const userId = req.userId;

    res.json({
        userId: userId
    })
});

app.get("/todos", auth, function(req, res){
    const userId = req.userId;

    res.json({
        userId: userId
    })
});

function auth(req, res, next){
    const token = req.headers.token;

    const decodedData = jwt.verify(token, JWT_SECRET);

    if(decodedData){
        req.userId = decodedData.id;
        next();
    } else{
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }
}

app.listen(3000, () => {
    console.log("Server is running on port http://localhost:3000");
})

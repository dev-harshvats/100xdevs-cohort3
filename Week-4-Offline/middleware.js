const express = require('express');

const app = express();

// function for person with age more than 14
// Middleware
function isOldEnoughMiddleware(req, res, next){
    const age = req.query.age;
    if(age >= 14){
        next();
    }
    else{
        res.json({
            msg: "Sorry, you are not of age yet.",
        });
    }
}

// route 1
app.get("/ride1", isOldEnoughMiddleware, function(req, res){
    res.json({
        msg: "You have successfully riden the ride 1."
    });
})

// route 2
app.get("/ride2", isOldEnoughMiddleware, function(req, res){
    res.json({
        msg: "You have successfully riden the ride 2."
    });
})

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
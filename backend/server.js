const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());


app.get("/", (req,res)=>{
    res.send("Kranky server is running");
});


app.listen(PORT, ()=>{
    console.log(`Kranky server running on port ${PORT}`);
});

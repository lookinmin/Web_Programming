const express = require('express');
const connectDB = require('./config/db');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req,res) => {
  res.send("API RUNNUNG");
});

connectDB();

app.listen(PORT, ()=> console.log(`server started on port ${PORT}`));

app.use(express.json({ extended: false}));
app.use('/api/register', require("./routes/api/register"));

app.get("/api/register", (req,res)=>{
  req.require("./routes/api/register");
})
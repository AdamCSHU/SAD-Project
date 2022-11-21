const express = require("express") 

const router = express.Router()

router.get('/api/StudentData/students', (req,res)=>{
    res.send("stuff to print")
});

module.exports = router 
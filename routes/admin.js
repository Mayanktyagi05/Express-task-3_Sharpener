const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next)=>{
    res.send('<form action = "/product" method = "POST"><input type = "text" name ="title"><input type = "number" name ="Size of Product"><button type="submit">Submit</form>')
});

router.post('/product', (req, res, next)=>{
    console.log(req.body);
    res.redirect('/add-product');
});

module.exports = router;
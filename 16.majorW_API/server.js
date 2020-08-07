var mongoConnectionString = "mongodb://localhost/wafflez";

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connect(mongoConnectionString,{useNewUrlParser: true, useUnifiedTopology: true});

var Product = require('./model/product');
var Wishlist = require('./model/wishlist');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.post('/product',function(req,res){
  var p = new Product();
  p.title = req.body.title;
  p.price = req.body.price;
  p.save(function(err,savedproduct){
    if (err){
      res.status(500).send({error:"Could not save product"});
    }else {
      res.status(200).send(savedproduct);
    }
  });
});

app.get('/product',function(req,res){
  Product.find({},function(err,product){
    if (err){
      res.status(500).send({error:"could not get product"});
    } else {
      res.send(product);
    }

  })
});

app.post('/wishlist',function(req,res){
  var wishlist = new Wishlist();
  wishlist.title = req.body.title;
  wishlist.save(function(err,newWishlist){
    if (err){
      res.status(500).send({error:"could not make a whishlist"});
    } else {
      res.status(200).send(newWishlist);
    }
  });

});

app.put('/wishlist/product/add',function(req,res){
  Product.findOne({_id:req.body.productId},function(err,prod){
    if (err){
      res.status(500).send({error:"couldnt add item to list"});
    }else {
      Wishlist.update({_id:req.body.WishlistId}, {$addToSet: {products:prod._id}}, function(err,wishlist) {
          if (err){
            res.status(500).send({error:"couldnt add item to wishlist"});
          } else {
            res.send("Success adding the product to the wishlist");
          }
      });
    }
  })
});



app.get('/wishlist' , function(req,res){
  Wishlist.find({}).populate({path:'products',model:'Product'}).exec(function(err,newWishlist){
    if (err){
      res.status(500).send({error:"couldnt find wishlist"});

    } else {
      res.send(newWishlist);
    }
})});


app.listen(3004,function(){
console.log("major wafflez running on port 3004!...");

})

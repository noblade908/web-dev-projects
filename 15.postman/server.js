var bodyparser = require('body-parser');
var express = require('express');
var app = express();

app.use (bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

var ingredients = [
  {
    "id":"21234",
    "text" : "eggs"
  },{ "id":"12123", "text": "milk"}, { "id": "12345" , "text":"frog"}, {"id": "12678", "text":"rabbit"}
];


app.get('/ingredients',function(req, res){
  res.send(ingredients);
});


app.post('/ingredients',function(req,res){
var ingredient = req.body;
if (!ingredient|| ingredient.text===""){
  res.status(500).send({error:"your ingredient must have a text"});
} else {
  ingredients.push(ingredient);
  res.status(200).send(ingredient);
}

});

app.put('/ingredients/:ingredientId',function(req,res){

  var txt = req.body.text;
  if(!txt||txt===""){
    res.status(500).send({error:"You must provide ingredient text"})
  }else {
  for (var x =0;x<ingredients.length;x++){
    var ing = ingredients[x];
    if (ing.id==req.params.ingredientId)
      ingredients[x].text=txt;break;
  }
  res.send(ingredients);
}
});


app.listen(3000,function(){
  console.log("first APU running on port 3000!");

});

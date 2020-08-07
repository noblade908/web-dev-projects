var nmbf1 = document.getElementById('num1');
var nmbf2 = document.getElementById('num2');

var fm = document.getElementById('percentcalc');

var result = document.getElementById('res');

fm.addEventListener('submit',function(event){
    if (!nmbf1.value || !nmbf2.value){
        alert("please enter actual values");
    }
   var x = parseFloat(nmbf1.value);
    var y = parseFloat(nmbf2.value);
    var res = x/y;
    res *=100;
result.innerText = "Answer: " + res +"%"
event.preventDefault();
});


var students = ["amer", "tala","nawfel","lolo","farah"];
var naughtylist = [];

var index = students.indexOf("tala");

if (index>-1){
   var pop = students.splice(index,2,"leila");
    naughtylist.push(pop);
    
}


console.log(students);
console.log(naughtylist);

for (var i=0;i<students.length;i++){
    console.log(students[i] + "WASSABI");
    
}

var p1 = 10;
var p2 = 80;

var trans = function(price){
    if (price <= 60){
        console.log(price + "is great");
        return 1;
    } else{
        console.log(price + "is more thena enough");
        return-1;
    }
    
}

var ans1 = trans(p1);
console.log(ans1);
var ans2 = trans(p2);
console.log(ans2);

//var student = {
//    firstname: "john", secondname : "parker", age: 7
//};
//
//console.log(student.firstname);
//console.log(student["age"]);
//
//var student2 = new Object();
//student2.hello = "hello2";
//console.log(student2.hello);
//
//var student3 = {
//    greeting: function(){
//        return this.FN + " HELLO";
//        
//    }
//};
//student3.FN = "mark zuckabog";
//console.log(student3.greeting());


function student(first,second,age){
 this.fn = first;
 this.sc = second;
    this.age = age;
    function greet(){
        return "HELLO " + first + " "+ second; 
    }
    
}

var st = new student ("tala","bee","20");
for (var p in st){
    console.log(st[p]);
    console.log("and");
}



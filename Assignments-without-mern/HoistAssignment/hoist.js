//1
console.log(hello); //console log hello                                   
var hello = 'world'; //assigning the variable HELLO to WORLD                             

//world

//2
var needle = 'haystack'; //assigning the variable NEEDLE to HAYSTACK        
test(); //calls the function
function test(){
    var needle = 'magnet'; //the variable NEEDLE gets reassigned to MAGNET
    console.log(needle); //console logs the variable NEEDLE
}

//magnet

//3
var brendan = 'super cool'; //assigning the variable BRENDEN to SUPER COOL        
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// super cool

//4
var food = 'chicken'; // variable FOOD gets assigned to chicken
console.log(food);
eat();
function eat(){
    food = 'half-chicken'; //reassignment to half-chicken
    console.log(food); //logs half-chicken
    var food = 'gone'; //going to be an error, the variable FOOD has been declared already
}

//5
mean(); //calls MEAN function
console.log(food); //logs variable food
var mean = function() {  //stores the value of a function as variable MEAN
    food = "chicken"; //declares food to CHICKEN
    console.log(food); //logs FOOD
    var food = "fish"; //declares food to FISH
    console.log(food); //logs chicken
}
console.log(food); //error as MEAN is a variable 

//6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

//logs the genre variable
//assign genre to disco
//calls the variable rewind
//function rewind
//genre is set to rock
//logs genre
//genre gets reassigned to r&b
//logs genre again
//logs disco

//7
dojo = "san jose"; //JavaScript automatically sets dojo to var 
console.log(dojo); //logs dojo
learn(); //calls function
function learn() { //stores into function
    dojo = "seattle"; //dojo gets reassign to seattle
    console.log(dojo); //logs dojo
    var dojo = "burbank"; //reassigns to burbank
    console.log(dojo); //logs dojo again
}
console.log(dojo); //logs dojo 


console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}










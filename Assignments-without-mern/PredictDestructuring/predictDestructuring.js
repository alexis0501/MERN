//1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar) //logs Tesla
console.log(otherRandomCar) //logs Mercedes; skips tesla

//2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name); //error name is deprecated
console.log(otherName); //log Elon




//3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password); //12345
console.log(hashedPassword); //log undefined

//4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers; //sets index of 1 which is 2
const [,,,second] = numbers; // skip 3 indexes
const [,,,,,,,,third] = numbers; //var third is 2 skips 8  indexes
//Predict the output
console.log(first == second); //false
console.log(first == third); //false


//5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest; 
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key); //logs value
console.log(secondKey); //logs [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]); //logs 1
console.log(willThisWork); //logs 5


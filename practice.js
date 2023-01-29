var num1 = 56;
num1 += 4;
console.log (num1);

var names = "Raihan";
var isGiven = true;
console.log (names);
console.log (typeof isGiven);

var num2 = "70";
console.log (parseInt(num2));

var num3 = "90.6778";
var nums = parseFloat (num3);
console.log (nums.toFixed (2));
console.log (typeof nums);

var numbers = [23, 45, 44, 656, 344, 5, 35, 89];
console.log (numbers.length);
var positionOfNumbers = numbers.indexOf(656);
console.log (positionOfNumbers);
var positionOfNumbers2 = numbers.indexOf(100);
console.log (positionOfNumbers2);
console.log (numbers[2]);
numbers[3] = 55;
console.log (numbers);
console.log (numbers[9]);
var elementOfPositionTwo = numbers[2];
console.log (elementOfPositionTwo);
numbers.push(90);
console.log (numbers);
numbers.pop();
console.log (numbers);
numbers.unshift(1);
console.log (numbers);
numbers.shift();
console.log (numbers);

var totalAmount = 20000;
if (totalAmount >= 80000) {
    console.log ("I will buy a Mac laptop")
} else if (totalAmount >= 60000) {
    console.log ("I will buy gaming laptop")
} else if (totalAmount >= 40000) {
    console.log ("I will buy Lenovo Yoga laptop")
} else if (totalAmount >= 20000) {
    console.log ("I will buy a second hand laptop")
} else {
    console.log ("There is no product to buy")
}
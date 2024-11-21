//All questions should be printed to your Browser's console using console.log()

//Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3, 9, 23, 64, 2, 8, 28, 93, 66];
let sum = 0;
console.log("Ages:", ages);

//Programmatically subtract the value of the first element in the array from the value in the last element of the array. Do not use numbers to reference the last element, find it programmatically. ages[7] - ages[0] is not allowed!
let result = ages[ages.length - 1] - ages [0];
console.log("The last age minus the first age is: " + result);

//Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths). I ADDED THIS TO THE INITIAL AGES ARRAY

//Use a loop to iterate through the array and calculate the average age.
for (let i = 0; i < ages.length; i++) {
    sum += ages [i];
}
let average = sum / ages.length;
console.log("Average age:", average);

//Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob', 'Rasputin'];
    let  totalLetters = 0; //This initializes totalLetters to 0 as a base to track the total letter cound of all names
    for (let i=0; i < names.length; i++) {  //the loop iterates each of the names in the array to ge a count. 
        totalLetters += names[i].length;    // adds the length of each name to totalLetters
    }

//Use a loop to iterate through the array and calculate the average number of letters per name.
let averageLetters = totalLetters / names.length; // creates a variable (averageLetters) that divides the total number of letters by the number of names.
console.log('Average number of letters in names array: ', averageLetters);

//Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
let concatenatedNames = names.join(' ');
console.log(concatenatedNames);

//How do you access the last element of any array?
/* let ages = [3, 9, 23, 64, 2, 8, 28, 66, 93];
let lastNum = ages.findLast((element) => element > 12);
console.log(lastNum); */

//How do you access the first element of any array? BY USING AN INDEX NUMBER OF 0

//Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
//For example:
//let names = ["Kelly", "Sam", "Kate"];    // starting with this array
//let nameLengths = [5, 3, 4];             // create a new array
let nameLengths = [3,5,3,5,4,3,8]; 
console.log('Length of names: ' + nameLengths);

//Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

for (let i = 0; i < nameLengths; i++) {
    sum += nameLengths;
}
//I DON"T KNOW WHY THIS IS NOT RETURNING THE PROPER SUM



//Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').

//Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.

//Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

//Write a function that takes an array of numbers and returns the average of all the elements in the array.

//Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

//Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

//Create a function of your own that solves a problem. In comments, write what the function does and why you created it.


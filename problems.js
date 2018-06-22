console.log("1. Print odd numbers between 1 and 10")

var num = 1;

while(num <= 10) {
  console.log(num);
  num += 2;
}

console.log("2. Print all multiples of 4 between 1 and 20")

var num = 1;

while(num <= 20) {
  if(num % 4 === 0) {
    console.log(num)
  }
  num ++;
}

console.log("3. Print all numbers between -10 and 19")

var num = -10;

// could also do this:
// while(num < 20) {
while (num <= 19) {
  console.log(num);
  num++;
}

console.log("4. Print all even numbers between 10 and 40")

var num = 10;

while(num <= 40) {
  if(num % 2 === 0) {
    console.log(num)
  }
  num++;
  // another method
  // num+=2;
}


console.log("5. Print all odd numbers between 300 and 333")


var num = 300;

while(num <= 333) {
  if(num % 2 !== 0) {
    console.log(num)
  }
  num++;
}




console.log("6. Print all numbers divisible by 5 AND 3 between 5 and 50")

var num = 5;

while(num <= 50) {
  if(num % 5 === 0 && num % 3 === 0) {
     console.log(num)
  }
  num++;
}































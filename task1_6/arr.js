let numbers = [10, 20, 30, 40, 10, 20, 30, 40, 10, 20];

let sum = 0;
let product = 1;
for (let i = 0; i < numbers.length; i++) {
  sum  += numbers[i];
 product *= numbers[i]
  console.log(sum);
}
console.log(sum);
console.log(product);
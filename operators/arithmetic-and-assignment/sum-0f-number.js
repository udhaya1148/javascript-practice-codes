//Find the sum of digits of a given number using % and /.
//Example: num = 123 → 1 + 2 + 3 = 6

num = 123;
sum = 0;

while(num >0){
    digit = num % 10; //get last digit
    sum +=digit;
    num = Math.floor(num/10) // remove last digit
}
console.log(sum)
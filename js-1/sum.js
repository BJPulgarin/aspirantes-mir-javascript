var count = 0;
var suma = 0;

function sum(n) {
  while (n >= count) {
    suma += count;
    count++;
  }
  return suma;
}

console.log(sum(4)); // 1 + 2 + 3 + 4 = 10
console.log(sum(10)); // 55
console.log(sum(15)); // 120

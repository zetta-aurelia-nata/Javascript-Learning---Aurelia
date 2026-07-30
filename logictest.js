
function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let integer = 2; integer <= Math.sqrt(number); integer++) {
    if (number % integer === 0) {
      return false;
    }
  }

  return true;
}

console.log("Is it a prime number?", isPrime(10)); 
console.log("Is it a prime number?", isPrime(43)); 
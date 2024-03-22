//Bai 1 Tinh tong cua so nguyen to
var n = 13;
function inprime(n) {
  if (n <= 1 || n % 1 !== 0) {
    console.log(`Khong phai so nguyen to`);
    return false;
  }
  for (var i = 2; i < n; i++) {
    if (n % i === 0) {
      console.log(`Khong phai so nguyen to`);
      return false;
    }
  }
  return true;
}
function sumPrime(n) {
  var sum = 0;
  for (var i = 2; i <= n; i++) {
    if (inprime(i)) {
      sum += i;
    }
  }
  console.log(sum);
  return sum;
}
inprime(n);
sumPrime(n);

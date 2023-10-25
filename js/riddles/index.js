// 1. odwróć liczbę
// np dla 12345, funkcja powinna zwrócić 54321
function reverseNumber(number) {
  return parseInt(number.toString().split('').reverse().join(''));
}

console.log("1.", reverseNumber(12345));

// 2. doodaj do siebie wszystkie wartości z tablicy, które są parzyste
// dla tablicy tab powinniśmy otrzymać 2 + 4 + 6 + 8 = 20
const tab = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function addEven(array) {
  let evenSum = 0;
  for (var i = 0; i < tab.length; i++) {
    if (tab[i] % 2 == 0) evenSum += tab[i];
  }
  return evenSum;
}

console.log("2.", addEven(tab));

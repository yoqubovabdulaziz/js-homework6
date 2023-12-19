// func1

// const power = (a, b) => a ** b;

// console.log(power(4, 5));

// func 2

// function mean(a, b) {
//   let res1 = (a + b) / 2;
//   let res2 = Math.sqrt(a * b);
//   return {res1, res2}
// }

// let resuslt = mean(12, 48)
// console.log(resuslt);

// func 3

// function sign(n) {
//   if (n > 0) {
//     return 1;
//   } else if (n == 0) {
//     return 0;
//   } else n < 0;
//   return -1;
// }

// console.log(sign(10));

// func 4

// function numberOfRoots(A, B, C) {
//   let D = B ** 2 - 4 * A * C;
//   if (D > 0) {
//     return 2;
//   } else if (D == 0) {
//     return 1;
//   } else D < 0;
//   return 0;
// }

// console.log(numberOfRoots(1, -6, 9));

// func 5

// function areaCircle(R) {
//   const PI = 3.14;
//   let S = PI * R ** 2;
//   return S;
// }

// console.log(areaCircle(4));

// func 6

// function sumRange(A, B) {
//   let res = (A + B) / 2;
//   let sum= A + res + B;
//   if (A > B) {
//     return 0;
//   }
//   return sum;
// }

// console.log(sumRange(8, 10));

// func 7

// function calc(A, B, S) {
//   if (S === "-") {
//     return A - B;
//   } else if (S === "*") {
//     return A * B;
//   } else if (S === "/") {
//     return A / B;
//   } else if (S === "+") {
//     return A + B;
//   } else {
//     return 0;
//   }
// }

// console.log(calc(10, 15, "*"));
// console.log(calc(7, 8, "+"));

// func 8

// function isEven(K) {
//     if (K % 2 == 0) {
//         return true;
//     } else K % 2 == 1;
//     return false;
// }

// console.log(isEven(10));

// func 9

// function sortABC(a, b, c) {
//   let min = Math.min(a, b, c);
//   let max = Math.max(a, b, c);
//   let sum = a + b + c;
//   let res = sum - min - max;
//   console.log(min + ", " + res + ", " + max);
// }
// sortABC(10, 5, 8);

// func 10

// function isPowerN(K, N) {
//     if (K <= 0 || N <= 0) {
//         return false;
//     }

//     let result = 1;
//     while (result < K) {
//         result *= N;
//     }

//     return result === K;
// }

// console.log(isPowerN(25, 5)); // true (5^2 = 25)

// func 11

// function isPrime(N) {
//   if (N <= 1) {
//     return false;
//   }

//   for (let i = 2; i <= Math.sqrt(N); i++) {
//     if (N % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }
// console.log(isPrime(7));

// func 12

// function isPrime(N) {
//   if (N <= 1) {
//     return false;
//   }

//   for (let i = 2; i <= Math.sqrt(N); i++) {
//     if (N % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }

// function numberOfPrime(N) {
//   let count = 0;

//   for (let i = 2; i <= N; i++) {
//     if (isPrime(i)) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(numberOfPrime(10));

// func 13

// function digitCount(K) {
//   return K.toString().length;
// }

// function digitNth(K, N) {
//   const count = digitCount(K);

//   if (count < N) {
//     return -1;
//   }

//   const digit = parseInt(K.toString()[N - 1], 10);
//   return digit;
// }

// console.log(digitNth(105782, 5));
// console.log(digitNth(1057, 5));

// func 14

// function inverseNumber(N) {
//     const strN = N.toString();
//     const reversedStrN = strN.split('').reverse().join('');
//     const reversedN = parseInt(reversedStrN, 10);
//     return reversedN;
// }

// console.log(inverseNumber(56814)); // 41865

// func 15

// function inverseNumber(N) {
//   const strN = N.toString();
//   const reversedStrN = strN.split("").reverse().join("");
//   const reversedN = parseInt(reversedStrN, 10);
//   return reversedN;
// }

// function isPalindrom(N) {
//   return N === inverseNumber(N);
// }

// console.log(isPalindrom(1678761));
// console.log(isPalindrom(12345));

// func 16

// function factorial(N) {
//   if (N < 0) {
//     return 1;
//   }

//   let result = 1;
//   for (let i = 1; i <= N; i++) {
//     result *= i;
//   }

//   return result;
// }

// console.log(factorial(5));
// console.log(factorial(0));
// console.log(factorial(-3));

// func 17

// function getSum3(N) {
//   let sum = 0;

//   for (let i = 1; i <= N; i++) {
//     if (i % 3 === 0) {
//       sum += i;
//     }
//   }

//   return sum;
// }

// console.log(getSum3(15));

// func 18

// function sumOddEven(N) {
//   let sumOdd = 0;
//   let sumEven = 0;

//   for (let i = 1; i <= N; i++) {
//     if (i % 2 === 0) {
//       sumEven += i;
//     } else {
//       sumOdd += i;
//     }
//   }

//   return [sumOdd, sumEven];
// }

// const result = sumOddEven(10);
// console.log(result);

// func 19

// function invertTime(H, M, S) {
//   const totalSeconds = H * 3600 + M * 60 + S;
//   return totalSeconds;
// }

// // Misol:
// console.log(invertTime(0, 6, 40));

// func 20

// function decTime(H, M, S) {
//   const totalSeconds = H * 3600 + M * 60 + S;

//   if (totalSeconds <= 0) {
//     return "00:00:00";
//   }

//   const newTotalSeconds = totalSeconds - 1;
//   const newH = Math.floor(newTotalSeconds / 3600);
//   const newM = Math.floor((newTotalSeconds % 3600) / 60);
//   const newS = newTotalSeconds % 60;

//   const formattedH = String(newH).padStart(2, "0");
//   const formattedM = String(newM).padStart(2, "0");
//   const formattedS = String(newS).padStart(2, "0");

//   return `${formattedH}:${formattedM}:${formattedS}`;
// }

// console.log(decTime(0, 6, 40));

// func 21

// function isLeapYear(Y) {
//   return (Y % 4 === 0 && Y % 100 !== 0) || Y % 400 === 0;
// }

// console.log(isLeapYear(2020));
// console.log(isLeapYear(2022));
// console.log(isLeapYear(2000));
// console.log(isLeapYear(1900));

// func 22

// function isLeapYear(Y) {
//   return (Y % 4 === 0 && Y % 100 !== 0) || Y % 400 === 0;
// }

// function monthDays(M, Y) {
//   const daysInMonth = [
//     31, // Yanvar
//     isLeapYear(Y) ? 29 : 28,
//     31, // Mart
//     30, // Aprel
//     31, // May
//     30, // Iyun
//     31, // Iyul
//     31, // Avgust
//     30, // Sentabr
//     31, // Oktabr
//     30, // Noyabr
//     31, // Dekabr
//   ];

//   return daysInMonth[M - 1];
// }

// console.log(monthDays(2, 2020));
// // console.log(monthDays(3, 2021));

// // func 23

// function monthDays(M, Y) {
//   const daysInMonth = [
//     31, // Yanvar
//     (Y % 4 === 0 && Y % 100 !== 0) || Y % 400 === 0 ? 29 : 28,
//     31, // Mart
//     30, // Aprel
//     31, // May
//     30, // Iyun
//     31, // Iyul
//     31, // Avgust
//     30, // Sentabr
//     31, // Oktabr
//     30, // Noyabr
//     31, // Dekabr
//   ];

//   return daysInMonth[M - 1];
// }

// function prevDate(D, M, Y) {
//   if (D > 1) {
//     return `${String(D - 1).padStart(2, "0")}.${String(M).padStart(
//       2,
//       "0"
//     )}.${Y}`;
//   } else {
//     const prevMonth = M === 1 ? 12 : M - 1;
//     const prevYear = M === 1 ? Y - 1 : Y;
//     const prevDay = monthDays(prevMonth, prevYear);
//     return `${String(prevDay).padStart(2, "0")}.${String(prevMonth).padStart(
//       2,
//       "0"
//     )}.${prevYear}`;
//   }
// }

// console.log(prevDate(10, 3, 2022));

// func 24

// function monthDays(M, Y) {
//   const daysInMonth = [
//     31, // Yanvar
//     (Y % 4 === 0 && Y % 100 !== 0) || Y % 400 === 0 ? 29 : 28,
//     31, // Mart
//     30, // Aprel
//     31, // May
//     30, // Iyun
//     31, // Iyul
//     31, // Avgust
//     30, // Sentabr
//     31, // Oktabr
//     30, // Noyabr
//     31, // Dekabr
//   ];

//   return daysInMonth[M - 1];
// }

// function nextDate(D, M, Y) {
//   const daysInMonthCurrent = monthDays(M, Y);

//   if (D < daysInMonthCurrent) {
//     return `${String(D + 1).padStart(2, "0")}.${String(M).padStart(
//       2,
//       "0"
//     )}.${Y}`;
//   } else {
//     const nextMonth = M === 12 ? 1 : M + 1;
//     const nextYear = M === 12 ? Y + 1 : Y;
//     return `01.${String(nextMonth).padStart(2, "0")}.${nextYear}`;
//   }
// }

// console.log(nextDate(10, 3, 2022));

// func 25

// function getDividersNumberAndSum(N) {
//   let dividersCount = 0;
//   let dividersSum = 0;

//   for (let i = 1; i <= N; i++) {
//     if (N % i === 0) {
//       dividersCount++;
//       dividersSum += i;
//     }
//   }

//   return [dividersCount, dividersSum];
// }

// console.log(getDividersNumberAndSum(12));

// // 二进制声明 Binary
// let binary = 0B010101;
// console.log(binary);

// // 八进制声明 Octal
// let octal = 0o666;
// console.log(octal);

// let a = 11/4;
// console.log(Number.isFinite(a));
// console.log(Number.isFinite('JSPang'));
// console.log(Number.isFinite(NaN));
// console.log(Number.isFinite(undefined));

// NaN
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(1));

// Number.isInteger 是否为整数
let a = 918;
console.log(Number.isInteger(a));
console.log(Number.parseInt(a));
console.log(Number.parseFloat(a));

let jspang = Math.pow(2,53) - 1;
console.log(jspang);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.isSafeInteger(jspang));
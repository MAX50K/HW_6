// 1
let number = 1
while(number <= 10) {
    console.log(number);
    number += 1
}
console.log("--------------------------------------------------");
// 2
for(let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(i);
}
console.log("---------------------------------------------------");
// 3
for (let i = 1; i <= 10; i++) {
    console.log(`7 * ${i} = ${7 * i}`);
}
console.log("------------------------------------------------------");
// 6
let n = 12;
let i = 1;
while (i <= n) {
    console.log(i);
    i += 1;
}
console.log("------------------------------------------------------");
// 7
for (let i = 1; i <= 20; i++) {
    if (i % 3 !== 0) {
        continue;
    }
    console.log(i);
}
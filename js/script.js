// 1
let number = 1
while(number <= 10) {
    console.log(number);
    number += 1
}
// 2
for(let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}
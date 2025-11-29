import { add, multiply } from "./math.js";

const result1 = add(5, 3);
const result2 = multiply(4, 7);

console.log("Sum:", result1);
console.log("Product:", result2);

document.body.innerHTML = `
  <p>5 + 3 = ${result1}</p>
  <p>4 × 7 = ${result2}</p>
`;
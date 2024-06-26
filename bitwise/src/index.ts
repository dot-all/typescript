
const binaryBase2 = (number: number): Array<number> => {
  let bits = [];
  
  while (number > 0) {
    let bit = number % 2;
    bits.push(bit);
    number = Math.floor(number / 2);
  }
  return bits.reverse();
}

let number: number = 1000;

const numberInBinary = binaryBase2(number);

console.log(`The number ${number} in binary is: ${numberInBinary}`);
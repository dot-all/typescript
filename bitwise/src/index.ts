// Base 2
export const binaryBase2 = (number: number): Array<number> => {
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

console.log(`The number ${number} in binary base 2 is: ${numberInBinary}`);


// Bitwise

export const binaryBitwise = (number: number): Array<number> => {
  let bits = [];
  
  for (let b = 31; b >= 0 ; b--) {
    let bit = (number >> b) & 1;
    bits.push(bit);
  }
  return bits;
}

let numberToBit: number = 1000;
const numberInBinaryBitwise = binaryBitwise(numberToBit);

console.log(`The number ${number} in binary bitwise is: ${numberInBinaryBitwise}`);

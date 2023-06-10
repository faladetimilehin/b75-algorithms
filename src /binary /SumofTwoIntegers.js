/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

const integerSum = function (a, b) {
  while (b !== 0) {
    const carry = a & b;
    a ^= b;
    b = carry << 1;
    if (b === 0 && carry === 0) break
  }
  return a;

  // let tb = b;
  // let res = a;

  // while (tb) {
  //     let temp = (res & tb) << 1;
  //     res = res ^ tb;
  //     tb = temp;
  // }

  // return res;
}

console.log(integerSum(1, 2))
console.log(integerSum(2, 3))
/*
You are given an odd-length array of integers, 
in which all of them are the same, except for one single number.

Complete the method which accepts such an array, 
and returns that single different number.

The input array will always be valid! (odd-length >= 3)
*/


// Solution

function stray(numbers) {
  let a = numbers.sort();

  if(a[0] != a[1]) {
    return a[0]
  }
  return a[a.length-1]
}

// or

const stray = nums => nums.reduce((a, b) => a ^ b);
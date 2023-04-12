//move 0's and 1's at one side
let arr1 = [1, 0, 0, 1, 0, 1, 0, 1, 1];
//arr=[1,1,1,1,1,0,0,0,0];

var moveZeroes = function (nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[count++] = nums[i];
    }
  }

  for (let i = count; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
};

console.log(moveZeroes(arr1));

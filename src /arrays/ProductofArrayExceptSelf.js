var productExceptSelf = function (nums) {


  //so basically if we can calculate the prefix multiplication before the element and postfix multiplication after the element 
  //and then multiply both of them we should get the product without self


  const res = []

  let multiplier = 1;

  //first calculate prefix multiplication for all elements
  for (let i = 0; i < nums.length; i++) {
    res[i] = multiplier;
    multiplier *= nums[i];
  }

  multiplier = 1;
  //now calculate postfix multiplication and also multiply with the prefix multiplication present in res array with postfix multiplication

  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] *= multiplier;
    multiplier *= nums[i];
  }

  return res;
};


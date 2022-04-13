function maximumSubArraySum(arr, k) {
    let i = 0, j = 0, maximum = 0, sum = 0;

    while (j < arr.length) {
      sum += arr[j];

      if(j - i + 1 < k){
          j++;
      }
      else if(j - i + 1 === k){
          maximum = Math.max(maximum, sum);
          sum = sum - arr[i];
          i++;
          j++;
      }
    }
    return maximum;
}

let arr = [1, 2, 3, 4, 5, 2], k = 3;
console.log(maximumSubArraySum(arr, k))
function maxSumSubarray(arr: number[], k: number): number {
    let windowSum = 0;
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }

    let maxSum = windowSum;

    for (let i = k; i < arr.length; i++) {
        windowSum = windowSum - arr[i - k] + arr[i];
        maxSum = Math.max(windowSum, maxSum);
    }
    return maxSum;
}

console.log(maxSumSubarray([1,4,2,10,23,3], 3));




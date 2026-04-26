function maxArrayElement(arr: number[]): number {
    let maxElement = arr[0];
    for (let i = 1; i <= arr.length; i++) {
        if (arr[i] > maxElement) {
            maxElement = arr[i];
        }
    }
    return maxElement
}

console.log(maxArrayElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

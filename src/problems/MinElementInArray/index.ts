function minArrayElemnt(arr: number[]): number {

    if (arr.length === 0) {
        throw new Error("Array is empty");
    }

    let minElement = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minElement) {
            minElement = arr[i];
        }
    }
    return minElement;
}
console.log(`Min Element in Array: ${minArrayElemnt([3, 4, 5, 6, 7, 8, 9, 10])}`);
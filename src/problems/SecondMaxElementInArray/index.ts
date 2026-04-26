function secondMaxArrayElement(arr: number[]): number {

    if (arr.length < 2) {
        throw new Error("Array must have at least two elements");
    }

    let maxElement = -Infinity;
    let secondMaxElement = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxElement) {
            secondMaxElement = maxElement;
            maxElement = arr[i];
        } else if (arr[i] > secondMaxElement && arr[i] !== maxElement) {
            secondMaxElement = arr[i];
        }
    }
    return secondMaxElement
}

console.log(`Second Max Element in Array: ${secondMaxArrayElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])}`);
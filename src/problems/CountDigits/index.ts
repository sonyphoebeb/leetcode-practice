function countDigits(n: number): number {
    let count = 0;

    while (n != 0) {
        count++;
        n = Math.floor(n / 10);
    }
    return count;
}

console.log(countDigits(563));
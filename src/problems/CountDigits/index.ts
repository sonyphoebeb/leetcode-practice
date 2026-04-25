function countDigits(n: number): number {
    let count = 0;

    debugger;
    while (n > 0) {
        const digit = n % 10;
        if (n % digit === 0) {
            count++;
        }
        n = Math.floor(n / 10);
    }
    return count;
}

console.log(countDigits(128));
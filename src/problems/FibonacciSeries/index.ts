function fibonacciSeries(n: number): number[] {

    let result: number[] = [];

    let a = 0;
    let b = 1;

    for (let i = 1; i <= n; i++) {
        result.push(a);
        let next = a + b;
        a = b;
        b = next;
    }
    return result;
}

console.log(fibonacciSeries(10));
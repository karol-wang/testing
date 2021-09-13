export default function Fibonacci(index) {
    const number = parseInt(index) + 1;
    const Series = [0, 1];
    let n1 = 0, n2 = 1, nextTerm = 0;

    for (let i = 1; i <= number; i++) {
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
        Series.push(nextTerm);
    }

    return Series[index];
}
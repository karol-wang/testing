export default function Fibonacci(index) {
    const number = parseInt(index);
    let n1 = 0, n2 = 1, nextTerm = 0;

    for (let i = 1; i <= number; i++) {
        n1 = n2;
        n2 = nextTerm;
        nextTerm = n1 + n2;
    }

    return nextTerm;
}
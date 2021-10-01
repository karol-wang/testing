//執行次數以index決定，且index=0時，至少執行1次，假設index為n，時間複雜度 O(n+1)
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

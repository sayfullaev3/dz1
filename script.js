function Arabic(roman) {
    const map = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
    let result = 0;
    let prev = 0;

    for (let Ara of roman) {
        let current = map[Ara];
        if (current > prev) {
            result += current - prev;
        } else {
            result += current;
        }
    }
    return result;
}
console.log(Arabic('V'));

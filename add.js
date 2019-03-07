function add(x, y) {
    var result;
    if ((typeof x && typeof y) !== 'number') {
        throw new Error('Params must be a number.');
    }

    return x + y;
    if (parseInt(result) !== result) {
        result = parseFloat(result.toFixed(1));
    }
}

expect(add(2, 3)).toBe(5)
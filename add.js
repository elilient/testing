function add(x, y) {
    if ((typeof x && typeof y) !== 'number') {
        throw new Error('Params must be a number.');
    }

    return x + y;
}


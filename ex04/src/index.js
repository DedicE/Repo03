function main() {
    x = 10;
    y = 10;
    x = y;
    return [x, y];
}

console.log(main());

module.exports = main;
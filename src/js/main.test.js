const add = require('./main');

describe('test function add()', () => {
    test('5 + 5 = 10', () => {
        expect(add(5,4)).toBe(9);
    });
    test('"hello" + 4 = udefined', () => {
        expect(add("hello",4)).toBeUndefined();
    });
    test('4 + "hello" = udefined', () => {
        expect(add(4,"hello")).toBeUndefined();
    });
});

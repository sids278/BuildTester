const { add, subtract } = require('./math');

describe('Math Functions', () => {
    test('should add two numbers correctly', () => {
        const result = add(2, 3);
        expect(result).toBe(5);
    });

    test('should subtract two numbers correctly', () => {
        const result = subtract(5, 3);
        expect(result).toBe(2);
    });
});

// math.test.js
const assert = require('assert');
const { add, subtract } = require('./math');

// Test case for the add function
const testAdd = () => {
    const result = add(2, 3);
    assert.strictEqual(result, 5, 'Addition test failed');
};

// Test case for the subtract function
const testSubtract = () => {
    const result = subtract(5, 3);
    assert.strictEqual(result, 2, 'Subtraction test failed');
};

// Run the tests
const runTests = () => {
    try {
        testAdd();
        testSubtract();
        console.log('All tests passed successfully');
    } catch (error) {
        console.error('Test failed:', error.message);
    }
};

runTests();

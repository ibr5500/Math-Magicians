import calculate from '../calculate';

describe('Tests for calculate.js', () => {
    test('Any number should become 0 when AC is pressed', () => {
        const obj = {
            total: 0,
            next: null,
            operation: null,
        };
        expect(calculate(obj, 'AC').total).toEqual(0);
    });
});

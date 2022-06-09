import calculate from '../calculate';

describe('Tests for calculate.js', () => {
    test('Any number should become 0 when AC is pressed', () => {
        expect(calculate('5', 'AC')).toBe('0');
      })
});

// calculate.total === 0
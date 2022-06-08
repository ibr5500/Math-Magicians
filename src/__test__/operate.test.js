import operate from '../components/logic/operate';

describe('Tests for operate', () => {
  test('Total of 3 adding to 2 should be 5', () => {
    expect(operate('3', '2', '+')).toBe('5');
  });

  test('Total of 3 minus 2 should be 1', () => {
    expect(operate('3', '2', '-')).toBe('1');
  });

  test('Total of 3 multiply by 2 should be 6', () => {
    expect(operate('3', '2', 'x')).toBe('6');
  });

  test('Total of 6 divied by 2 should be 3', () => {
    expect(operate('6', '2', '÷')).toBe('3');
  });

  test('Total of 5 remain to 2 should be 1', () => {
    expect(operate('5', '2', '%')).toBe('1');
  });

});
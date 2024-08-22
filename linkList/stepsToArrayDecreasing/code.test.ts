import { totalSteps } from './code';

describe('test stepsToArrayDecreasing', () => {
  it('test_normal_array', () => {
    const arr = [5, 3, 4, 4, 7, 3, 6, 11, 8, 5, 11];
    expect(totalSteps(arr)).toEqual(3);
  });
  it('test_normal_array_1', () => {
    const arr = [4, 5, 7, 7, 13];
    expect(totalSteps(arr)).toEqual(0);
  });
});

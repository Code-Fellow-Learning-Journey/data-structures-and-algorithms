import './index';

describe('mergeSort', () => {
  it('should sort an array in ascending order', () => {
    const arr = [5, 2, 4, 7, 1, 3, 2, 6];
    const expected = [1, 2, 2, 3, 4, 5, 6, 7];

    mergeSort(arr);
    expect(arr).toEqual(expected);
  });
});

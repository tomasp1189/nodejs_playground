// Generic quicksort implementation that takes compareFunction as parameter.
// Default compare function included. For objects with name (string) and ranking (number) attributes use:
//  (a, b) => {
//         if (a.ranking < b.ranking) return -1;
//         if (a.ranking > b.ranking) return 1;
//         return 0;
//       }

module.exports = (arrayToSort, compareFunction) => {
  // default compare function
  if (!compareFunction)
    compareFunction = (a, b) => {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    };

  function partition(array, left, right, pivot) {
    while (left <= right) {
      // as long as the value on the left is smaller than the pivot we keep moving the left pointer forward
      while (compareFunction(array[left], array[pivot]) === -1) {
        left++;
      }
      // as long as the value on the right is bigger than the pivot we keep moving the right pointer backward
      while (compareFunction(array[right], array[pivot]) === 1) {
        right--;
      }
      // when we reach a point where the value on the left is bigger than the pivot, the value on the right smaller
      // and the left index is still smaller than the right we swap the values.
      if (left <= right) {
        swap(array, left, right);
        left++;
        right--;
      }
    }
    // we
    return left;
  }

  function swap(array, positionA, positionB) {
    var a = array[positionA];
    array[positionA] = array[positionB];
    array[positionB] = a;
  }

  function sort(sortableArray, left, right) {
    if (sortableArray.length > 1) {
      const pivotIndex = Math.floor((left + right) / 2);
      const index = partition(sortableArray, left, right, pivotIndex);
      // there are values remaining on the left
      if (left < index - 1) sort(sortableArray, left, index - 1);
      // there are values remaining on the right
      if (index < right) sort(sortableArray, index, right);
    }
    return sortableArray;
  }

  return sort(arrayToSort, 0, arrayToSort.length - 1);
};

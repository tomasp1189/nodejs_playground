const assert = require('assert');

const calculateAverage = require('../calculate-average');

describe('Array of objects', function() {
  describe('average', function() {
    it('should return 0 for an empty array.', function() {
      const array = [];
      const average = calculateAverage(array);
      assert.deepEqual(average, 0);
    });

    it('should return the average ranking of the objects in the array', function() {
      const array = [
        { name: 'Object 2', ranking: 2 },
        { name: 'Object 1', ranking: 1 },
        { name: 'Object 4', ranking: 4 },
        { name: 'Object 6', ranking: 6 },
        { name: 'Object 5', ranking: 5 },
        { name: 'Object 7', ranking: 7 },
        { name: 'Object 3', ranking: 3 },
        { name: 'Object 8', ranking: 8 },
        { name: 'Object 9', ranking: 9 },
        { name: 'Object 10', ranking: 10 },
        { name: 'Object 11', ranking: 13 },
        { name: 'Object 12', ranking: 100 }
      ];
      const average = calculateAverage(array, (accumulator, currentValue) => {
        return accumulator + currentValue.ranking;
      });
      assert.equal(average, 14);
    });
  });
});

describe('Array of numbers', function() {
  describe('average', function() {
    it('should return the average of the numbers in the array', function() {
      const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100, 1];
      const average = calculateAverage(array);
      assert.equal(average, 13);
    });
  });
});

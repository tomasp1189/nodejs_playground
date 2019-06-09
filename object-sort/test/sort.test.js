const assert = require('assert');

const sort = require('./sort');

describe('Array of objects', function() {
  describe('sort', function() {
    it('should return the same array of objects when array is already sorted', function() {
      const sortableArray = [
        { name: 'Object 1', ranking: 1 },
        { name: 'Object 2', ranking: 2 },
        { name: 'Object 3', ranking: 3 },
        { name: 'Object 4', ranking: 4 },
        { name: 'Object 5', ranking: 5 },
        { name: 'Object 6', ranking: 6 },
        { name: 'Object 7', ranking: 7 }
      ];
      const sortedArray = sort(sortableArray, (a, b) => {
        if (a.ranking < b.ranking) return -1;
        if (a.ranking > b.ranking) return 1;
        return 0;
      });
      assert.deepEqual(sortedArray, sortableArray);
    });

    it('should return the array of objects sorted by ranking', function() {
      const sortableArray = [
        { name: 'Object 2', ranking: 2 },
        { name: 'Object 1', ranking: 1 },
        { name: 'Object 4', ranking: 4 },
        { name: 'Object 6', ranking: 6 },
        { name: 'Object 5', ranking: 5 },
        { name: 'Object 7', ranking: 7 },
        { name: 'Object 3', ranking: 3 },
        { name: 'Object 8', ranking: 8 }
      ];
      const sortedArray = sort(sortableArray, (a, b) => {
        if (a.ranking < b.ranking) return -1;
        if (a.ranking > b.ranking) return 1;
        return 0;
      });
      assert.deepEqual(sortedArray, [
        { name: 'Object 1', ranking: 1 },
        { name: 'Object 2', ranking: 2 },
        { name: 'Object 3', ranking: 3 },
        { name: 'Object 4', ranking: 4 },
        { name: 'Object 5', ranking: 5 },
        { name: 'Object 6', ranking: 6 },
        { name: 'Object 7', ranking: 7 },
        { name: 'Object 8', ranking: 8 }
      ]);
    });
  });
});

describe('Array of numbers', function() {
  describe('sort', function() {
    it('should return the same array when array is already sorted', function() {
      const sortableArray = [1, 2, 3, 4, 5, 6, 7, 8];
      const sortedArray = sort(sortableArray, (a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
      });
      assert.deepEqual(sortedArray, sortableArray);
    });

    it('should return the array sorted lowest to highest', function() {
      const sortableArray = [2, 1, 4, 6, 5, 7, 3, 8];
      const sortedArray = sort(sortableArray, (a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
      });
      assert.deepEqual(sortedArray, [1, 2, 3, 4, 5, 6, 7, 8]);
    });
  });
});

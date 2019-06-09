// Generic average calculator that takes a reducer function as parameter.
// Default number reducer function included. For objects with name (string) and ranking (number) attributes use:
// (accumulator, currentValue) => {
//   return accumulator + currentValue.ranking;
// }
module.exports = (arrayToAverage, averageReducer) => {
  if (!arrayToAverage || arrayToAverage.length === 0) return 0;

  if (!averageReducer)
    averageReducer = (accumulator, currentValue) => {
      return accumulator + currentValue;
    };

  const reducedValue = arrayToAverage.reduce(averageReducer, 0);
  const average = reducedValue / arrayToAverage.length;
  return average;
};

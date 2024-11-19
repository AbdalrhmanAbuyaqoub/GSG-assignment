//task 2:
function getSumAndAverage(numbers) {
  if (!numbers || numbers.length === 0) {
    return { avg: 0, sum: 0 };
  }
  const result = numbers.reduce(
    (accumulator, current) => {
      accumulator.sum += current;
      accumulator.count += 1;
      return accumulator;
    },
    { sum: 0, count: 0 }
  );
  const sum = result.sum;
  const avg = sum / result.count;
  return { avg, sum };
}

//example usage
const numbers = [3, 3, 3];
console.log(getSumAndAverage(numbers));

//..............................

//task 3:
function removeDuplicates(values) {
  if (!values || values.length === 0) {
    return [];
  }

  const newValues = [...new Set(values)];
  return newValues;
}

//example usage
const strings = ["apple", "banana", "apple", "orange", "banana"];
const uniqueArray = removeDuplicates(strings);
console.log(uniqueArray);

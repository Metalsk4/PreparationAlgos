const intervals = [
  [0, 5],
  [3, 4],
  [1, 2],
  [5, 9],
  [5, 7],
  [7, 9],
];

const NonOverlappingIntervals = (intervals = []) => {
  intervals = intervals.sort((a, b) => a[1] - b[1]);
  let freeTime = intervals[0][1];
  let count = 1;
  const n = intervals.length;

  for (let i = 1; i < n; i++) {
    //start time should be greater than or equal to the pervious end time/ free time
    if (intervals[i][0] >= freeTime) {
      count += 1;
      freeTime = intervals[i][1];
    }
  }

  console.log(n, count);
  return n - count;
};

console.log(NonOverlappingIntervals(intervals));

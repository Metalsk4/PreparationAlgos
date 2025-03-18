//intervals should not be overlapping,
//if it is overlapping merge the intervals to make one

//given intervals will always be in sorted order
const intervals = [
  [1, 2],
  [3, 4],
  [6, 7],
  [8, 10],
  [12, 16],
];
const newIntervals = [5, 8];

function InsertIntervals(arr, newInterval) {
  const ans = [];
  let i = 0;
  const n = arr.length;

  //get the left part
  //logic: ending of current element of the intervals is less than the
  //starting of new interval, they will come before it
  while (i < n && arr[i][1] < newInterval[0]) {
    ans.push(arr[i]);
    i += 1;
  }

  //getting the overlapping interval
  //logic: starting of current element of the intervals is less than the
  // ending of the new interval, then they are overlapping and we will modify
  // the new interval to create a new overlapping range
  while (i < n && arr[i][0] < newInterval[1]) {
    //start of new overlapping interval
    newInterval[0] = Math.min(newInterval[0], arr[i][0]);
    //ending of new overlapping interval
    newInterval[1] = Math.max(newInterval[1], arr[i][1]);
    i += 1;
  }
  ans.push(newInterval);

  //push remaining to the right
  while (i < n) {
    ans.push(arr[i]);
    i += 1;
  }

  // console.log(ans);
  return ans;
}

//TC : O(N) SC: O(N)
console.log(InsertIntervals(intervals, newIntervals));

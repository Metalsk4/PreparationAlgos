//Minimum number of platforms required for a railway

//logic brute force: find the number of intersecting trains

//logic optimised : Sort both the arrival and departure times
//keep counting the max number of trains are arriving at a single time(/time period)

//increase the count if train arrives and decrease when train departs
//and then check the maxCount by Max(currentCount, maxCount)

const Arrival = [900, 945, 955, 1100, 1500, 1800];
const Departure = [920, 1200, 1130, 1150, 1900, 2000];

const MinimimNumberOfPlatforms = (ariv = [], dep = []) => {
  //O(nlogn)*2
  ariv = ariv.sort((a, b) => a - b);
  dep = dep.sort((a, b) => a - b);
  const n = ariv.length;
  let i = (j = maxCount = count = 0);

  //O(2n) - sometime i increaments and sometimes J thats why 2n
  while (i < n) {
    if (ariv[i] <= dep[j]) {
      count += 1;
      i += 1;
    } else {
      count -= 1;
      j += 1;
    }
    // console.log(count);
    maxCount = Math.max(maxCount, count);
  }

  return maxCount;
};

//total time complexity = 2*(nlogn + n)
//total space complexity = O(1)
console.log(MinimimNumberOfPlatforms(Arrival, Departure));

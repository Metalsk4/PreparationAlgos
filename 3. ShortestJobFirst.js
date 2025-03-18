function ShortestJobFirst(arr = []) {
  //first process waiting time will be 0
  let t = 0;

  //total waiting time will be 0 in the start
  let waitingTime = 0;

  let n = arr.length;
  arr = arr.sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    waitingTime += t;
    t += arr[i];
  }

  return waitingTime / n;
}

// return average waiting time, if each of the elemenets represent
// how much time it will take to execute
// In Shortest Job first algo, shortest time taker will be executed first
const bt = [4, 3, 7, 1, 2];
console.log(ShortestJobFirst(bt));

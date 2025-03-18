const JumpGame = (arr = []) => {
  let maxReachedIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i > maxReachedIndex) return false;

    maxReachedIndex = Math.max(maxReachedIndex, i + arr[i]);

    if (maxReachedIndex >= arr.length) {
      return true;
    }
  }
  return true;
};

const arr = [2, 3, 1, 0, 4];
console.log(
  "Jump for",
  arr,
  "is: ",
  JumpGame(arr) ? "Possible" : "Not Possible"
);

const arr2 = [3, 2, 1, 0, 4];
console.log(
  "Jump for",
  arr2,
  "is: ",
  JumpGame(arr2) ? "Possible" : "Not Possible"
);

const arr3 = [1, 2, 4, 1, 1, 0, 2, 5];
console.log(
  "Jump for",
  arr3,
  "is: ",
  JumpGame(arr3) ? "Possible" : "Not Possible"
);

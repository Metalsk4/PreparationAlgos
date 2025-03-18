//logic create a range of l,r where l is start of the range and r is end
//every time in a loop l will be incremented r+1
// and r will be the farthest the jumps can reach from the range (l,r)

const MinJump = (arr = []) => {
  let l = (r = jumps = 0);
  let n = arr.length;

  while (r < n - 1) {
    let farthest = 0;
    for (i = l; i <= r; i++) {
      farthest = Math.max(farthest, i + arr[i]);
    }
    l = r + 1;
    r = farthest;
    jumps = jumps + 1;
  }

  return jumps;
};

const arr = [2, 1, 3, 4, 1, 1, 1, 2];
console.log(MinJump(arr));

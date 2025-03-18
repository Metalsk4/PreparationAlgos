//logic - assign smaller ones first, so that larger one can remain for the larger greed
// this way we can assign it to more people

const AssignCookies = (greed = [], cookies = []) => {
  greed = greed.sort((a, b) => a - b);
  cookies = cookies.sort((a, b) => a - b);

  // greed = [1,3,3,4,5]
  //cookies = [1,1,2,2,3,4]

  let gr = 0;

  for (let i = 0; i < cookies.length; i++) {
    if (greed?.[gr] && greed[gr] <= cookies[i]) {
      gr = gr + 1;
    }
  }

  return gr;
};

const greed = [1, 5, 3, 3, 4];
const cookies = [4, 2, 1, 2, 1, 3];

console.log(AssignCookies(greed, cookies));
//ans - 3

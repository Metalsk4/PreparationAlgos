const MeetingInOneRoom = (start = [], end = [], N) => {
  let data = [];
  for (let i = 0; i < N; i++) {
    data.push({
      start: start[i],
      end: end[i],
      pos: i,
    });
  }
  //sort the data in the basis of their end time
  data = data.sort((a, b) => a.end - b.end);

  const posCompleted = [data[0].pos];
  let freeTime = data[0].end;
  let count = 1;

  for (let i = 1; i < N; i++) {
    if (freeTime < data[i].start) {
      posCompleted.push(data[i].pos);
      count += 1;
      freeTime = data[i].end;
    }
  }

  return { posCompleted, count };
};

const start = [0, 3, 1, 5, 5, 8];
const end = [5, 4, 2, 9, 7, 9];

console.log(MeetingInOneRoom(start, end, 6));

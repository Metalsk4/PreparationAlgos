const Jobs = [
  { id: 1, deadline: 4, profit: 20 },
  { id: 2, deadline: 5, profit: 60 },
  { id: 3, deadline: 6, profit: 70 },
  { id: 4, deadline: 6, profit: 65 },
  { id: 5, deadline: 4, profit: 25 },
  { id: 6, deadline: 2, profit: 80 },
  { id: 7, deadline: 2, profit: 10 },
  { id: 8, deadline: 2, profit: 22 },
];

const sortedJobs = [
  { id: 6, deadline: 2, profit: 80 },
  { id: 3, deadline: 6, profit: 70 },
  { id: 4, deadline: 6, profit: 65 },
  { id: 2, deadline: 5, profit: 60 },
  { id: 5, deadline: 4, profit: 25 },
  { id: 8, deadline: 2, profit: 22 },
  { id: 1, deadline: 4, profit: 20 },
  { id: 7, deadline: 2, profit: 10 },
];

//person can do one job at a time
//maximise the profit

//logic: finish the jobs which gives more profit first

const JobSequencingProblem = (jobs = []) => {
  //sort the jobs array in decreasing order in respective of profit
  jobs = jobs.sort((a, b) => (a.profit > b.profit ? -1 : 1));

  let jobsCount = (totalProfit = 0);
  let maxDeadline = -1;
  let n = jobs.length;

  //get the max number of days the tasks can be performed
  for (let i = 0; i < n; i++) {
    maxDeadline = Math.max(maxDeadline, jobs[i].deadline);
  }

  console.log(jobs);

  const hash = new Array(maxDeadline + 1).fill(-1);

  for (let i = 0; i < n; i++) {
    //ask the interviewer when is considering the day will start Day0, Day1(id day0 logic is fine, if day1 then j>0)
    for (let j = jobs[i].deadline; j >= 0; j--) {
      if (hash[j] === -1) {
        jobsCount += 1;
        hash[j] = jobs[i].id;
        totalProfit += jobs[i].profit;
        break;
      }
    }
  }

  return { jobsCount, totalProfit };
};

console.log(JobSequencingProblem(Jobs));

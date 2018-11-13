const start = process.hrtime();
let interval;

setInterval(() => {
  interval = process.hrtime(start);
  console.log(interval);
}, 500);

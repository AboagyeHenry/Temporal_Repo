const { readFile, writeFile } = require("fs");

console.log('Start')

readFile("./Context/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./Context/first.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;

    writeFile(
      "./Context/result-sync.txt",
      `Here is the result: ${first} & ${second}`,
      { flag: "a" },
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('done with task');
      }
    );
  });
});
console.log('Start new task')

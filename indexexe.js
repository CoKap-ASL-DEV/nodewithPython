const spawn = require("child_process").spawn;

//const jsalert = require("js-alert");

let param = ["Uitaek", "Gwang"];

const process = spawn("./pysrc/dist/hello/hello.exe", param);

let result = "";

process.stdout.on("data", data => {
  const results = data.toString();
  const obj = results.split("\n");
  obj0 = JSON.parse(obj[0]);
  console.log(obj0.name);
});

process.stderr.on("data", data => {
  console.log(`stderr: ${data}`);
});

process.on("close", code => {
  console.log(`child process exited with code ${code}`);
});

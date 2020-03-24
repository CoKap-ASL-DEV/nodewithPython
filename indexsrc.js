//const app = require("express")();
const ps = require("python-shell");

let param = ["Uitaek", "Gwang"];

let options = {
  mode: "text",
  pythonPath: "C:/ProgramData/Anaconda3/python.exe",
  //pythonPath: '/usr/bin/python'
  pythonOptions: ["-u"], // get print results in real-time
  scriptPath: "./pysrc/",
  args: param
};

ps.PythonShell.run("hello.py", options, function(err, results) {
  if (err) throw err;
  console.log("finished");

  obj0 = JSON.parse(results[0]);
  obj1 = JSON.parse(results[1]);

  console.log(results);
  console.log(obj0.name);
  console.log(obj1.name);

  //let merge = results + "NOde";
  //console.log(merge);
});

//app.listen(4000);
//http://localhost:4000/name?firstname=Mike&lastname=Will
// app.get("/name", (req, res) => {
//   const firstName = req.query["firstname"],
//     lastName = req.query["lastname"];

//   if (!firstName || !lastName) {
//     res.status(401).send("missing-fields");
//   }

//   const process = spawn("python", ["./hello.py", firstName, lastName]);

//   let result = "";

//   process.stdout.on("data", data => {
//     result += data.toString();
//   });

//   process.on("close", code => {
//     res.send(result);
//   });
// });

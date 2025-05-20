import fs from "fs";

// fs.writeFile("hey.txt", "Hello This is the new test file", (err) => {
//   if (err) console.error(err);
//   else console.log("File Created Successfully");
// });
fs.appendFile("hey.txt", "I am in continuation with this file", (err) => {
  if (err) console.error(err);
  else console.log("File Appneded Successfully");
});

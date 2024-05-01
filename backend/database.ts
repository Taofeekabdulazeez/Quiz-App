import fs from "fs";

export const findAll = () => {
  let output;

  fs.readFile("./users.json", "utf-8", (error, data) => {
    // console.log(data);
    output = JSON.parse(data);
  });

  return output;
};

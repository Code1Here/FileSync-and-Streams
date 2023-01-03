const fs = require("fs");
const data = ["name,cost"];
for (let i = 0; i < 1e8; i++) {
  data.push(`${i},1`);
}

fs.writeFileSync("test.csv", data.join("\n"));

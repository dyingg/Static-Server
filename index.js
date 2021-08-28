const express = require("express");
const app = express();
const path = require("path");
const chalk = require("chalk");
const fs = require("fs");
const _ = require("lodash");

app.use(express.static("src/public"));

const src = fs.readdirSync("./src");

//Check for an entry point (must be index.html for now)

if (!src.includes("index.html")) {
  console.log(chalk.red("Error: Could not find a valid entry point."));
  process.exit(-1);
} else {
  console.log(
    chalk.green("Configuring and using /src/index.html as the entry point")
  );
}

//Check the rest of the files
if (!src.every((obj) => /.*\.html$|public/.test(obj))) {
  console.log(
    chalk.red(
      "Error: Please make sure only the entry point(index.html), and other .html files are present in the root.\nWhile all other static content images/css/js etc are inside the public folder"
    )
  );
  process.exit(-1);
}

const customlyHandled = ["index.html", "public"];
const uniquePages = _.difference(src, customlyHandled);

for (let page of uniquePages) {
  let { link } = page.match(/(?<link>.+)\.html/).groups;
  app.get(`/${link}`, (req, res) => {
    res.sendFile(path.join(__dirname, `/src/${page}`));
  });
}

//For our convinience it is better for the entry point to become the 404 page.
//*Future - Make a seperate way to configure the 404 file.
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "/src/index.html"));
});

app.listen(80, () => {
  console.log(chalk.green("Sucessfully started the web server!"));
});

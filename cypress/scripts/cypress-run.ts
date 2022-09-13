const cypress = require("cypress");
const fse = require("fs-extra");

const options = {
  reportDir: "test-report",
  files: ["test-report/*.json"],
  showPending: false,
};

async function runTests() {
  await fse.remove("test-report");
  const run2 = await cypress.run({
    headless: true,
  });
  const totalFailed = run2["totalFailed"];
  process.exit(totalFailed);
}

runTests();

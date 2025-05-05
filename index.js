const { Builder, Browser, By, Key, until } = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  try {
    await driver.get('https://www.siddardha.me');

    console.log("Browser will stay open. Press Ctrl+C to quit.");
    process.stdin.resume(); // keeps the script running
  } catch (error) {
    console.error("Error:", error);
  }
})();

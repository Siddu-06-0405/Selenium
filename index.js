const { Builder, Browser, By, Key, until } = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  try {
    await driver.get('https://www.google.com/ncr');
    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    await driver.wait(until.titleContains('webdriver'), 10000);

    console.log("Browser will stay open. Press Ctrl+C to quit.");
    process.stdin.resume(); // keeps the script running
  } catch (error) {
    console.error("Error:", error);
  }
})();

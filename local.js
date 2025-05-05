const { Builder, By, until } = require('selenium-webdriver');

async function loginTest() {
  let driver = await new Builder().forBrowser('firefox').build();
  await driver.get('http://localhost:5173/login');

  const inputs = await driver.findElements(By.css('input'));
  for (let i = 0; i < inputs.length; i++) {
    const placeholder = await inputs[i].getAttribute('placeholder');
    console.log(`Input ${i + 1}:`, placeholder);
  }



  // Find inputs using placeholder
  const emailInput = await driver.findElement(By.css('input[placeholder="Enter username"]'));
  const passwordInput = await driver.findElement(By.css('input[placeholder="Enter Password"]'));

  await emailInput.sendKeys('aizen');
  await passwordInput.sendKeys('aizen@123');

  // // Click login button
  const loginButton = await driver.findElement(By.xpath("//button[text()='Login']"));
  await loginButton.click();
  await driver.sleep(3000);
  const logoutButton = await driver.findElement(By.xpath("//span[text()='Logout']"));

  await logoutButton.click();

  // // Wait for navigation or dashboard element
  await driver.wait(until.urlContains('/home'), 10000);
  console.log('Login success!');
  process.stdin.resume();
}

loginTest();

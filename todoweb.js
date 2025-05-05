const {Builder, By, Key} = require("selenium-webdriver");

async function example(){
    //launch the browser
    let driver = await new Builder().forBrowser("firefox").build();

    //navigate to our application
    await driver.get("https://lambdatest.github.io/sample-todo-app/");

    //add a todo
    

    for(let i=0;i<10;i++){
        setTimeout(()=>{driver.findElement(By.id("sampletodotext")).sendKeys("save soul society",Key.RETURN)},3000);
    }

    //close the browser
    // await driver.quit();
    process.stdin.resume();
}

example();
import React from "react";
import { Builder, By, Key, until}  from 'selenium-webdriver'

const sele = () => ( async function example() {
  let driver = await new Builder().forBrowser('firefox').build();
  try {
    await driver.get('http://www.google.com/ncr');
    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  } finally {
    await driver.quit();
  }
})();


export default props => (
  <div>    
    <h1>Outra página</h1>
    { this.sele }
  </div>
);

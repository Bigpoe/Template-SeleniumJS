var webdriver = require('selenium-webdriver'),
    basePage = require('./BasePage'),
    properties = require ('../Properties'),
    By = webdriver.By,
    until = webdriver.until,
    Key = webdriver.Key;

    class Home extends basePage{

      getTitle(){
        return driver.getTitle();
      }

      clickLogo(){
        const logo = driver.wait(until.elementLocated(By.id('header_logo')),3000);
        logo.click();
      }
      
      search(){
      // driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
      // driver.wait(until.titleIs('webdriver - Buscar con Google'), 1000);
      let searchBox = driver.findElement(By.name('q'));
      searchBox.sendKeys('webdriver', Key.RETURN);  
      driver.wait(until.titleIs('webdriver - Buscar con Google'), 2000);
      }
      

    }
module.exports = new Home();

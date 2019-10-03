package Com.OpenBrowser;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;

public class Utils extends BasePage {


    public void click_Method(By by){
        driver.findElement(by).click();
    }

    public void sendKeyMethod(By by, String typeText, String text){
        driver.findElement(by).sendKeys(typeText);
        driver.findElement(by).sendKeys(text);
        driver.findElement(by).sendKeys(Keys.ENTER);
    }


}

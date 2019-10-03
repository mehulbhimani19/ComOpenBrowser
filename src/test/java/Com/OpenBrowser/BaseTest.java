package Com.OpenBrowser;

import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;

import java.util.concurrent.TimeUnit;

public class BaseTest extends BasePage {

    LordProp lordProp = new LordProp();
    BrowserSelector browserSelector = new BrowserSelector();


    @BeforeMethod
    public void openBrowser() {

        browserSelector.browserSelection();
        driver.get(lordProp.getProperty("url"));
        driver.manage().window().maximize();
        driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
    }

    @AfterMethod
    public void closeBrowser() {
      //  driver.quit();
    }


}

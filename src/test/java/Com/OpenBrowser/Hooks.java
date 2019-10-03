package Com.OpenBrowser;

import cucumber.api.java.After;
import cucumber.api.java.Before;

import java.sql.Time;
import java.util.concurrent.TimeUnit;

public class Hooks extends BasePage {

    LordProp lordProp = new LordProp();
    BrowserSelector browserSelector = new BrowserSelector();

    @Before
    public void openBrowser() {

        browserSelector.browserSelection();

        driver.get(lordProp.getProperty("url"));
        driver.manage().window().maximize();
        driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
    }

    @After
    public void closeBrowser() {
        driver.quit();
    }
}

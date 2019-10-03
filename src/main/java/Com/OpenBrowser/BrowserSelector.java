package Com.OpenBrowser;

import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class BrowserSelector extends Utils {

    LordProp lordProp = new LordProp();

    public void browserSelection() {

        String browser = lordProp.getProperty("browser");

        System.out.println(lordProp.getProperty("browser"));

        if (browser.equalsIgnoreCase("chrome")) {
            System.setProperty("webdriver.chrome.driver","src\\test\\Resources\\Browsers\\chromedriver.exe");
            driver = new ChromeDriver();
        } else if (browser.equalsIgnoreCase("firefox")) {
            System.setProperty("webdriver.gecko.driver","src\\test\\Resources\\Browsers\\geckodriver.exe");
            driver = new FirefoxDriver();
        } else {
            System.out.println("its not valid browser");
        }
    }
}

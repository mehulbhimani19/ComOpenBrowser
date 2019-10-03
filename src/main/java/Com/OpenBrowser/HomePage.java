package Com.OpenBrowser;

import org.openqa.selenium.By;

public class HomePage extends Utils {

    private static By _Google_SearchBox = By.xpath("//input[@jsaction='paste:puy29d']");

    public void search_On_HomepageIn_SearchBox_Method(String text, String type){
        sendKeyMethod(_Google_SearchBox,text,type);
    }


}

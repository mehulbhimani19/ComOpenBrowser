package Com.OpenBrowser;

import org.testng.annotations.Test;

public class TestSuites extends BaseTest{

    LordProp lordProp = new LordProp();
    HomePage homePage = new HomePage();

    @Test
    public void ToVerifyUserAbleToSearchFromSearchBOxOnHomePage(){
        homePage.search_On_HomepageIn_SearchBox_Method("What is software testing?"," software");


    }



}


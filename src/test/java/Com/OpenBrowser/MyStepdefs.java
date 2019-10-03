package Com.OpenBrowser;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MyStepdefs {

    LordProp lordProp = new LordProp();
    HomePage homePage = new HomePage();

    @Given("^User is on homepage$")
    public void userIsOnHomepage() {
    }

    @When("^User input What is Software Testing$")
    public void userInputWhatIsSoftwareTesting() {
        homePage.search_On_HomepageIn_SearchBox_Method("What is software testing?"," software");
    }

    @Then("^Search results should be definitions of Software testing$")
    public void searchResultsShouldBeDefinitionsOfSoftwareTesting() {

    }

}

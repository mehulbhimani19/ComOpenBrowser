package Com.OpenBrowser;

import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class outlineStepDef {
    HomePage homePage = new HomePage();

    @When("^User input Applicants \"([^\"]*)\", \"([^\"]*)\"$")
    public void userInputApplicants(String arg0, String arg1) {
    homePage.search_On_HomepageIn_SearchBox_Method(arg0, arg1);

    }

    @Then("^user should be able to see the profile detail of the searched name$")
    public void userShouldBeAbleToSeeTheProfileDetailOfTheSearchedName() {
    }
}

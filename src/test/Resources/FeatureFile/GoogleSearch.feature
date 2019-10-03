Feature: Google search result
  As a user
  I want to search on google
  so that I have information


  @Test
  Scenario: to verify user able to search anything from google's homepage
    Given User is on homepage
    When User input What is Software Testing
    Then Search results should be definitions of Software testing

  @Regression
  Scenario Outline: to verify that user able to search 5 different applicants name so user can view profile detail of them
    When User input Applicants "<FirstName> ", "<LastName>"
    Then user should be able to see the profile detail of the searched name
    Examples:
    | FirstName | LastName  |
    | Vijay     | Makrubiya |
    | Parul     | Monpara   |
    | Rushita   | Limbasiya |
    | Prakash   | Narola    |
    | VB        | Makrubiya |
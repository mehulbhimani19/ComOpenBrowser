$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/Resources/FeatureFile/GoogleSearch.feature");
formatter.feature({
  "line": 1,
  "name": "Google search result",
  "description": "As a user\r\nI want to search on google\r\nso that I have information",
  "id": "google-search-result",
  "keyword": "Feature"
});
formatter.before({
  "duration": 25849130845,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "to verify user able to search anything from google\u0027s homepage",
  "description": "",
  "id": "google-search-result;to-verify-user-able-to-search-anything-from-google\u0027s-homepage",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User input What is Software Testing",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Search results should be definitions of Software testing",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userIsOnHomepage()"
});
formatter.result({
  "duration": 3013957174,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userInputWhatIsSoftwareTesting()"
});
formatter.result({
  "duration": 8253592024,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.searchResultsShouldBeDefinitionsOfSoftwareTesting()"
});
formatter.result({
  "duration": 21711,
  "status": "passed"
});
formatter.after({
  "duration": 790297006,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "to verify that user able to search 5 different applicants name so user can view profile detail of them",
  "description": "",
  "id": "google-search-result;to-verify-that-user-able-to-search-5-different-applicants-name-so-user-can-view-profile-detail-of-them",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User input Applicants \"\u003cFirstName\u003e \", \"\u003cLastName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user should be able to see the profile detail of the searched name",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "google-search-result;to-verify-that-user-able-to-search-5-different-applicants-name-so-user-can-view-profile-detail-of-them;",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName"
      ],
      "line": 18,
      "id": "google-search-result;to-verify-that-user-able-to-search-5-different-applicants-name-so-user-can-view-profile-detail-of-them;;1"
    },
    {
      "cells": [
        "Vijay",
        "Makrubiya"
      ],
      "line": 19,
      "id": "google-search-result;to-verify-that-user-able-to-search-5-different-applicants-name-so-user-can-view-profile-detail-of-them;;2"
    },
    {
      "cells": [
        "Parul",
        "Monpara"
      ],
      "line": 20,
      "id": "google-search-result;to-verify-that-user-able-to-search-5-different-applicants-name-so-user-can-view-profile-detail-of-them;;3"
    },
    {
      "cells": [
        "Rushita",
        "Limbasiya"
      ],
      "line": 21,
      "id": "google-search-result;to-verify-that-user-able-to-search-5-different-applicants-name-so-user-can-view-profile-detail-of-them;;4"
    },
    {
      "cells": [
        "Prakash",
        "Narola"
      ],
      "line": 22,
      "id": "google-search-result;to-verify-that-user-able-to-search-5-different-applicants-name-so-user-can-view-profile-detail-of-them;;5"
    },
    {
      "cells": [
        "VB",
        "Makrubiya"
      ],
      "line": 23,
      "id": "google-search-result;to-verify-that-user-able-to-search-5-different-applicants-name-so-user-can-view-profile-detail-of-them;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10117484124,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "to verify that user able to search 5 different applicants name so user can view profile detail of them",
  "description": "",
  "id": "google-search-result;to-verify-that-user-able-to-search-5-different-applicants-name-so-user-can-view-profile-detail-of-them;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User input Applicants \"Vijay \", \"Makrubiya\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user should be able to see the profile detail of the searched name",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Vijay ",
      "offset": 23
    },
    {
      "val": "Makrubiya",
      "offset": 33
    }
  ],
  "location": "outlineStepDef.userInputApplicants(String,String)"
});
formatter.result({
  "duration": 7269239863,
  "status": "passed"
});
formatter.match({
  "location": "outlineStepDef.userShouldBeAbleToSeeTheProfileDetailOfTheSearchedName()"
});
formatter.result({
  "duration": 35921,
  "status": "passed"
});
formatter.after({
  "duration": 712328599,
  "status": "passed"
});
formatter.before({
  "duration": 27727596306,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "to verify that user able to search 5 different applicants name so user can view profile detail of them",
  "description": "",
  "id": "google-search-result;to-verify-that-user-able-to-search-5-different-applicants-name-so-user-can-view-profile-detail-of-them;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User input Applicants \"Parul \", \"Monpara\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user should be able to see the profile detail of the searched name",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Parul ",
      "offset": 23
    },
    {
      "val": "Monpara",
      "offset": 33
    }
  ],
  "location": "outlineStepDef.userInputApplicants(String,String)"
});
formatter.result({
  "duration": 21101297072,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate an element using xpath\u003d//input[@jsaction\u003d\u0027paste:puy29d\u0027]\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-CD1F6OR\u0027, ip: \u002710.39.1.6\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:327)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat Com.OpenBrowser.Utils.sendKeyMethod(Utils.java:14)\r\n\tat Com.OpenBrowser.HomePage.search_On_HomepageIn_SearchBox_Method(HomePage.java:10)\r\n\tat Com.OpenBrowser.outlineStepDef.userInputApplicants(outlineStepDef.java:12)\r\n\tat ✽.When User input Applicants \"Parul \", \"Monpara\"(src/test/Resources/FeatureFile/GoogleSearch.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "outlineStepDef.userShouldBeAbleToSeeTheProfileDetailOfTheSearchedName()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1122039805,
  "status": "passed"
});
formatter.before({
  "duration": 11074365230,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "to verify that user able to search 5 different applicants name so user can view profile detail of them",
  "description": "",
  "id": "google-search-result;to-verify-that-user-able-to-search-5-different-applicants-name-so-user-can-view-profile-detail-of-them;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User input Applicants \"Rushita \", \"Limbasiya\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user should be able to see the profile detail of the searched name",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Rushita ",
      "offset": 23
    },
    {
      "val": "Limbasiya",
      "offset": 35
    }
  ],
  "location": "outlineStepDef.userInputApplicants(String,String)"
});
formatter.result({
  "duration": 5254859925,
  "status": "passed"
});
formatter.match({
  "location": "outlineStepDef.userShouldBeAbleToSeeTheProfileDetailOfTheSearchedName()"
});
formatter.result({
  "duration": 31184,
  "status": "passed"
});
formatter.after({
  "duration": 1057930677,
  "status": "passed"
});
formatter.before({
  "duration": 19274973049,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "to verify that user able to search 5 different applicants name so user can view profile detail of them",
  "description": "",
  "id": "google-search-result;to-verify-that-user-able-to-search-5-different-applicants-name-so-user-can-view-profile-detail-of-them;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User input Applicants \"Prakash \", \"Narola\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user should be able to see the profile detail of the searched name",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Prakash ",
      "offset": 23
    },
    {
      "val": "Narola",
      "offset": 35
    }
  ],
  "location": "outlineStepDef.userInputApplicants(String,String)"
});
formatter.result({
  "duration": 4542724748,
  "status": "passed"
});
formatter.match({
  "location": "outlineStepDef.userShouldBeAbleToSeeTheProfileDetailOfTheSearchedName()"
});
formatter.result({
  "duration": 28421,
  "status": "passed"
});
formatter.after({
  "duration": 762519633,
  "status": "passed"
});
formatter.before({
  "duration": 9756282761,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "to verify that user able to search 5 different applicants name so user can view profile detail of them",
  "description": "",
  "id": "google-search-result;to-verify-that-user-able-to-search-5-different-applicants-name-so-user-can-view-profile-detail-of-them;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User input Applicants \"VB \", \"Makrubiya\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user should be able to see the profile detail of the searched name",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "VB ",
      "offset": 23
    },
    {
      "val": "Makrubiya",
      "offset": 30
    }
  ],
  "location": "outlineStepDef.userInputApplicants(String,String)"
});
formatter.result({
  "duration": 7034240035,
  "status": "passed"
});
formatter.match({
  "location": "outlineStepDef.userShouldBeAbleToSeeTheProfileDetailOfTheSearchedName()"
});
formatter.result({
  "duration": 31974,
  "status": "passed"
});
formatter.after({
  "duration": 755657890,
  "status": "passed"
});
});
/*
*********************************************************************************
** Example of how a .feature file would look like if using the Cucumber plugin **
*********************************************************************************

Feature: update item

    As a user of the TAT application
    I neeed to update items informations
    So that I can keep them up-to-date

    Scenario: go to the update items form

        given I visit the relative URL of the first item in the home page
        when I click the update button
        then I see a pre-filled form to update the items data
*/

/*
****************************************************************
** Example of a .spec file using the keywords given/when/then **
****************************************************************

describe("given I visit the relative URL of the first item in the home page", () => {
    describe("when I click the update button", () => {
        it("then I see a pre-filled form to update the items data", () => {});
    });
});
*/

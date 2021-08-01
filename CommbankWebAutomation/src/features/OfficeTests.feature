Feature: Commbank -- Run Office BattleField Tests

    Background: Create a Covid-19 Super Hero
        Given I Navigate to Covid19 Game Application
        Then I enter Warrior Name
            And I click Create warrior button
        Then I choose go to office battle field

    Scenario: Answer the Questions and check final score
        When I click Start button in office battle page
        Then I answer office battle Question 1
            And I verify office score

    Scenario: Answer the Question incorrectly and try again
        When I click Start button in office battle page
        Then I answer office battle Question 1 incorrectly and try again
        Then I answer office battle Question 1
        Then I verify office score

    Scenario: Try again the Question after timeout
        When I click Start button in office battle page
        Then I wait without answering question for timeout and try again
        Then I answer office battle Question 1
        Then I verify office score

    Scenario: Return to Home page after timeout
        When I click Start button in office battle page
        Then I wait without answering question for timeout and return to Home
        Then I Verify navigate to BattleField Page

    # #This test will fail as there are no questions in Restaurant page
    Scenario: Answer the Questions and try next battle
        When I click Start button in office battle page
        Then I answer office battle Question 1
            And I try next battle from office page
        When I click Start button in take bus battle page
        Then I answer Bus battle Question 1
            And I try next battle


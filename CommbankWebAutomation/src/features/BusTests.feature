Feature: Commbank -- Run Take the Bus BattleField Tests

    Background: Create a Covid-19 Super Hero
        Given I Navigate to Covid19 Game Application
        Then I enter Warrior Name
            And I click Create warrior button
        Then I choose take the bus battle field

    Scenario: Answer the Questions and check final score
        When I click Start button in take bus battle page
        Then I answer Bus battle Question 1
        Then I verify score

    Scenario: Answer the Question incorrectly and try again
        When I click Start button in take bus battle page
        Then I answer Bus battle Question 1 incorrectly and Try Again
            And  I answer Bus battle Question 1
        Then I verify score

    Scenario: Try again the Question after timeout
        When I click Start button in take bus battle page
        Then I wait without answering bus question for timeout and try again
            And  I answer Bus battle Question 1
        Then I verify score

    Scenario: Return to Home page after timeout
        When I click Start button in take bus battle page
        Then I wait without answering bus question for timeout and return to Home
        Then I Verify navigate to BattleField Page

    #This test will fail as there are no questions in Restaurant page
    Scenario: Answer the Questions and try next battle
        When I click Start button in take bus battle page
        Then I answer Bus battle Question 1
            And  I try next battle


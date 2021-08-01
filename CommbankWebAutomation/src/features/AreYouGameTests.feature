Feature: Commbank -- Run Are you Game? BattleField Tests

    Background: Create a Covid-19 Super Hero
        Given I Navigate to Covid19 Game Application
        Then I enter Warrior Name
            And I click Create warrior button
        Then I choose Are You Game battle field

    Scenario: Answer the Questions when you are at different places
        When I click Start button
        Then I answer Bus Question
            And I answer Office Question
            And I answer Restaurant Question
        Then I check the leaderboard

    Scenario: Answer the public place question incorrectly
        When I click Start button
        Then I answer Bus Question incorrectly
        Then I Verify navigate to Home Page

    Scenario: Answer the office question incorrectly
        When I click Start button
        Then I answer Bus Question
            And  I answer Office Question incorrectly
        Then I Verify navigate to Home Page

    Scenario: Answer the restaurant question incorrectly
        When I click Start button
        Then I answer Bus Question
            And I answer Office Question
            And I answer Restaurant Question incorrectly
        Then I Verify navigate to Home Page

    Scenario: Return to Home Page after timeout
        When I click Start button
        Then I wait without answering first question and try again
        Then I Verify navigate to Home Page
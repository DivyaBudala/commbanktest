Feature: Commbank -- Create Warrior(Super Hero) to fight Covid-19(Super Villain)

    Scenario: Create a Covid-19 Super Hero
        Given I Navigate to Covid19 Game Application
        Then I enter Warrior Name
            And I click Create warrior button
        Then I Verify warrior is created successfully

    Scenario: Warrior Name Can't be more than 10 Characters
        Given I Navigate to Covid19 Game Application
        Then I enter Warrior Name
        Then I verify information message
        Then I enter long Warrior Name
            And I verify length of warrior name is 10 characters


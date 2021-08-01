import { assert } from "chai";
import { binding, given, then } from "cucumber-tsflow/dist";
import FrameworkHelpers from '../helpers/FrameworkHelpers';
import BattleFieldPage from '../pages/Covid19 Game/BattleFieldPage';
import HomePage from '../pages/Covid19 Game/HomePage';

@binding()
export class CreateWarrior {
    //fh: frameworkhelpers = new frameworkhelpers();

    @given(/^I Navigate to Covid19 Game Application$/)
    public NavigateToApplication() {
        HomePage.NavigateToHomePage(FrameworkHelpers.ExtractJsonData("HomePage", "ApplicationURL"));
    }

    @then(/^I enter Warrior Name$/)
    public EnterWarriorName() {
        HomePage.warriorName.clearValue();
        HomePage.warriorName.setValue(FrameworkHelpers.ExtractJsonData("CreateWarrior", "WarriorName"));
        browser.pause(5000);
    }
    @then(/^I enter long Warrior Name$/)
    public EnterLongWarriorName() {
        HomePage.warriorName.clearValue();
        HomePage.warriorName.setValue(FrameworkHelpers.ExtractJsonData("CreateWarrior", "LongWarriorName"));
        browser.pause(5000);
    }
    @then(/^I click Create warrior button$/)
    public ClickCreateWarrior() {
        HomePage.createWarrior.click();
        browser.pause(2000);
        HomePage.startJourney.click();
        browser.pause(5000);
    }
    @then(/^I Verify warrior is created successfully$/)
    public VerifyWarriorCreated() {
        BattleFieldPage.pageTitle.isDisplayed();
        browser.pause(5000);
    }
    @then(/^I verify information message$/)
    public VerifyWarriorNameMessage() {
        var nameText = HomePage.nameLengthPopup.getText();
        assert.equal(nameText, FrameworkHelpers.ExtractJsonData("CreateWarrior", "WarriorNameLengthMessage"));
        browser.pause(2000);
    }
    @then(/^I verify length of warrior name is 10 characters$/)
    public VerifyWarriorNameLength() {
        var currentName = HomePage.warriorName.getValue();
        assert.isTrue(currentName.length == 10);
        browser.pause(2000);
    }
}



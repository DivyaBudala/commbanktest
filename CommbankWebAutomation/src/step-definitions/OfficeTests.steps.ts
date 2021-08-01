import { assert } from "chai";
import { binding, then } from "cucumber-tsflow/dist";
import FrameworkHelpers from '../helpers/FrameworkHelpers';
import QuizHelper from '../helpers/QuizHelper';
import BattleFieldPage from '../pages/Covid19 Game/BattleFieldPage';
import Leaderboard from '../pages/Covid19 Game/LeaderboardPage';
import OfficeBattlePage from '../pages/Covid19 Game/OfficeBattlePage';

@binding()
export class OfficeTests {
    @then(/^I choose go to office battle field$/)
    public ChooseOfficeBattleField() {
        BattleFieldPage.Office.click();
        browser.pause(1000);
    }
    @then(/^I click Start button in office battle page$/)
    public StartOfficeBattle() {
        OfficeBattlePage.StartBattle.click();
        browser.pause(2000);
    }
    @then(/^I answer office battle Question 1$/)
    public AnswerOfficeBattleQuestion() {
        QuizHelper.AnswerAQuestion(OfficeBattlePage.Question.getText());
        this.VerifyQuestionResult(true);
        browser.pause(2000);
    }
    @then(/^I verify office score$/)
    public VerifyOfficeScore() {
        OfficeBattlePage.CheckScoreButton.click();
        var score = Leaderboard.GetScore(FrameworkHelpers.ExtractJsonData("CreateWarrior", "WarriorName"));
        assert.equal(score, FrameworkHelpers.ExtractJsonData("Office", "ExpectedScore"));
    }
    @then(/^I answer office battle Question 1 incorrectly and try again$/)
    public AnswerOfficeBattleQuestionIncorrect() {
        QuizHelper.AnswerAQuestion(OfficeBattlePage.Question.getText(), false);
        this.VerifyQuestionResult(false);
        OfficeBattlePage.TryAgainButton.click();
        browser.pause(2000);
    }
    @then(/^I try next battle from office page$/)
    public TryNextBattle() {
        OfficeBattlePage.TryNextBattleButton.click();
        browser.pause(2000);
    }
    @then(/^I wait without answering question for timeout and try again$/)
    public WaitForTimeoutAndTryAgain() {
        browser.pause(25000);
        OfficeBattlePage.TimeUpTryAgain.click();
        browser.pause(2000);
    }
    @then(/^I wait without answering question for timeout and return to Home$/)
    public WaitForTimeoutAndReturnHome() {
        browser.pause(25000);
        OfficeBattlePage.TimeUpReturnHome.click();
        browser.pause(2000);
    }
    @then(/^I Verify navigate to BattleField Page$/)
    public VerifyReturnHomeAfterTimeout() {
        assert.isTrue(BattleFieldPage.pageTitle.getText().includes("Choose your battle field"));
    }
    public VerifyQuestionResult(expectedResult: boolean) {
        if (expectedResult == false) {
            //Assert the question result
            assert.equal(OfficeBattlePage.QuestionInCorrectResult.getText(), FrameworkHelpers.ExtractJsonData("Office", "QuestionInCorrectResult"))
        }
        else {
            //Assert the question result
            assert.equal(OfficeBattlePage.QuestionCorrectResult.getText(), FrameworkHelpers.ExtractJsonData("Office", "QuestionCorrectResult"))
        }

    }
}

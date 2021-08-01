import { assert } from "chai";
import { binding, then, when } from "cucumber-tsflow/dist";
import FrameworkHelpers from '../helpers/FrameworkHelpers';
import QuizHelper from '../helpers/QuizHelper';
import BattleFieldPage from '../pages/Covid19 Game/BattleFieldPage';
import Leaderboard from '../pages/Covid19 Game/LeaderboardPage';
import RestaurantPage from '../pages/Covid19 Game/RestaurantPage';
import TakeBusBattlePage from '../pages/Covid19 Game/TakeBusBattlePage';

@binding()
export class BusTests {
    @then(/^I choose take the bus battle field$/)
    public ChooseTakeBusBattleField() {
        BattleFieldPage.TakeBus.click();
        browser.pause(1000);
    }
    @when(/^I click Start button in take bus battle page$/)
    public StartTakeBusBattle() {
        TakeBusBattlePage.StartBattle.click();
        browser.pause(2000);
    }
    @then(/^I answer Bus battle Question 1$/)
    public AnswerBusBattleQuestion() {
        QuizHelper.AnswerAQuestion(TakeBusBattlePage.Question.getText());
        this.VerifyQuestionResult(true);
        browser.pause(2000);
    }
    @then(/^I answer Bus battle Question 1 incorrectly and Try Again$/)
    public AnswerBusBattleQuestionIncorrect() {
        QuizHelper.AnswerAQuestion(TakeBusBattlePage.Question.getText(), false);
        this.VerifyQuestionResult(false);
        TakeBusBattlePage.TryAgainButton.click();
        browser.pause(2000);
    }
    @then(/^I verify score$/)
    public VerifyScore() {
        TakeBusBattlePage.CheckScoreButton.click();
        var score = Leaderboard.GetScore(FrameworkHelpers.ExtractJsonData("CreateWarrior", "WarriorName"));
        assert.equal(score, FrameworkHelpers.ExtractJsonData("TakeBus", "ExpectedScore"));
    }
    @then(/^I try next battle$/)
    public TryNextBattle() {
        TakeBusBattlePage.TryNextBattleButton.click();
        browser.pause(3000);

        RestaurantPage.StartBattle.click();
        browser.pause(2000);

        QuizHelper.AnswerAQuestion(RestaurantPage.Question.getText());
    }
    @then(/^I wait without answering bus question for timeout and try again$/)
    public WaitForTimeoutAndTryBusQuestionAgain() {
        browser.pause(25000);
        TakeBusBattlePage.TimeUpTryAgain.click();
        browser.pause(2000);
    }
    @then(/^I wait without answering bus question for timeout and return to Home$/)
    public WaitForTimeoutAndReturnHomeFromBusBattle() {
        browser.pause(25000);
        TakeBusBattlePage.TimeUpReturnHome.click();
        browser.pause(2000);
    }
    public VerifyQuestionResult(expectedResult: boolean) {
        if (expectedResult == false) {
            //Assert the question result
            assert.equal(TakeBusBattlePage.QuestionInCorrectResult.getText(), FrameworkHelpers.ExtractJsonData("TakeBus", "QuestionInCorrectResult"))
        }
        else {
            //Assert the question result
            assert.equal(TakeBusBattlePage.QuestionCorrectResult.getText(), FrameworkHelpers.ExtractJsonData("TakeBus", "QuestionCorrectResult"))
        }

    }


}
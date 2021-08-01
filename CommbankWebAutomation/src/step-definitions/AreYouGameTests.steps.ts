import { assert } from "chai";
import { binding, then, when } from "cucumber-tsflow/dist";
import HomePage from "src/pages/Covid19 Game/HomePage";
import FrameworkHelpers from '../helpers/FrameworkHelpers';
import QuizHelper from '../helpers/QuizHelper';
import AreYouGameBattlePage from '../pages/Covid19 Game/AreYouGameBattlePage';
import BattleFieldPage from '../pages/Covid19 Game/BattleFieldPage';
import Leaderboard from '../pages/Covid19 Game/LeaderboardPage';


@binding()
export class AreYouGameTests {
    @then(/^I choose Are You Game battle field$/)
    public ChooseAreYouGameBattleField() {
        BattleFieldPage.AreYouGame.click();
        browser.pause(1000);
    }
    @when(/^I click Start button$/)
    public StartAreYouGameBattle() {
        AreYouGameBattlePage.StartBattle.click();
        browser.pause(2000);
    }
    @then(/^I answer Bus Question$/)
    public AnswerPublicPlaceQuestion() {
        QuizHelper.AnswerAQuestion(AreYouGameBattlePage.Question.getText());
        this.VerifyQuestionResult(true);
        AreYouGameBattlePage.ContinueButton.click();
        browser.pause(2000);
    }
    @then(/^I answer Office Question$/)
    public AnswerOfficeQuestion() {
        QuizHelper.AnswerAQuestion(AreYouGameBattlePage.Question.getText());
        this.VerifyQuestionResult(true);
        AreYouGameBattlePage.ContinueButton.click();
        browser.pause(2000);
    }
    @then(/^I answer Restaurant Question$/)
    public AnswerRestaurantQuestion() {
        QuizHelper.AnswerAQuestion(AreYouGameBattlePage.Question.getText());
        this.VerifyQuestionResult(true);
        AreYouGameBattlePage.ContinueButton.click();
        browser.pause(2000);
    }
    @then(/^I check the leaderboard$/)
    public VerifyLeaderboard() {
        browser.pause(3000);
        var score = Leaderboard.GetScore(FrameworkHelpers.ExtractJsonData("CreateWarrior", "WarriorName"));
        assert.equal(score, FrameworkHelpers.ExtractJsonData("AreYouGame", "ExpectedScore"));
    }
    @then(/^I answer Bus Question incorrectly$/)
    public AnswerPublicPlaceQuestionIncorrect() {
        QuizHelper.AnswerAQuestion(AreYouGameBattlePage.Question.getText(), false);
        this.VerifyQuestionResult(false);
        AreYouGameBattlePage.TryAgainButton.click();
        browser.pause(2000);
    }
    @then(/^I Verify navigate to Home Page$/)
    public VerifyUserNavigateToHomePage() {
        browser.pause(2000);
        //var pageTitle = HomePage.pageTitle.getText();
        assert.isTrue(HomePage.pageTitle.getText().includes(FrameworkHelpers.ExtractJsonData("HomePage", "PageTitle")));
    }
    @then(/^I answer Office Question incorrectly$/)
    public AnswerOfficeQuestionIncorrect() {
        QuizHelper.AnswerAQuestion(AreYouGameBattlePage.Question.getText(), false);
        this.VerifyQuestionResult(false);
        AreYouGameBattlePage.TryAgainButton.click();
        browser.pause(2000);
    }
    @then(/^I answer Restaurant Question incorrectly$/)
    public AnswerRestaurantQuestionIncorrect() {
        QuizHelper.AnswerAQuestion(AreYouGameBattlePage.Question.getText(), false);
        this.VerifyQuestionResult(false);
        AreYouGameBattlePage.TryAgainButton.click();
        browser.pause(2000);
    }
    @then(/^I wait without answering first question and try again$/)
    public WaitForTimeoutAndReturnHomeFromBusPage() {
        browser.pause(25000);
        AreYouGameBattlePage.TryAgainButton.click();
        browser.pause(2000);
    }

    public VerifyQuestionResult(expectedResult: boolean) {
        if (expectedResult == false) {
            //Assert the question result
            assert.equal(AreYouGameBattlePage.QuestionInCorrectResult.getText(), FrameworkHelpers.ExtractJsonData("AreYouGame", "QuestionInCorrectResult"))
        }
        else {
            //Assert the question result
            assert.equal(AreYouGameBattlePage.QuestionCorrectResult.getText(), FrameworkHelpers.ExtractJsonData("AreYouGame", "QuestionCorrectResult"))
        }

    }


}

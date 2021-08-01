import FrameworkHelpers from '../helpers/FrameworkHelpers';
class QuizHelper {
    public AnswerAQuestion(question: string, correct?: boolean) {
        //var question = AreYouGameBattlePage.Question.getText();
        var answer;
        if (correct == false) {
            answer = this.GetInCorrectAnswerForQuestion(question);
        }
        else {
            answer = this.GetCorrectAnswerForQuestion(question);
        }

        //Click on an Answer option
        $('//a[contains(text(),"' + answer + '")]').click();
        browser.pause(3000);
    }
    public GetCorrectAnswerForQuestion(question: string) {
        return FrameworkHelpers.ExtractJsonData("Questions", question.concat("_CorrectAnswer"));
    }
    public GetInCorrectAnswerForQuestion(question: string) {
        return FrameworkHelpers.ExtractJsonData("Questions", question.concat("_InCorrectAnswer"));
    }


} export default new QuizHelper();

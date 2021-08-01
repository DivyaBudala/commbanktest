class AreYouGameBattlePage {

    get StartBattle() {
        return $('//div[@id="introModal"]//button[@id="start"]')
    }
    get Question() {
        return $('//p[@id="question"]')
    }
    get ContinueButton() {
        return $('//div[@id="correctModal"]//button[@id="continue"]');
    }
    get TryAgainButton() {
        return $('//div[@id="incorrectModal"]//button[@id="close_modal_btn_2"]');
    }
    get QuestionCorrectResult() {
        return $('//div[@id="correctModal"]//h5[@id="staticBackdropLabel"]')
    }
    get QuestionInCorrectResult() {
        return $('//div[@id="incorrectModal"]//h5[@id="staticBackdropLabel"]')
    }

} export default new AreYouGameBattlePage();
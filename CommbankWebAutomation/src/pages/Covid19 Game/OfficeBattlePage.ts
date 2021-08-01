class OfficeBattlePage {
    get StartBattle() {
        return $('//div[@id="off_intro_modal"]//button[@id="start"]')
    }
    get Question() {
        return $('//p[@id="office_question_1"]');
    }
    get TryNextBattleButton() {
        return $('//div[@id="off_correct_modal"]//button[@id="close_modal_btn_1"]');
    }
    get CheckScoreButton() {
        return $('//div[@id="off_correct_modal"]//button[@id="leaderboard_link"]')
    }
    get TryAgainButton() {
        return $('//div[@id="off_incorrect_modal"]//button[@id="close_modal_btn_2"]');
    }
    get QuestionCorrectResult() {
        return $('//div[@id="off_correct_modal"]//h5[@id="staticBackdropLabel"]')
    }
    get QuestionInCorrectResult() {
        return $('//div[@id="off_incorrect_modal"]//h5[@id="staticBackdropLabel"]')
    }
    get TimeUpTryAgain() {
        return $('//div[@id="staticBackdrop4"]//div[@class="modal-footer"]/button[text()="Try again"]')
    }
    get TimeUpReturnHome() {
        return $('//div[@id="staticBackdrop4"]//div[@class="modal-footer"]/button[contains(text(),"Return Home")]')
    }
} export default new OfficeBattlePage();
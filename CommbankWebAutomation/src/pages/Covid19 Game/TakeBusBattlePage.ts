class TakeBusBattlePage {
    get StartBattle() {
        return $('//div[@id="bus_intro_modal"]//button[@id="bus_timer_start"]')
    }
    get Question() {
        return $('//p[@id="bus_question_1"]');
    }
    get TryNextBattleButton() {
        return $('//div[@id="bus_correct_modal"]//button[@id="close_correct_modal_btn"]');
    }
    get CheckScoreButton() {
        return $('//div[@id="bus_correct_modal"]//button[@id="leaderboard_link"]')
    }
    get TryAgainButton() {
        return $('//div[@id="bus_incorrect_modal"]//button[@id="close_incorrect_modal_btn"]');
    }
    get QuestionCorrectResult() {
        return $('//div[@id="bus_correct_modal"]//h5[@id="staticBackdropLabel"]')
    }
    get QuestionInCorrectResult() {
        return $('//div[@id="bus_incorrect_modal"]//h5[@id="staticBackdropLabel"]')
    }
    get TimeUpTryAgain() {
        return $('//div[@id="bus_out_of_time_modal"]//div[@class="modal-footer"]/button[text()="Try again"]')
    }
    get TimeUpReturnHome() {
        return $('//div[@id="bus_out_of_time_modal"]//div[@class="modal-footer"]/button[contains(text(),"Return Home")]')
    }

} export default new TakeBusBattlePage();
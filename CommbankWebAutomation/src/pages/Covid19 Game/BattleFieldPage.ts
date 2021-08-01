
class BattleFieldPage {

    get pageTitle() {
        return $('//p[@id="welcome_text"]')
    }
    get AreYouGame() {
        return $('//a[@id="news"]')
    }
    get TakeBus() {
        return $('//a[@id="bus"]')
    }
    get PublicPlace() {
        return $('//a[@id="restaurant"]')
    }
    get Office() {
        return $('//a[@id="office"]')
    }    

} export default new BattleFieldPage();
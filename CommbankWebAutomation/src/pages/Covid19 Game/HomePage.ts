
class HomePage {

    get pageTitle() {
        return $('//h1');
    }
    get warriorName() {
        return $('//input[@id="worrior_username"]');
    }
    get createWarrior() {
        return $('//a[@id="warrior"]');
    }
    get nameLengthPopup() {
        return $('//span[@id="popup"]');
    }
    get startJourney() {
        return $('//a[@id="start"]');
    }
    get thisProject() {
        return $('//p[contains(text(),"this project"]');
    }
    NavigateToHomePage(url: string) {
        browser.navigateTo(url);
        browser.pause(5000);
    }

} export default new HomePage();
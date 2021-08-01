
class LeaderboardPage {

    public GetScore(warriorName: string) {
        var scoreelement = $('//p[@id="showData"]//table//td[contains(text(),"' + warriorName + '")]/following-sibling::td')
        scoreelement.scrollIntoView();
        browser.pause(2000);
        return scoreelement.getText();
    }
} export default new LeaderboardPage();
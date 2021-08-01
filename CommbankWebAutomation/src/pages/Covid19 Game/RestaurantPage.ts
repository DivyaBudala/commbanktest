class RestaurantPage {
    get StartBattle() {
        return $('//div[@id="restaurant_intro_modal"]//button[@id="restaurant_timer_start"]')
    }
    get Question() {
        return $('//p[@id="question"]')
    }
} export default new RestaurantPage();
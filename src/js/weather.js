class WeatherAPI {
    #key = 'b1a559fa363e76be856e7ab39bbe231c';
    
    async getWeather(location) {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + location + '&APPID=' + this.#key);
        return await response.json();
    }
}

const weatherAPI = new WeatherAPI();
export default weatherAPI;
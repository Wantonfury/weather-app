import background from './background.js';
import Temperature from './temperature.js';

class Renderer {
    #weatherTemperature = {};   // All temperature stats (TEMP, FEELS LIKE, TEMP MIN, TEMP MAX)
    #weatherStats = {};         // ALL weather stats (PRESSURE, HUMIDITY, SEA LEVEL, GROUND LEVEL)
    #city;
    
    constructor() {
        this.#weatherTemperature.temp = document.querySelector('#weather-temp');
        this.#weatherTemperature.feelsLike = document.querySelector('#weather-feels-like');
        this.#weatherTemperature.tempMin = document.querySelector('#weather-temp-min');
        this.#weatherTemperature.tempMax = document.querySelector('#weather-temp-max');
        
        this.#weatherStats.pressure = document.querySelector('#weather-pressure');
        this.#weatherStats.humidity = document.querySelector('#weather-humidity');
        this.#weatherStats.visibility = document.querySelector('#weather-visibility');
        this.#weatherStats.weather = document.querySelector('#weather-weather');
        
        this.#city = document.querySelector('#weather-city');
    }
    
    renderBackground(time, condition) {
        background.setTime(time);
        background.setCondition(condition);
        background.render();
    }
    
    render(weather) {
        if (!weather) return;
        
        this.#weatherTemperature.temp.textContent = Temperature.getTemp(weather.main.temp).toFixed(2);
        this.#weatherTemperature.feelsLike.textContent = Temperature.getTemp(weather.main.feels_like).toFixed(2);
        this.#weatherTemperature.tempMin.textContent = Temperature.getTemp(weather.main.temp_min).toFixed(2);
        this.#weatherTemperature.tempMax.textContent = Temperature.getTemp(weather.main.temp_max).toFixed(2);
        
        this.#weatherStats.pressure.textContent = weather.main.pressure;
        this.#weatherStats.humidity.textContent = weather.main.humidity;
        this.#weatherStats.visibility.textContent = weather.visibility;
        this.#weatherStats.weather.textContent = weather.weather[0].main;
        
        this.#city.textContent = weather.name;
        
        this.renderBackground('day', weather.weather[0].main);
    }
}

const renderer = new Renderer();
export default renderer;
import '../css/index.css';
import weatherAPI from './weather.js';
import renderer from './renderer.js';

class WeatherApp {
    #weather;
    
    constructor() {
        renderer.renderBackground();
        
        this.#weather = weatherAPI.getWeather('London');
        console.log(this.#weather);
    }
}

const app = new WeatherApp();
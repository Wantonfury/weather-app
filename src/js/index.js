import '../css/index.css';
import weatherAPI from './weather.js';
import renderer from './renderer.js';

class WeatherApp {
    #location = 'London';
    
    render() {
        weatherAPI.getWeather(this.#location).then(weather => {
            const warning = document.querySelector('#warning');
            if (warning) warning.remove();
            
            renderer.render(weather);
        })
        .catch(error => {
            const warning = document.createElement('span');
            warning.textContent = 'Location not found'
            warning.id = 'warning';
            
            document.querySelector('#weather-search').appendChild(warning);
        });
    }
    
    constructor() {
        this.render();
        
        const search = document.querySelector('#form-search');
        search.addEventListener('submit', (e) => {
            const city = e.currentTarget.querySelector('input[type=text]');
            this.#location = city.value;
            city.value = '';
            
            this.render();
            
            e.preventDefault();
        });
    }
}

const app = new WeatherApp();
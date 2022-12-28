import BackgroundDay from '../img/background-day.jpg';
import BackgroundNight from '../img/background-night.jpg';

const background = (() => {
    const backgroundImage = document.querySelector('#background-image');
    const backgroundGif = document.querySelector('#background-gif');
    
    const backgroundWeather = {
        Rain: '3ohhwutQL0CDTq3kKA',
        Snow: 'cPlsuCWPznPZ98kV2J',
        Clouds: 'S602Xk14Tv6Tm4kZ04',
        Clear: ''
    }
    
    let time = 'day';
    let condition = 'Rain';
    
    const setTime = (value) => {
        time = value;
    }
    
    const setCondition = (value) => {
        condition = value;
    }
    
    const render = async () => {
        if (backgroundWeather[condition]) {
            const response = await fetch('https://api.giphy.com/v1/gifs?ids=' + backgroundWeather[condition] + '&api_key=' + 'UkuSfdoH4cQogYF1aztzm1GXGBXchnw2', { mode: 'cors' });
            const gif = await response.json();
            backgroundGif.style.backgroundImage = 'url(' + gif.data[0].images.original.url + ')';
        } else {
            backgroundGif.style.backgroundImage = '';
        }
        
        backgroundImage.style.backgroundImage = 'url(' + (time === 'day' ? BackgroundDay : BackgroundNight) + ')';
    }
    
    return { render, setTime, setCondition };
})();

export default background;
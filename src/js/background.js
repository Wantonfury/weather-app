import BackgroundDay from '../img/background-day.jpg';
import BackgroundNight from '../img/background-night.jpg';

const Background = (() => {
    const backgroundImage = document.querySelector('#background-image');
    const backgroundGif = document.querySelector('#background-gif');
    
    const backgroundRainy = '3ohhwutQL0CDTq3kKA';
    const backgroundSnowing = 'cPlsuCWPznPZ98kV2J';
    
    let time = 'day';
    let condition = 'clear';
    
    const setTime = (value) => {
        time = value;
    }
    
    const setCondition = (value) => {
        condition = value;
    }
    
    const getConditionBackground = () => {
        if (condition === 'rainy') return backgroundRainy;
        if (condition === 'snowing') return backgroundSnowing;
        return '';
    }
    
    const render = async () => {
        const cond = getConditionBackground();
        
        if (cond) {
            const response = await fetch('https://api.giphy.com/v1/gifs?ids=' + cond + '&api_key=' + 'UkuSfdoH4cQogYF1aztzm1GXGBXchnw2', { mode: 'cors' });
            const gif = await response.json();
            backgroundGif.style.backgroundImage = 'url(' + gif.data[0].images.original.url + ')';
        }
        
        backgroundImage.style.backgroundImage = 'url(' + (time === 'day' ? BackgroundDay : BackgroundNight) + ')';
    }
    
    return { render, setTime, setCondition };
})();

export default Background;
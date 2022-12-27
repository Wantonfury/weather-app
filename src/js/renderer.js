import background from './background.js';

class Renderer {
    renderBackground(day = 'day', condition = 'clear') {
        background.setTime(day);
        background.setCondition(condition);
        background.render();
    }
    
    renderUI(weather) {
        if (!weather) return;
    }
}

const renderer = new Renderer();
export default renderer;
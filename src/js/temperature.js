class Temperature {
    static celsius = true;
    
    static #getC(temp) {
        return temp - 273.15;
    }
    
    static #getF(temp) {
        return temp - 459.67;
    }
    
    static getTemp(temp) {
        return this.celsius ? this.#getC(temp) : this.#getF(temp);
    }
}

export default Temperature;
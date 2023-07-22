class Style {
    constructor(styleName, styleProperties) {
        this.styleName = styleName;
        this.styleProperties = styleProperties;
    }

    applyStyle(elementId) {
        let element = document.getElementById(elementId);
        if (element) {
            for (let property in this.styleProperties) {
                element.style[property] = this.styleProperties[property];
            }
        }
    }
}

export default Style;
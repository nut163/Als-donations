class Animation {
    constructor(elementId, animationName, duration) {
        this.elementId = elementId;
        this.animationName = animationName;
        this.duration = duration;
    }

    startAnimation() {
        const element = document.getElementById(this.elementId);
        if (element) {
            element.style.animation = `${this.animationName} ${this.duration}s`;
        } else {
            console.error(`Element with id ${this.elementId} not found`);
        }
    }

    stopAnimation() {
        const element = document.getElementById(this.elementId);
        if (element) {
            element.style.animation = '';
        } else {
            console.error(`Element with id ${this.elementId} not found`);
        }
    }
}

export default Animation;
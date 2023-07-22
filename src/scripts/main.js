import { mainStyle } from '../styles/main.css';
import { ALSInfo } from './classes/ALSInfo.js';
import { Style } from './classes/Style.js';
import { Animation } from './classes/Animation.js';

document.addEventListener('DOMContentLoaded', loadContent);

function loadContent() {
    const mainContent = document.getElementById('main-content');
    const alsInfo = new ALSInfo();
    const style = new Style(mainStyle);
    const animation = new Animation();

    alsInfo.fetchALSInfo().then(data => {
        mainContent.innerHTML = data;
        style.applyStyle(mainContent);
        animation.startAnimation(mainContent);
    }).catch(error => {
        mainContent.innerHTML = 'Error loading content. Please try again later.';
        console.error(error);
    });
}
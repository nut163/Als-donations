import ALSInfo from './classes/ALSInfo.js';
import { alsInfoStyle } from '../styles/als_info.css';

const alsInfo = new ALSInfo();

function loadContent() {
    const contentArea = document.getElementById('als-info-content');
    alsInfo.fetchALSInfo().then(info => {
        contentArea.innerHTML = info;
    }).catch(err => {
        contentArea.innerHTML = 'Error loading ALS information.';
    });
}

function applyStyle() {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = alsInfoStyle;
    document.head.appendChild(styleElement);
}

document.addEventListener('DOMContentLoaded', () => {
    loadContent();
    applyStyle();
});
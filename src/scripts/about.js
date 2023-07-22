import ALSInfo from './classes/ALSInfo.js';
import { aboutStyle } from '../styles/about.css';

document.addEventListener('DOMContentLoaded', loadContent);

function loadContent() {
    const aboutContent = document.getElementById('about-content');
    const alsInfo = new ALSInfo();

    alsInfo.fetchALSInfo().then(data => {
        aboutContent.innerHTML = `
            <h1>${data.title}</h1>
            <p>${data.description}</p>
        `;
    });

    applyStyle(aboutStyle);
}

function applyStyle(style) {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = style;
    document.head.appendChild(styleElement);
}
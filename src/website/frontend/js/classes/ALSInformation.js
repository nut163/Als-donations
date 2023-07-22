class ALSInformation {
    constructor(ALSInfo) {
        this.ALSInfo = ALSInfo;
    }

    displayALSInfo() {
        const ALSInfoSection = document.getElementById('ALSInfoSection');
        ALSInfoSection.innerHTML = this.ALSInfo;
    }

    updateALSInfo(newInfo) {
        this.ALSInfo = newInfo;
        this.displayALSInfo();
        this.sendUpdateMessage();
    }

    sendUpdateMessage() {
        const message = 'ALSInfoUpdate';
        window.postMessage(message, '*');
    }
}

export default ALSInformation;
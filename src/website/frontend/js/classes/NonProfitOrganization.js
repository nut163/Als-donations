class NonProfitOrganization {
    constructor(details) {
        this.nonProfitDetails = details;
    }

    fetchNonProfitDetails() {
        // Fetch non-profit organization details from serverless backend
        fetch('/serverless/functions/nonProfitOrganizationHandler.js')
            .then(response => response.json())
            .then(data => {
                this.nonProfitDetails = data;
                document.getElementById('nonProfitDetailsSection').innerHTML = this.nonProfitDetails;
            })
            .catch(error => console.error('Error:', error));
    }

    updateNonProfitDetails(newDetails) {
        // Update non-profit organization details
        this.nonProfitDetails = newDetails;
        document.getElementById('nonProfitDetailsSection').innerHTML = this.nonProfitDetails;
    }
}

export default NonProfitOrganization;
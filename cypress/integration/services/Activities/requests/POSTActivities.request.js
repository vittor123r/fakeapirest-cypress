
const payloadAddActivity = require('../payloads/add-activities.json')
function addActivity() {
    return cy.request({
        method: 'POST',
        url: 'Activities',
        failOnStatusCode: false,
        body: payloadAddActivity
    })
}

export { addActivity }
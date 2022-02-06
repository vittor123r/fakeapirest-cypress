
function allActivities() {
 return cy.request({
     method: 'GET',
     url: 'Activities',
     failOnStatusCode: false,
 })
}

export {allActivities}
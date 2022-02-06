// verbo/metodo - endpoint . motivo (request) . extensão

function allBooks() {
    return cy.request({
        method: 'GET',
        url: 'Books',
        failOnStatusCode: false,
    })
}

export {allBooks}
import * as GETActivities from '../requests/GETActivities.request'

describe('GET Activities', () => {
    it('Listar todas as atividades', () => {
        GETActivities.allActivities().then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.be.not.null;
        })
    });
});
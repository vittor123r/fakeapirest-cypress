import * as POSTActivities from '../requests/POSTActivities.request'

describe('POST Activities', () => {
    it('Adicionar uma nova atividade', () => {
        POSTActivities.addActivity().then((response) => {
            expect(response.status).to.eq(200)
        })

    });
});
import * as PUTBooks from '../requests/PUTBooks.request'
import * as POSTBooks from '../requests/POSTBooks.request'
import * as GETBooks from '../requests/GETBooks.request'


describe('PUT Books', () => {
    it('Alterar um livro', () => {
        GETBooks.allBooks().then((resAllBooks) => {
            PUTBooks.changeBook(resAllBooks.body[0].id).should((resChangeBook) => {
                expect(resChangeBook.status).to.eq(200)
                expect(resChangeBook.body).to.be.not.null;
                expect(resChangeBook.body.title).to.eq("Livro Vittor Alterado")
            })
        })
    });

    it('Criar e Alterar um livro', () => {
        POSTBooks.addBook().then((resAddBook) => {
            PUTBooks.changeBook(resAddBook.body.id).should((resChangeBook) => {
                expect(resChangeBook.status).to.eq(200)
                expect(resChangeBook.body).to.be.not.null;
                expect(resChangeBook.body.title).to.eq("Livro Vittor Alterado")
            })
        })
    });
});
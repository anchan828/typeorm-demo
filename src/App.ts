import {Connection} from "typeorm";
import {Book} from "./entities/Book";
import {Page} from "./entities/Page";

export class App {

    private connection: Connection;

    constructor(connection: Connection) {
        this.connection = connection;
    }

    public async initValues(): Promise<void> {

        const books: Array<Book> = [];
        for (let i = 0; i < 3; i++) {
            const book = new Book();
            book.author = `author-${i}`;
            book.name = `name-${i}`;
            book.technical_index = i;
            books.push(book);
        }
        await this.connection.manager.save(books);
        console.log("Books saved");

        const pages: Array<Page> = [];
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                const page = new Page();
                page.nb_words = j * 2; // random
                page.page_number = j;
                page.technical_index = j;
                page.book = books[i];
                pages.push(page);
            }
        }
        await this.connection.manager.save(pages);
        console.log("Pages saved");
    }

    public async switchPageInBooks(): Promise<void> {
        const books = await this.connection.getRepository(Book)
            .createQueryBuilder("book")
            .leftJoinAndMapMany("book.pages", Page, "page", "book.id = page.bookid")
            .getMany();

        console.log("Get books");

        const firstBook: Book = books.find((b) => b.technical_index === 0);
        const firstPage: Page = firstBook.pages[0];

        const secondBook = books.find((b) => b.technical_index === 1);
        const secondPage: Page = secondBook.pages[0];

        firstPage.book = Book.create(secondBook);
        secondPage.book = Book.create(firstBook);

        console.log("Switching pages from books");

        await this.connection.transaction(async transactionalEntityManager => {
            console.log("Try to save");
            await transactionalEntityManager.save([firstPage, secondPage]);
            console.log("Saved");
        });
    }
}

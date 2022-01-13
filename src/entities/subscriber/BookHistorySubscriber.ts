import {HistoryEntitySubscriber} from "@anchan828/typeorm-history";
import {EventSubscriber} from "typeorm";
import {Book} from "../Book";
import {BookHistory} from "../history/BookHistory";

@EventSubscriber()
export class BookHistorySubscriber extends HistoryEntitySubscriber<Book, BookHistory> {

    public get entity() {
        return Book;
    }

    public get historyEntity() {
        return BookHistory;
    }

}

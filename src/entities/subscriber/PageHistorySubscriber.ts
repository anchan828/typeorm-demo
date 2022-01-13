import {HistoryEntitySubscriber} from "@anchan828/typeorm-history";
import {EventSubscriber} from "typeorm";
import {PageHistory} from "../history/PageHistory";
import {Page} from "../Page";

@EventSubscriber()
export class PageHistorySubscriber extends HistoryEntitySubscriber<Page, PageHistory> {

    public get entity() {
        return Page;
    }

    public get historyEntity() {
        return PageHistory;
    }

}

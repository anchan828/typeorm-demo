import {HistoryActionColumn, HistoryActionType, HistoryEntityInterface} from "@anchan828/typeorm-history";
import {Book} from "../Book";
import {BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn, RelationId} from "typeorm";
import {Page} from "../Page";

@Entity()
export class PageHistory extends BaseEntity implements HistoryEntityInterface<Omit<Page, 'book'>> {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    nb_words: number;

    @Column()
    page_number: number;

    @Column()
    technical_index: number;

    @Column()
    bookId: string;

    @Column()
    public originalID!: string;

    @HistoryActionColumn()
    public action!: HistoryActionType;
}

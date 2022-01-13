import {HistoryActionColumn, HistoryActionType, HistoryEntityInterface} from "@anchan828/typeorm-history";
import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {Page} from "../Page";

@Entity()
export class PageHistory extends BaseEntity implements HistoryEntityInterface<Omit<Page, "book">> {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    nb_words: number;

    @Column()
    page_number: number;

    @Column()
    technical_index: number;

    @Column()
    public originalID!: string;

    @HistoryActionColumn()
    public action!: HistoryActionType;
}

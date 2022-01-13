import {HistoryActionColumn, HistoryActionType, HistoryEntityInterface} from "@anchan828/typeorm-history";
import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {Book} from "../Book";

@Entity()
export class BookHistory extends BaseEntity implements HistoryEntityInterface<Omit<Book, "pages">> {

    @PrimaryGeneratedColumn()
   public id: string;

    @Column()
    public author: string;

    @Column()
    public name: string;

    @Column()
    public technical_index: number;

    @Column()
    public originalID!: string;

    @HistoryActionColumn()
    public action!: HistoryActionType;
}

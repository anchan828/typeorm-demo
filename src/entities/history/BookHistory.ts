import {HistoryActionColumn, HistoryActionType, HistoryEntityInterface} from "@anchan828/typeorm-history";
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {Book} from "../Book";

@Entity()
export class BookHistory extends Book implements HistoryEntityInterface {

    @PrimaryGeneratedColumn()
    public id: string;

    @Column()
    public originalID!: string;

    @HistoryActionColumn()
    public action!: HistoryActionType;
}

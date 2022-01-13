import {HistoryActionColumn, HistoryActionType, HistoryEntityInterface} from "@anchan828/typeorm-history";
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {Page} from "../Page";

@Entity()
export class PageHistory extends Page implements HistoryEntityInterface {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    public originalID!: string;

    @HistoryActionColumn()
    public action!: HistoryActionType;
}

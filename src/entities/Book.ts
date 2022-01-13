import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Page} from "./Page";

@Entity()
export class Book extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    author: string;

    @Column()
    name: string;

    @Column()
    technical_index: number;

    @OneToMany(() => Page, page => page.book, {onDelete: "SET NULL"})
    pages: Page[];
}

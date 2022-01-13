import {BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Book} from "./Book";

@Entity()
export class Page extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    nb_words: number;

    @Column()
    page_number: number;

    @Column()
    technical_index: number;

    @ManyToOne(() => Book, book => book.pages, {onDelete: "SET NULL"})
    book: Book;
}

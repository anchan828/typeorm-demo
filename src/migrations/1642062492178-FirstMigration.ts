import {MigrationInterface, QueryRunner} from "typeorm";

export class FirstMigration1642062492178 implements MigrationInterface {
    name = 'FirstMigration1642062492178'

    // Remove the indexes

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `page` (`id` int NOT NULL AUTO_INCREMENT, `nb_words` int NOT NULL, `page_number` int NOT NULL, `technical_index` int NOT NULL, `bookId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `book` (`id` int NOT NULL AUTO_INCREMENT, `author` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `technical_index` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `book_history` (`id` int NOT NULL AUTO_INCREMENT, `author` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `technical_index` int NOT NULL, `originalID` varchar(255) NOT NULL, `action` enum ('CREATED', 'UPDATED', 'DELETED') NOT NULL DEFAULT 'CREATED', PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `page_history` (`id` int NOT NULL AUTO_INCREMENT, `nb_words` int NOT NULL, `page_number` int NOT NULL, `technical_index` int NOT NULL, `originalID` varchar(255) NOT NULL, `action` enum ('CREATED', 'UPDATED', 'DELETED') NOT NULL DEFAULT 'CREATED', `bookId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `page` ADD CONSTRAINT `FK_b778a51ed9e222faeec670e07e6` FOREIGN KEY (`bookId`) REFERENCES `book`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION");
        // await queryRunner.query("ALTER TABLE `page_history` ADD CONSTRAINT `FK_2cfe7950b6f1cddf58ef752099c` FOREIGN KEY (`bookId`) REFERENCES `book`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.query("ALTER TABLE `page_history` DROP FOREIGN KEY `FK_2cfe7950b6f1cddf58ef752099c`");
        await queryRunner.query("ALTER TABLE `page` DROP FOREIGN KEY `FK_b778a51ed9e222faeec670e07e6`");
        await queryRunner.query("DROP TABLE `page_history`");
        await queryRunner.query("DROP TABLE `book_history`");
        await queryRunner.query("DROP TABLE `book`");
        await queryRunner.query("DROP TABLE `page`");
    }

}

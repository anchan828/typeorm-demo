# Typeorm demo

## Sql setup
First, create a user and the database : 
```sql
CREATE USER 'typeorm'@'%' IDENTIFIED BY 'typeorm';
CREATE DATABASE typeorm;
GRANT ALL ON typeorm.* TO 'typeorm'@'%';
```

Then migrate the schema to database :
```shell
./node_modules/ts-node/dist/bin.js ./node_modules/typeorm/cli.js -f src/connection.ts migration:run
```

## Typescript compile
```shell
./node_modules/typescript/bin/tsc
```

## Start
There are 2 options : the first one without history mode, the second one with history mode.

### Without history

```shell
npm run start:withouthistory
```

This will works. Then clear the database.

### With history

```shell
npm run start:withhistory
```

I go these errors : 

```sql
query: START TRANSACTION
query: INSERT INTO `book`(`id`, `author`, `name`, `technical_index`) VALUES (DEFAULT, ?, ?, ?) -- PARAMETERS: ["author-0","name-0",0]
query: INSERT INTO `book`(`id`, `author`, `name`, `technical_index`) VALUES (DEFAULT, ?, ?, ?) -- PARAMETERS: ["author-1","name-1",1]
query: INSERT INTO `book`(`id`, `author`, `name`, `technical_index`) VALUES (DEFAULT, ?, ?, ?) -- PARAMETERS: ["author-2","name-2",2]
query: INSERT INTO `book_history`(`id`, `author`, `name`, `technical_index`, `originalID`, `action`) VALUES (DEFAULT, ?, ?, ?, ?, ?) -- PARAMETERS: ["author-0","name-0",0,1,"CREATED"]
query: INSERT INTO `book_history`(`id`, `author`, `name`, `technical_index`, `originalID`, `action`) VALUES (DEFAULT, ?, ?, ?, ?, ?) -- PARAMETERS: ["author-1","name-1",1,2,"CREATED"]
query: INSERT INTO `book_history`(`id`, `author`, `name`, `technical_index`, `originalID`, `action`) VALUES (DEFAULT, ?, ?, ?, ?, ?) -- PARAMETERS: ["author-2","name-2",2,3,"CREATED"]
query: SELECT `BookHistory`.`id` AS `BookHistory_id`, `BookHistory`.`action` AS `BookHistory_action` FROM `book_history` `BookHistory` WHERE `BookHistory`.`id` = ? -- PARAMETERS: [1]
query: SELECT `BookHistory`.`id` AS `BookHistory_id`, `BookHistory`.`action` AS `BookHistory_action` FROM `book_history` `BookHistory` WHERE `BookHistory`.`id` = ? -- PARAMETERS: [2]
query: SELECT `BookHistory`.`id` AS `BookHistory_id`, `BookHistory`.`action` AS `BookHistory_action` FROM `book_history` `BookHistory` WHERE `BookHistory`.`id` = ? -- PARAMETERS: [3]
query: COMMIT
Books saved
query: START TRANSACTION
query: INSERT INTO `page`(`id`, `nb_words`, `page_number`, `technical_index`, `bookId`) VALUES (DEFAULT, ?, ?, ?, ?) -- PARAMETERS: [0,0,0,1]
query: INSERT INTO `page`(`id`, `nb_words`, `page_number`, `technical_index`, `bookId`) VALUES (DEFAULT, ?, ?, ?, ?) -- PARAMETERS: [2,1,1,1]
query: INSERT INTO `page`(`id`, `nb_words`, `page_number`, `technical_index`, `bookId`) VALUES (DEFAULT, ?, ?, ?, ?) -- PARAMETERS: [4,2,2,1]
query: INSERT INTO `page`(`id`, `nb_words`, `page_number`, `technical_index`, `bookId`) VALUES (DEFAULT, ?, ?, ?, ?) -- PARAMETERS: [0,0,0,2]
query: INSERT INTO `page`(`id`, `nb_words`, `page_number`, `technical_index`, `bookId`) VALUES (DEFAULT, ?, ?, ?, ?) -- PARAMETERS: [2,1,1,2]
query: INSERT INTO `page`(`id`, `nb_words`, `page_number`, `technical_index`, `bookId`) VALUES (DEFAULT, ?, ?, ?, ?) -- PARAMETERS: [4,2,2,2]
query: INSERT INTO `page`(`id`, `nb_words`, `page_number`, `technical_index`, `bookId`) VALUES (DEFAULT, ?, ?, ?, ?) -- PARAMETERS: [0,0,0,3]
query: INSERT INTO `page`(`id`, `nb_words`, `page_number`, `technical_index`, `bookId`) VALUES (DEFAULT, ?, ?, ?, ?) -- PARAMETERS: [2,1,1,3]
query: INSERT INTO `page`(`id`, `nb_words`, `page_number`, `technical_index`, `bookId`) VALUES (DEFAULT, ?, ?, ?, ?) -- PARAMETERS: [4,2,2,3]
query: INSERT INTO `page_history`(`id`, `nb_words`, `page_number`, `technical_index`, `originalID`, `action`, `bookId`) VALUES (DEFAULT, ?, ?, ?, ?, ?, ?) -- PARAMETERS: [0,0,0,1,"CREATED",1]
query: INSERT INTO `page_history`(`id`, `nb_words`, `page_number`, `technical_index`, `originalID`, `action`, `bookId`) VALUES (DEFAULT, ?, ?, ?, ?, ?, ?) -- PARAMETERS: [2,1,1,2,"CREATED",1]
query: INSERT INTO `page_history`(`id`, `nb_words`, `page_number`, `technical_index`, `originalID`, `action`, `bookId`) VALUES (DEFAULT, ?, ?, ?, ?, ?, ?) -- PARAMETERS: [4,2,2,3,"CREATED",1]
query: INSERT INTO `page_history`(`id`, `nb_words`, `page_number`, `technical_index`, `originalID`, `action`, `bookId`) VALUES (DEFAULT, ?, ?, ?, ?, ?, ?) -- PARAMETERS: [0,0,0,4,"CREATED",2]
query: INSERT INTO `page_history`(`id`, `nb_words`, `page_number`, `technical_index`, `originalID`, `action`, `bookId`) VALUES (DEFAULT, ?, ?, ?, ?, ?, ?) -- PARAMETERS: [2,1,1,5,"CREATED",2]
query: INSERT INTO `page_history`(`id`, `nb_words`, `page_number`, `technical_index`, `originalID`, `action`, `bookId`) VALUES (DEFAULT, ?, ?, ?, ?, ?, ?) -- PARAMETERS: [4,2,2,6,"CREATED",2]
query: INSERT INTO `page_history`(`id`, `nb_words`, `page_number`, `technical_index`, `originalID`, `action`, `bookId`) VALUES (DEFAULT, ?, ?, ?, ?, ?, ?) -- PARAMETERS: [0,0,0,7,"CREATED",3]
query: INSERT INTO `page_history`(`id`, `nb_words`, `page_number`, `technical_index`, `originalID`, `action`, `bookId`) VALUES (DEFAULT, ?, ?, ?, ?, ?, ?) -- PARAMETERS: [2,1,1,8,"CREATED",3]
query: INSERT INTO `page_history`(`id`, `nb_words`, `page_number`, `technical_index`, `originalID`, `action`, `bookId`) VALUES (DEFAULT, ?, ?, ?, ?, ?, ?) -- PARAMETERS: [4,2,2,9,"CREATED",3]
query: SELECT `PageHistory`.`id` AS `PageHistory_id`, `PageHistory`.`action` AS `PageHistory_action` FROM `page_history` `PageHistory` WHERE `PageHistory`.`id` = ? -- PARAMETERS: [1]
query: SELECT `PageHistory`.`id` AS `PageHistory_id`, `PageHistory`.`action` AS `PageHistory_action` FROM `page_history` `PageHistory` WHERE `PageHistory`.`id` = ? -- PARAMETERS: [2]
query: SELECT `PageHistory`.`id` AS `PageHistory_id`, `PageHistory`.`action` AS `PageHistory_action` FROM `page_history` `PageHistory` WHERE `PageHistory`.`id` = ? -- PARAMETERS: [3]
query: SELECT `PageHistory`.`id` AS `PageHistory_id`, `PageHistory`.`action` AS `PageHistory_action` FROM `page_history` `PageHistory` WHERE `PageHistory`.`id` = ? -- PARAMETERS: [4]
query: SELECT `PageHistory`.`id` AS `PageHistory_id`, `PageHistory`.`action` AS `PageHistory_action` FROM `page_history` `PageHistory` WHERE `PageHistory`.`id` = ? -- PARAMETERS: [5]
query: SELECT `PageHistory`.`id` AS `PageHistory_id`, `PageHistory`.`action` AS `PageHistory_action` FROM `page_history` `PageHistory` WHERE `PageHistory`.`id` = ? -- PARAMETERS: [6]
query: SELECT `PageHistory`.`id` AS `PageHistory_id`, `PageHistory`.`action` AS `PageHistory_action` FROM `page_history` `PageHistory` WHERE `PageHistory`.`id` = ? -- PARAMETERS: [7]
query: SELECT `PageHistory`.`id` AS `PageHistory_id`, `PageHistory`.`action` AS `PageHistory_action` FROM `page_history` `PageHistory` WHERE `PageHistory`.`id` = ? -- PARAMETERS: [8]
query: SELECT `PageHistory`.`id` AS `PageHistory_id`, `PageHistory`.`action` AS `PageHistory_action` FROM `page_history` `PageHistory` WHERE `PageHistory`.`id` = ? -- PARAMETERS: [9]
query: COMMIT
Pages saved
query: SELECT `book`.`id` AS `book_id`, `book`.`author` AS `book_author`, `book`.`name` AS `book_name`, `book`.`technical_index` AS `book_technical_index`, `page`.`id` AS `page_id`, `page`.`nb_words` AS `page_nb_words`, `page`.`page_number` AS `page_page_number`, `page`.`technical_index` AS `page_technical_index`, `page`.`bookId` AS `page_bookId` FROM `book` `book` LEFT JOIN `page` `page` ON `book`.`id` = page.bookid
Get books
Switching pages from books
query: START TRANSACTION
Try to save
query: SELECT `Page`.`id` AS `Page_id`, `Page`.`nb_words` AS `Page_nb_words`, `Page`.`page_number` AS `Page_page_number`, `Page`.`technical_index` AS `Page_technical_index`, `Page`.`bookId` AS `Page_bookId` FROM `page` `Page` WHERE `Page`.`id` IN (?, ?) -- PARAMETERS: [1,4]
query: UPDATE `page` SET `bookId` = ? WHERE `id` IN (?) -- PARAMETERS: [2,1]
query: UPDATE `page` SET `bookId` = ? WHERE `id` IN (?) -- PARAMETERS: [1,4]
query: ROLLBACK
/private/tmp/typeorm-demo/src/metadata/ColumnMetadata.ts:570
    getEntityValue(entity: ObjectLiteral, transform: boolean = false): any|undefined {
    ^
RangeError: Maximum call stack size exceeded
    at ColumnMetadata.getEntityValue (/private/tmp/typeorm-demo/src/metadata/ColumnMetadata.ts:570:5)
    at /private/tmp/typeorm-demo/src/query-builder/transformer/PlainObjectToNewEntityTransformer.ts:37:46
    at Array.forEach (<anonymous>)
    at PlainObjectToNewEntityTransformer.groupAndTransform (/private/tmp/typeorm-demo/src/query-builder/transformer/PlainObjectToNewEntityTransformer.ts:36:36)
    at /private/tmp/typeorm-demo/src/query-builder/transformer/PlainObjectToNewEntityTransformer.ts:93:26
    at Array.forEach (<anonymous>)
    at PlainObjectToNewEntityTransformer.groupAndTransform (/private/tmp/typeorm-demo/src/query-builder/transformer/PlainObjectToNewEntityTransformer.ts:44:32)
    at /private/tmp/typeorm-demo/src/query-builder/transformer/PlainObjectToNewEntityTransformer.ts:73:30
    at Array.forEach (<anonymous>)
    at /private/tmp/typeorm-demo/src/query-builder/transformer/PlainObjectToNewEntityTransformer.ts:60:40
```

import {createConnection} from "typeorm";
import {App} from "./App";

import config from "./connection";

createConnection(config).then(async (connection) => {
    const app: App = new App(connection);

    await app.initValues();
    await app.switchPageInBooks();

    await connection.close();
});

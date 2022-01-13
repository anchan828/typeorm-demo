import {ConnectionOptions} from "typeorm";

const config = {
    name: "default",
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "typeorm",
    password: "typeorm",
    database: "typeorm",
    synchronize: false,
    entities: [
        __dirname + "/entities/*{.ts,.js}",
        __dirname + "/entities/history/*{.ts,.js}"
    ],
    subscribers: [
        __dirname + "/entities/subscriber/*{.ts,.js}"
    ],
    logging: true,
    migrations: ['src/migrations/*{.ts,.js}'],
    cli: {
        migrationsDir: 'src/migrations',
    }
};

if (process.env.HISTORY === "false") {
    delete config["subscribers"];
}

export = config as ConnectionOptions;

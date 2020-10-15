export = {
    type: "postgres",
    url: process.env.DATABASE_URL,

    migrations: process.env.DATABASE_MIGRATIONS
        ? process.env.DATABASE_MIGRATIONS
        : ["./src/database/migrations/*.ts"],
    entities: process.env.DATABASE_ENTITIES
        ? process.env.DATABASE_ENTITIES
        : ["./src/models/*.ts"],
    cli: {
        migrationsDir: process.env.DATABASE_ENTITIES_DIR
            ? process.env.DATABASE_ENTITIES_DIR
            : "./src/database/migrations",
    },
};

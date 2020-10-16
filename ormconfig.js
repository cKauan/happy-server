if (process.env.DATABASE_URL) {
    return module.exports = {
        type: "postgres",
        url: process.env.DATABASE_URL,

        migrations: ["dist/database/migrations/*.js"],
        entities: ["dist/models/*.js"],
        ssl: { rejectUnauthorized: false },
        cli: {
            migrationsDir: ["src/database/migrations"],
        },
    };
}
else {
    module.exports = {
        type: "postgres",
        url: "postgres://postgres:carloskauan123@localhost:5432/postgres",
        migrations: ["./src/database/migrations/*.ts"],
        entities: ["./src/models/*.ts"],
        cli: {
            migrationsDir: ["./src/database/migrations"],
        },
    };
}
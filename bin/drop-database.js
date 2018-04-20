#!/usr/bin/env node
const { mongoose, databaseUrl, options } = require("../database");

const dropTables = async () => {
    await mongoose.connect(databaseUrl, options);
    await mongoose.connection.db.dropDatabase();
};

dropTables()
.then(() => {
    console.log("Dropped mongo database");
    process.exit(0);
})
.catch(err => {
    throw err;
    process.exit(1);
});

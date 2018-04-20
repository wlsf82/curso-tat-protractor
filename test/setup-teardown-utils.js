const {mongoose, databaseUrl, options} = require("../database");

const connectDatabaseAndDropData = async () => {
  await mongoose.connect(databaseUrl, options);
  await mongoose.connection.db.dropDatabase();
};

const diconnectDatabase = async () => {
  await mongoose.disconnect();
};

module.exports = {
  connectDatabaseAndDropData,
  diconnectDatabase,
};

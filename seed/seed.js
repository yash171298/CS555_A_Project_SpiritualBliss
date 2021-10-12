const dbConnection = require("../config/mongoConnection");
const data = require("../data/index");
const admin = data.admin;

const { ObjectId } = require("mongodb");

async function main() {
  const db = await dbConnection();
  await db.dropDatabase();
  await db.serverConfig.close();

}
main();

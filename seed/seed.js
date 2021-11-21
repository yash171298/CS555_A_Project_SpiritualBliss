const dbConnection = require("../config/mongoConnection");
const data = require("../data/index");
const products = data.products;
const comments = data.comments;
const users = data.users;
const productType = data.productType;
const admin = data.admin;

const { ObjectId } = require("mongodb");

async function main() {
  const db = await dbConnection();
  await db.dropDatabase();

 const user1 = await users.addUser(
    "Devika",
    "M",
    "9293258470",
    "devika@gmail.com",
    "devika123",
    {
      Line1: "11 Bryant Ave",
      Line2: "Apt #11R",
      City: "Jersey City",
      State: "New Jersey",
      Country: "USA",
      ZipCode: 07306,
    }
  );

  


  const admin1 = await admin.addAdmin(
    "Devika",
    "Mhatre",
    "devikaPassword",
    "devika@stevens.edu"
  );

 
  await db.serverConfig.close();
}

main();

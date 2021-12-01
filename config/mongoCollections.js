const dbConnection = require("./mongoConnection");

/* This will allow you to have one reference to each collection per app */
const getCollectionFn = (collection) => {
  let _col = undefined;

  return async () => {
    if (!_col) {
      const db = await dbConnection();
      _col = await db.collection(collection);
    }
    return _col;
  };
};

module.exports = {
  users: getCollectionFn("users"),
  products: getCollectionFn("products"), // this is for videos
  comments: getCollectionFn("comments"),
  productType: getCollectionFn("productType"), //for type of videos
  admin: getCollectionFn("admin"),
  feedback: getCollectionFn("feedback")
};

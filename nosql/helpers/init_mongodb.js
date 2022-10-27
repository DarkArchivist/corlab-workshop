const mongodb = require('mongodb').MongoClient;

const db = async () => {
    const db = await mongodb.connect(process.env.MONGODB_URI);
    const dbo = db.db("restaurant");
    return dbo.collection("restaurant");
}

module.exports = db;
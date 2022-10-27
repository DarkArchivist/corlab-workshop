require('dotenv').config({path: __dirname + '/.env'})
const db = require('./helpers/init_mongodb');

const express = require('express');

const app = express();
const PORT = process.env.PORT || 4000;

app.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}`);
    const dbo = await db();
    // const one = await dbo.find({}).toArray();

    // const two = await dbo.find({}).project({
    //     restaurant_id: 1,
    //     name: 1,
    //     borough: 1,
    //     cuisine: 1,
    //     _id: 0
    // })
    //     .toArray();

    const three = await dbo.find({}).project({
        restaurant_id: 1,
        name: 1,
        borough: 1,
        cuisine: 1,
        address: {
            zipcode: 1
        },
        _id: 0
    })
        .toArray();
    /*

    db.restaurant.find({borough: "Bronx"})
    db.restaurant.find({borough: "Bronx"}).limit(5);
    db.restaurant.find({borough: "Bronx"}).skip(5).limit(5);
    db.restaurant.find({"grades.score": { $gt: 90}});
    db.restaurant.find({"grades.score": { $gt: 80, $lt: 100}});

     */
    console.log(three);
})
const path = require("path");
const mongoose = require("mongoose");
const Product = require('./models/product');
const data = require("./data.json");


mongoose.connect(
    'mongodb://localhost:27017/store', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

// const NEW_Product = new Product({
//     type: data[0].type,
//     title: data[0].title,
//     description: data[0].description,
//     shipping: data[0].shipping,
//     pricing: data[0].pricing,
//     details: data[0].details
// })

// NEW_Product.save(function(err, user) {
//     if (err)
//         console.log(err);
// })


// Product.insertMany(data.slice(1));

//A-B
// Product.find({}, (err, products) => {
//     if (err)
//         console.log(err);
//     else console.log(products);
// });


//C
// Product.find({}, { _id: false }, (err, products) => {
//     if (err)
//         console.log(err);
//     else console.log(products);
// });


//D
// Product.find({ type: "Audio Album" }, (err, products) => {
//     if (err)
//         console.log(err);
//     else console.log(products);
// });


//E
// Product.find({ "pricing.retail": { $lt: 5000 } }, (err, products) => {
//     if (err) {
//         return console.log(err);
//     }
//     console.log(products);
// });

//F
// Product.find({ type: { $ne: "Film" } }, (err, products) => {
//     if (err) {
//         return console.log(err);
//     }
//     console.log(products);
// });

//G
// Product.find({ "shipping.weight": { $gt: 15 } }, (err, products) => {
//     if (err) {
//         return console.log(err);
//     }
//     console.log(products);
// });

// H
// Product.updateOne({ "details.title": "The Matrix" }, { "pricing.list": 2500 },
//     (err, result) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log(result);
//     }
// );

//I
// Product.find({ $and: [{ type: "Film" }, { "shipping.dimensions.depth": 1 }] },
//     (err, products) => {
//         if (err) {
//             return console.log(err);
//         }
//         console.log(products);
//     }
// );

//J
// Product.count({ type: "Film" }, (err, products) => {
//     if (err) {
//         return console.log(err);
//     }
//     console.log(products);
// });

// K
// Product.find({ "details.writer": { $regex: "Jonathan Nolan" } },
//     (err, products) => {
//         if (err) {
//             return console.log(err);
//         }
//         console.log(products);
//     }
// );


//L

// Product.find({})
//     .sort("-pricing.savings")
//     .limit(1)
//     .exec((err, products) => {
//         if (err) console.log(err);

//         console.log(products);
//     });

//M
// Product.find({ "details.title": { $regex: "x" } }, (err, products) => {
//     if (err) {
//         return console.log(err);
//     }
//     console.log(products);
// });

//N
// Product.deleteOne({ "details.aspect_ratio": "1.66:1" },
//     (err, result) => {
//         if (err) console.log(err);
//         console.log(result);
//     }
// );
const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: [ture, "enter the price"]
    },
    featured: {
        type: Boolean,
        required: flase
    },
    rating: {
        type: Number,
        required: 4.9
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    compnay: {
        type: String,
        enum: {
            values: ["apple", "samsung", "dell", "hp"],
            message: `{VALUE} is not supported`

        }
    }
})



module.exports = mongoose.model("Product",productSchema)
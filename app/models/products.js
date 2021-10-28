const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productsSchema = new Schema({
    name:{
        type: string
    },
    type: {
        type: string
    },
    prices: {
        type: number
    },
    imageLinks: {
        type: string
    }
})
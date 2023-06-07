/* import mongoose  from "mongoose";

const cartCollection = "carrito";
const cartSchema = new mongoose.Schema({
    email: {
        type: String, 
        require: true
    }, 
    productos:{
        type:Array,
        required:true
    }
},
{
    timestamps:true
});
export const CartModel = mongoose.model(cartCollection,cartSchema); */

import mongoose, { Schema } from 'mongoose'

const carritoSchema = new mongoose.Schema({
    timestamp: { type: String, required: true },
    owner: { type: Schema.Types.ObjectId, ref: "users" },
    productos: [
        {
            item: {
                type: Schema.Types.ObjectId,
                ref: "Product",
            },
            quantity: {
                type: Number,
                required: true,
            },
            total: {
                type: Number,
                required: true,
                default: 0,
            },
        },

    ],
    subTotal: {
        type: Number,
        default: 0,
    },
    totalQty: {
        type: Number,
        default: 1,
    },
    email: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: "activo"
    }

})

const Cart = mongoose.model('Cart', carritoSchema)

export { Cart }
import mongoose  from "mongoose";

const cartCollection = "carrito";
const cartSchema = new mongoose.Schema({
    email: {
        type: String, 
        require: true
    }, 
    productos:{
        type: [],
        required:true
    }
},
{
    timestamps:true
});

export const CartModel = mongoose.model(cartCollection,cartSchema); 

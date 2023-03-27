import {Schema,model } from "mongoose";

const cardSchema = new Schema({
  name: { type: String, required: true, unique: true },
  mh: { type: String },
  status: { type: Number },
  rarity: { type: String },
  isActive: { typr: Boolean },
  rarityN:{type:Number},  
  img: { type: String }
},{timestamps:true}); 

export default model('Card',cardSchema)
 
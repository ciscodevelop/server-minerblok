// import { Schema, model } from "mongoose";
// import cardModel from "../models/card.model.js";
// const userSchema = new Schema(
//   {
//     username: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     wallet: { type: String, required: true },
//     cards: [{
//       cardid: {
//         type: Schema.Types.ObjectId,
//         ref: 'Card'
//       },
//       isActive: { type: Boolean, default: false },
//       currentStatus:{type:Number,}
//     }],
//     //isActive: { type: Boolean },
//     img: { type: String },
//   },
//   { timestamps: true }
// );

// userSchema.pre("save", async function (next) {
//   try {
//     const card = await cardModel.findById(this.cards.cardid);
//     if (card) {
//       this.cards.currentStatus = card.status;
//     }
//     next();
//   } catch (error) {
//     next(error);
//   }
// });





// [Schema.Types.ObjectId], ref:'cards'
//export default model("User", userSchema);



import { Schema, model } from "mongoose";
import Card from "./card.model.js";

const userSchema = new Schema(
  { 
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    wallet: { type: String, required: true },
    cards: [{
      cardid: {
        type: Schema.Types.ObjectId,
        ref: 'Card'
      },
      isActive: { type: Boolean, default: false },
      currentStatus: { type: Number },
      isCooling: { type: Boolean },
      status: { type: Number },

    }],
    img: { type: String },
  },
  { timestamps: true } 
);

// userSchema.pre("save", async function (next) {
//   try {
//     console.log(this);
    
//     const card = await Card.findById(this.cards[0].cardid);
//     if (card) {
//       this.cards[0].currentStatus = card.status;
//     }
//     next();
//   } catch (error) {
//     next(error);
//   }
// });

export default model("User", userSchema);
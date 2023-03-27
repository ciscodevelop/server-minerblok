import mongoose from "mongoose";
import Card from "../models/card.model.js";
import User from "../models/user.model.js";

//GET ALL USERS
export const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

//GET ONE USER
export const getUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  res.json(user);
};

//CREATE A USER
export const createUser = async (req, res) => {
  const user = await User.create({ ...req.body });
  res.status(200).json(user);
};

//DELETE A USER
export const deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findByIdAndDelete(id);
  res.json(user);
};

//UPDATE A USER
export const patchUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findByIdAndUpdate(id, { ...req.body }, { new: true });
  res.json(user);
};

//GET ALL CARDS OF A USER
export const getCardsUser = async (req, res) => {
  const { userid } = req.params;
  try {
    const user = await User.find({ _id: userid }).populate({
      path: "cards.cardid",
      model: "Card",
    });
    res.json(...user);
  } catch (error) {
    console.log(error);
  }
};

//ADD ONE CARD TO A USER
export const addCardUser = async (req, res) => {
  const { userid } = req.params;
  const user = await User.findById(userid);
  const card = await Card.findById({ _id: req.body.cardid });
  user.cards.push({
    ...req.body,
    currentStatus: req.body.currentStatus
      ? req.body.currentStatus
      : card.status,
  });

  await user.save();

  res.json(user);
};

//UPDATE STATE OF A CARD
export const updataStateCardUser = async (req, res) => {
  const { userid, idcard } = req.params;
  let countCardActive = 1,
    increment = true;
  const user = await User.findById(userid);
  user.cards
    .filter((card) => card.isActive === true)
    .forEach((card) => {
      countCardActive++;
    });
  if (countCardActive <= 5) {
    const index = user.cards.findIndex((c) => c._id.equals(idcard));
    if (!user.cards[index].isCooling) {
      
      user.cards[index].isActive = !user.cards[index].isActive;
  
      await user.save();
    }
  } else {
    const index = user.cards.findIndex((c) => c._id.equals(idcard));
    user.cards[index].isActive = false;
    console.log(user.cards[index]);
    countCardActive--;

    await user.save();
  }

  res.json(user);
};

const updateStateSchedule = async (req, res) => {
  try {
    const users = await User.find()//.flat()//.aggregate([{$match:{_id: new mongoose.Types.ObjectId("640b881202d90eda4bc6e068")}}])

    //console.log(users);
    for (const user of users) {
      //console.log(user);
      for (const card of user.cards) {
         
        if (card.currentStatus!=null && card.currentStatus!=undefined) {
          
          if (card.isActive && card.currentStatus>0&&!card.isCooling) {
            
            card.currentStatus -= 1;
            console.log('e attiva ed decremento',card.currentStatus);
            
             
          } else if(card.currentStatus===0){
            card.isActive = false;
            card.isCooling = true;
            
          }
          if (card.isCooling && card.currentStatus<card.status) {
            card.isActive = false;
            card.currentStatus += 1;
            console.log(card);
            console.log('Non è attiva ed Incremento', card.currentStatus);
             
            if (card.currentStatus===card.status) {
              
              
            }
          } else {
            card.isCooling = false;    
            
          }
          await user.save(); 
 
        }
        
          
      }
      
    }

     
  } catch (error) {
    console.error(error);
    
  }
};

setInterval(() => {
  console.log(new Date().toISOString());

  updateStateSchedule();
}, 600000);
//updateStateSchedule();  
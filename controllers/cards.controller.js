import cardModel from "../models/card.model.js";

export const getCards = async (req, res) => {
  const cards = await cardModel.find();
  res.json(cards);
};

export const getCard = async (req, res) => {
  const { id } = req.params;
  const card = await cardModel.findById(id);
  res.json(card); 
};

export const createCard = async (req, res) => {
  const card = await cardModel.create({ ...req.body });
  res.status(200).json(card);
};
 
export const deleteCard = async (req, res) => {
    const { id } = req.params;
    const card = await cardModel.findByIdAndDelete(id);
    res.json(card);
};

export const patchCard = async (req, res) => {
    const { id } = req.params;
    const card = await cardModel.findByIdAndUpdate(id, {...req.body},{new:true});
    res.json(card);
};
// export const addManyCards = async (req, res) => {
     
//     const card = await cardModel.insertMany( 
//       [{
        
//         img: "/assets/cards/1.png",
//         name: "Snow",
//         status: 50,
//         mh: 81,
//         isActive:true,
//         isCooling:false,
//         currentStatus:50,
//         rarity: "legendary",
//       },
//       {
          
//         img: "/assets/cards/2.png",
//         name: "Lanni",
//         status: 10,
//         mh: 42,
//         isActive:true,
//         isCooling:false,
//         currentStatus:7,
//         rarity: "common",
//       },
//       {
        
//         img: "/assets/cards/3.png",
//         name: "Lannister",
//         status: 15,
//         mh: 45,
//         isActive:false,
//         isCooling:false,
//         currentStatus:5,
//         rarity: "epic",
//       },
//       {
        
//         img: "/assets/cards/4.png",
//         name: "Stark",
//         status: 15,
//         mh: 16,
//         isActive:false,
//         isCooling:false,
//         currentStatus:15,
//         rarity: "uncommon",
//       },
//       {
        
//         img: "/assets/cards/5.png",
//         name: "Targary",
//         status: 35,
//         mh: null,
//         isActive:false,
//         isCooling:false,
//         currentStatus:10,
//         rarity: "common",
//       },
//       {
        
//         img: "/assets/cards/6.png",
//         name: "Melisan",
//         status: 10,
//         mh: 150,
//         isActive:false,
//         isCooling:false,
//         currentStatus:15,
//         rarity: "uncommon",
//       },
//       {
        
//         img: "/assets/cards/7.png",
//         name: "Cliffo",
//         status: 10,
//         mh: 44,
//         isActive:false,
//         isCooling:false,
//         currentStatus:5,
//         rarity: "common",
//       },
//       {
        
//         img: "/assets/cards/8.png",
//         name: "France",
//         status: 30,
//         mh: 36,
//         isActive:false,
//         isCooling:false,
//         currentStatus:30,
//         rarity: "common",
//       },
//       {
        
//         img: "/assets/cards/9.png",
//         name: "Roxi",
//         status: 20,
//         mh: 65,
//         isActive:true,
//         isCooling:false,
//         currentStatus:20,
//         rarity: "legendary",
//       },
//       {
        
//         img: "/assets/cards/22.png",
//         name: "Targaryen",
//         status: 25,
//         mh: null,
//         isActive:true,
//         isCooling:false,
//         currentStatus:20,
//         rarity: "common",
//       },
//       {
        
//         img: "/assets/cards/24.png",
//         name: "Melisa",
//         status: 20,
//         mh: 150,
//         isActive:false,
//         isCooling:false,
//         currentStatus:20,
//         rarity: "common",
//       },
//       {
        
//         img: "/assets/cards/27.png",
//         name: "Cliff",
//         status: 20,
//         mh: 44,
//         isActive:true,
//         isCooling:false,
//         currentStatus:20,
//         rarity: "legendary",
//       },
//       {
        
//         img: "/assets/cards/28.png",
//         name: "Frances",
//         status: 20,
//         mh: 36,
//         isActive:true,
//         isCooling:false,
//         currentStatus:20,
//         rarity: "epic",
//       },
//       {
        
//         img: "/assets/cards/29.png",
//         name: "Roxie",
//         status: 20,
//         mh: 65,
//         isActive:false,
//         isCooling:true,
//         currentStatus:20,
//         rarity: "common",
//       }],
//     );
//     res.json(card);
// };
// export const updateMany =async (req, res) => {
   
//   const cards = await cardModel.updateMany({}, {
//     rarityN:50
//   })
//   res.json(cards) 
//  }
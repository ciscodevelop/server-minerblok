import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connetionMongo from "./connectionDB.js";
import cardRoutes from "./routes/cards.route.js";
import userRoutes from "./routes/users.route.js";
 
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8800;

 
//Routes
app.use('/api/cards',cardRoutes)
app.use('/api/users',userRoutes)


app.listen(port, () => {
    console.log("Server listening on port " + port);
    connetionMongo();
});

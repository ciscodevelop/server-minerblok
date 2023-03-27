import { connect } from "mongoose";
const connetionMongo = async () => {
  await connect(
 process.env.MONGO_URI
  )
    .then((response) => {
      console.log(
        "Server MongoDB connected to " + response.connection.db.databaseName
      );
    })
    .catch((error) => {
      console.log(error);
    });
};

export default connetionMongo;

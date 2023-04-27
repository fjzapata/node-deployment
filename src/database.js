import mongoose from "mongoose";

mongoose
  .connect(
    // `mongodb://${process.env.MONGOUSER}:${process.env.MONGOPASSWORD}@${process.env.MONGOHOST}:${process.env.MONGOPORT}`,
    'mongodb://127.0.0.1:27017',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((db) => console.log("Db is connected"))
  .catch((error) => console.log(error));

import mongoose from "mongoose";

mongoose
  .connect(
    `mongodb://${process.env.MONGOUSER}:${process.env.MONGOPASSWORD}@${process.env.MONGOHOST}:${process.env.MONGOPORT}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((db) => console.log("Db is connected"))
  .catch((error) => console.log(error));

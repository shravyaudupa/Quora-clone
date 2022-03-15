const mongoose = require("mongoose");

const url =
  "mongodb://Udupa:Udupa@cluster0-shard-00-00.rvwuy.mongodb.net:27017,cluster0-shard-00-01.rvwuy.mongodb.net:27017,cluster0-shard-00-02.rvwuy.mongodb.net:27017/Quora1?ssl=true&replicaSet=atlas-lnb4mz-shard-0&authSource=admin&retryWrites=true&w=majority";

module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((error) => console.log("Error: ", error));
};

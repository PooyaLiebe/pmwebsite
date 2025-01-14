import mongoose from "mongoose";

const AghlamSchema = new mongoose.Schema({
  kalaname: String,
  countkala: String,
  vahedkala: String,
  codekala: String,
  flamekala: String,
  shopkala: String,
});

const AghlamModel = mongoose.model("aghlam", AghlamSchema);

export default AghlamModel;

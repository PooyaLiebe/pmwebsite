import mongoose from "mongoose";

const TechnicianSchema = new mongoose.Schema({
  instructions: String,
  instructionsconfirm: String,
  failurepart: String,
  permit: String,
  permitconfirmnumber: String,
  failuretime: Date,
  sparetime: Date,
  startfailuretime: Date,
  problemdescription: String,
});

const TechnicianModel = mongoose.model("technicians", TechnicianSchema);

export default TechnicianModel;

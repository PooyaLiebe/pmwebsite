import mongoose from "mongoose";

const PersonelSchema = new mongoose.Schema({
  personel: String,
  personelnumber: String,
  datesubmit: Date,
  specialjob: String,
  starttimerepair: Date,
  endtimerepair: Date,
  repairstatus: String,
  unitrepair: String,
  shift: String,
  delayreason: String,
  failurereason: String,
  failurereasondescription: String,
  suggestionfailure: String,
});

const KarshenasModel = mongoose.model("karshenas", PersonelSchema);

export default KarshenasModel;

import mongoose from "mongoose";

const FormSchema = new mongoose.Schema({
  formcode: String,
  problemdate: Date,
  section: String,
  machinename: String,
  equipstop: Date,
  failuretime: String,
  productiontime: Date,
  shift: String,
  suggesttime: String,
  worksuggest: String,
  fixrepair: String,
  reportinseption: String,
  faultdm: String,
  operatorname: String,
  problemdescription: String,
});

const FormModel = mongoose.model("forms", FormSchema);

export default FormModel;

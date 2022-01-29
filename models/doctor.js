const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const doctorSchema = new Schema({
  name : {
    type: String,
    required: true
  },
  email : {
    type: String,
    required: true
  },
  dob:
  {
      type:Date,
      required:true
  },
  qualification:
  {
      type:String,
      required:true
  },
  password:
  {
      type:String,
      required:true
  },
  specilization:
  {
      type:String,
      required:true
  },
  fee:
  {
      type:Number,
      required:true
  },
  timeslot: {
    type: Array,
    required: true
  },
  patientattend : {
    type : Number,
    required: true
  }
},{
  timestamps: true
})

module.exports = mongoose.model('Doctor' , doctorSchema);

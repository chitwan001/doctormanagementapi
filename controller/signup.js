const doctor = require('../models/doctor');

exports.addDoctor= (req,res,next) => {
    const newdoc = new doctor({
      name : 'Gaurav Shrivastava',
      email : 'chitwan002@gmail.com',
      dob : 29-09-1989,
      qualification : 'XYZ',
      password : 'chitwanbindal',
      specilization : 'Psychologist',
      fee : 10000,
      timeslot : [
        {days : '0-5' , time : '8-13'}
      ],
      patientattend : 25
    })
    newdoc.save().then(data => {
      res.send(data);
    })
  }
exports.addUser = (req,res,next) => {

}

const doctor = require('../models/doctor');

exports.addDoctor= (req,res,next) => {
    const newdoc = new doctor({
      name : 'Sundar Pichai',
      email : 'malhotrasiddharth999@gmail.com',
      dob : 23-09-1989,
      qualification : 'BDS',
      password : 'sundarpichai',
      specilization : 'Dental',
      fee : 1000,
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

const doctor=require('../models/doctor');
exports.getdoctor=(req,res,next)=>{
    doctor.find().then(data=>{
        res.send(data);
    })
};

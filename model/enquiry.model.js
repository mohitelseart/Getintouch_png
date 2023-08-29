const mongoose = require("mongoose")

const enquirySchema = mongoose.Schema({
   fullname:String,
   email:String,
   comment:String,
},{
    versionKey:false
})

const enquiryModel = mongoose.model("PNGenquirydata", enquirySchema)

module.exports = {
    enquiryModel
}
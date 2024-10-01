const mongoose=require("mongoose");

const profileSchema= new mongoose.Schema({
    profilePicture: {
        type: Buffer, // Store the binary image data
      },
      profilePictureType: {
        type: String, // Store the image type (e.g., 'image/jpeg' or 'image/png')
      },
    username:{
        type:String,
        required:true,
        unique:true
    },
    total_time:{
        type:Number,
    },
    courses:{
        type:[String],
    }
});

const profile=mongoose.model("User_Profile",profileSchema);
module.exports=profile;
import mongoose, { Schema } from "mongoose";

const workSchema = new Schema({
    
    title: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum:["pending","completed"],
        default: "pending",
    },
    description: {
        type: String,
        required: true,
    },
    addedDate:{
        type: Date,
        default: Date.now(),
        required:true
    },
    userId:{
        type: mongoose.ObjectId,
        required: true,
    }

});

export const Work = 
    mongoose.models.works || mongoose.model("works",workSchema)
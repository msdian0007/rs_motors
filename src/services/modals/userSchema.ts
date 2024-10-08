import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
})

const adminModal = mongoose.models.admin || mongoose.model('admin', adminSchema)
export default adminModal
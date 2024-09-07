import mongoose from "mongoose";

const engineSchema = new mongoose.Schema({
    type: {
        type: String,
    },
    displacement: {
        type: String,
    },
    horsepower: {
        type: Number,
    },
    torque: {
        type: String,
    }
})

const vehicleSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true
    },
    modelName: {
        type: String,
        required: true
    },
    modelYear: {
        type: String,
        required: true
    },
    engine: engineSchema,
    fuelCapacity: {
        type: Number,
    },
    mileage: {
        type: Number,
    },
    weight: {
        type: Number,
    },
    topSpeed: {
        type: Number,
    },
    price: {
        type: Number,
        required: true
    },
    sellingPrice: {
        type: Number,
        required: true
    },
    showroomPrice: {
        type: Number,
    },
    owner: {
        type: Number,
        required: true
    },
    isSold: {
        type: Boolean,
        default: false,
    },
    coverImage: {
        type: String,
        required: true
    },
    images: {
        type: [String],
        required: true
    }
}, {
    timestamps: true
})

const vehicleModal = mongoose.models.vehicledetails || mongoose.model('vehicledetails', vehicleSchema)
export default vehicleModal
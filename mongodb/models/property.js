import mongoose from "mongoose";

const PropertySchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    propertyType: { type: String, required: true },
    location: { type: String, required: true },
    price: { type: Number, required: true },
    rooms: { type: Number, required: true },
    baths: { type: Number, required: true },
    area: { type: Number, required: true },
    amenities: { type: String, required: true },
    furnishingStatus: { type: String, required: true },
    photo: { type: String, required: true },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
})

const propertyModel = mongoose.model('Property', PropertySchema);

export default propertyModel;
import mongoose from "mongoose";

const albumSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    bgcolor: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})

const albumModel = mongoose.model.album || mongoose.model("album",albumSchema);

export default albumModel;
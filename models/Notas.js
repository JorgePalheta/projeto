const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Notas = new Schema({
    content: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now(),
    },
});

mongoose.model("notas", Notas);

const mongoose = require('mongoose');

const uri = `mongodb+srv://user:Password@cluster0.rpfzkky.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const { Schema } = mongoose;

const CarroSchema = new Schema({
    id: {
        type: String,
        index: true,
        unique: true,
    },
    modelo: {
        type: String,
        unique: true,
    },
    marca: String,
    ano: String,
});

const CarroModel = mongoose.model('CarroModel', CarroSchema);

module.exports = {
    CarroModel,
};
const mongoose = require('mongoose');

const uri = `mongodb+srv://admin:iI2frSJ9VBOXUeE1@cluster0.jgnim8g.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const {Schema} = mongoose;

const FilmSchema = new Schema({
    id: {
        type: String,
        index: true,
        unique: true,
    },
    nome: String,
    genero: String,
    atores: Array,
    ano: Number
});

const FilmModel = mongoose.model('FilmModel', FilmSchema);

module.exports = {
    FilmModel,
};
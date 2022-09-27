const mongoose = require('mongoose');

const uri = `mongodb+srv://admin:iI2frSJ9VBOXUeE1@cluster0.jgnim8g.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const { Schema } = mongoose;

const UserSchema = new Schema({
    id: {
        type: String,
        index: true,
        unique: true,
    },
    nome: String,
    genero: String,
    email: {
        type: String,
        unique: true,
    },
});

const UserModel = mongoose.model('UserModel', UserSchema);

module.exports = {
    UserModel,
};
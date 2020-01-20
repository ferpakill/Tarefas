const mongoose = require('mongoose');

const TarefaSchema = new mongoose.Schema({
    fazer: String,
    tempo: String,
    importancia: Number,
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
});

module.exports = mongoose.model('Tarefa', TarefaSchema);
const Tarefa = require('../model/Tarefa');
const User = require('../model/User');

module.exports={
    async index(req, res){
        const {importancias} = req.query;
        const tarefa = await Tarefa.find({importancia : importancias});
        return res.json(tarefa)
    },

    async store(req, res){
        const { fazer, tempo, importancia } = req.body;
        const { user_id} = req.headers;

        const user = User.findById(user_id)
        if(!user){
            return res.status(400).json({ error: 'Usuario não existe' })
        }

        const tarefa = await Tarefa.create({
            user:user_id,
            fazer,
            tempo,
            importancia
        })
        return res.json(tarefa);
    }
}
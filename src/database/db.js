const  mongoose = require('mongoose')

async function connect(){
    await mongoose.connect(
        'mongodb://0.0.0.0:27017/api-restful'
    )
    console.log('Conectado com sucesso!')
}

connect().catch((err) => console.log(err))


module.exports = {
    connect
}
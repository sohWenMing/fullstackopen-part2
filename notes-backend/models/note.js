require('dotenv').config()

const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const url = process.env.MONGODB_URI

async function connectMongoose() {
    try {
        await mongoose.connect(url)
        console.log("Connected to MongoDB")
    }
    catch(error) {
        console.log("Erroe connecting to MongoDB: ", error.message)
    }
}

const noteSchema = new mongoose.Schema({
    content: String,
    important: Boolean
})

noteSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        console.log("document", document);
        console.log("returned Object", returnedObject)
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

connectMongoose();

module.exports = mongoose.model('Note', noteSchema)





if(process.argv.length < 3) {
    console.log("enter password as argument")
    process.exit(1)
}

const mongoose = require("mongoose");
const password = process.argv[2];
const url = `mongodb+srv://nindgabeet:${password}@cluster0.hb7m3ac.mongodb.net/notesApp?retryWrites=true&w=majority`

mongoose.set('strictQuery', false);
mongoose.connect(url);


const noteSchema = new mongoose.Schema(
    {
        content: String, 
        important: Boolean
    }
)

const Note = mongoose.model("Note", noteSchema);
const note = new Note({
    content: process.argv[3],
    important: process.argv[4] === "true" ? true : false
})

note.save().then((res) => {
    console.log("Note was successfully saved")
    mongoose.connection.close();
})
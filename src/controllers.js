const NotesModel = require('./models');


const NotesControllers = {

    getAllNotes: async (req, res) => {
        try {


            var notes = await NotesModel.find();
            console.log(notes)
            return res.json({
                success: true, data: notes,messege:"Data find Successfully"
            });

        } catch (error) {
            return res.send({ success: false, messege: error })

        }
    },

    NotesGetByUserId: async (req, res) => {
        try {

            var userid = req.body.userID

            var notes = await NotesModel.findOne({ userID: userid });
            console.log(notes);
            return res.json({
                success: true, data: notes, messege: "Data find successfully"
            });

        } catch (error) {
            return res.send({ success: false, messege: error })

        }
    },


    CreateNotes: async (req, res) => {
        try {
            await NotesModel.deleteOne({ id: req.body.id });
            const notes = req.body;
            console.log(notes);
            const newNotes = new NotesModel(notes);
            await newNotes.save();
            return res.json({ success: true, data: newNotes, messege: "Notes Create Successfully" })



        } catch (error) {
            return res.send({ success: false, messege: error })

        }
    },

    DeleteNotes: async (req, res) => {
        try {

            var id = req.body.id;
            var data = await NotesModel.deleteOne({ id: id });

            console.log(data);


            return res.json({ success: true, data: data, messege: "Notes Deleted Successfully" })



        } catch (error) {
            return res.send({ success: false, messege: error })

        }
    }

}


module.exports = NotesControllers
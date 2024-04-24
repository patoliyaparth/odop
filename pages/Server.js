import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';


const app = express();
app.use(cors());
app.use(bodyParser.json());



main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/ODOP');
    console.log("db connected");
}
const userSchema = new mongoose.Schema({
    fname: String,
    mname: String,
    lname: String,
    psd: String
});
const User = mongoose.model('User', userSchema);



app.post('/', async (req, res) => {

    let user = new User();
    user.fname = req.body.fname
    user.mname = req.body.mname
    user.lname = req.body.lname
    user.psd = req.body.psd
    const doc = await user.save();
    console.log(req.body)
    res.json(doc)
})



app.listen(7700, () => {
    console.log("Port connected")
})
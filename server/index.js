import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();
//environment variable file configuration
dotenv.config();

app.use(bodyParser.json({ limit: "25mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "25mb", extended: true }));
app.use(cors());

const PORT = process.env.PORT || 4600;
//create mongodb connection using mongoose ORM library
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT} and mongodb connected`);
}))
.catch((err) => {console.log(err.message)});
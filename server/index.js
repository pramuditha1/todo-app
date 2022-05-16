import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
// import routes
import todoRoutes from './routes/toDos.js';
import {auth} from 'express-oauth2-jwt-bearer';

const app = express();
//environment variable file configuration
dotenv.config();

// app.use(helmet());
app.use(bodyParser.json({ limit: "25mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "25mb", extended: true }));
app.use(cors());
app.use(express.json());
app.use('/todo', todoRoutes);

const DOMAIN = process.env.AUTH0_DOMAIN;
const AUDIANCE = process.env.AUTH0_AUDIENCE;

const checkJwt = auth({
    audience: AUDIANCE,
    issuerBaseURL: `https://${DOMAIN}/`,
  });

// This route needs authentication
app.get('/api/private', checkJwt, function(req, res) {
    res.json({
      message: 'Hello from a private endpoint! You need to be authenticated to see this.'
    });
});

const PORT = process.env.PORT || 4600;
//create mongodb connection using mongoose ORM library
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT} and mongodb connected`);
}))
.catch((err) => {console.log(err.message)});
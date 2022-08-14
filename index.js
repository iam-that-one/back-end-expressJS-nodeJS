import express from 'express';
import bodyParser  from 'body-parser';
import userRoutes from './routs/toDos.js'
const app = express();
const PORT = YOUR_PORT;

import mongoose  from 'mongoose';
mongoose.connect("mongodb+srv://<username>:<passwor>@cluster0.tjvij7f.mongodb.net/<your_database_name>?retryWrites=true&w=majority")


app.use(bodyParser.json());

app.use('/toDos', userRoutes);

app.listen(PORT,()=>{console.log(`Server rudnning on port: http://localhost:${PORT}`)})
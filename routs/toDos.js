import express from 'express'
const router = express.Router();
import {deleteToDo, getToDos} from '../controllers/toDos.js'
import {createToDo,updateToDo} from '../controllers/toDos.js'



router.get('/',getToDos);
router.post('/',createToDo)
router.delete('/:id', deleteToDo)
router.patch('/:id',updateToDo)

export default router;
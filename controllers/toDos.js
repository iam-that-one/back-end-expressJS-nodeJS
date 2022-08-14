import ToDoModel from '../models/ToDo.js';
import mongoose from 'mongoose'
let toDos = [];


const createToDo =  async (req,res)=>{
    
    const toDo = req.body
    const all = {... toDo,_id: req.body._id}
    const newToDo = new ToDoModel(all)
    await newToDo.save()
    .catch(err=>{
        return  res.send({
            message: err
        })
    })
    res.send(toDo)
    }

const deleteToDo = async (req,res)=>{
   const  {id}  = req.params;  
   await ToDoModel.findByIdAndDelete(id)
    .then(toDo => {
        if(!toDo){
            return res.send({
                message: "ToDo not exist"
            })
        }
            res.send({message: "ToDo has been deleted"})
          }).catch(err=>{
                 return  res.send({
                  message: err
              })
     })
   console.log(`toDo with id ${id} has been deleted!`)
 }
const getToDos =  (req,res)=>{
     ToDoModel.find({}, (err,result)=>{
        if (err){
           res.send(err)
        }else{
          res.send(result)
        }
   })
    }

    const updateToDo =  async (req,res,next)=>{
        const {id} = req.params
        console.log("id",id)
        const toDo = req.body
        const options = {new : true}
        try{
        const result = await ToDoModel.findByIdAndUpdate(id,toDo,options)
        res.send({result:result, message: `${id} Updated`})
        }catch (error){
            console.log(error)
        }
    }

export  {createToDo , getToDos, deleteToDo,updateToDo}
import express from "express";
import db from "../mockdb"

const router = express.Router()

router.get("/:id?", async ( req, res, next) =>{
    try{
        const id = req.params.id;
        let data;

        if(id){
            data = await db.getOne(id);
        }
        else{
            data = await db.getAll();
        }
        res.json(data)
    }
    catch(error){
        next(error);
    }
});


router.post("/", async ( req, res, next) =>{
    try{
       const newUser = req.body;
       const data = await db.add(newUser);
       res.json(data);
    }
    catch(error){
        next(error);
    }
});

router.put("/:id", async ( req, res, next) =>{
    try{
       const id = req.params.id;
       const updatedUser = req.body;
       const data = await db.update(newUser);
       res.json(data);
    }
    catch(error){
        next(error);
    }
});

router.delete("/:id", async ( req, res, next) =>{
    try{

       const id = req.params.id
       const data = await db.remove(newUser);
       res.json(data);
    }
    catch(error){
        next(error);
    }
});

export default router;
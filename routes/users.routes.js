import express from "express";
import db from "../mockdb";

const router = express.Router();

// GET request for either one or all users
router.get("/:id?", async (req, res, next) => {
    try {
        const id = req.params.id;
        let data;

        if (id) {
            data = await db.getOne(id);
        } else {
            data = await db.getAll();
        }
        res.json(data);
    } catch (error) {
        next(error);
    }
});


router.post("/", async (req, res, next) => {
    try {
        const newUser = req.body;
        const data = await db.add(newUser);
        res.status(201).json(data); 
    } catch (error) {
        next(error);
    }
});

// PUT request to update an existing user
router.put("/:id", async (req, res, next) => {
    try {
        const id = req.params.id;
        const updatedUser = req.body;
        const data = await db.update(id, updatedUser); 
        res.json(data);
    } catch (error) {
        next(error);
    }
});

// DELETE request to remove a user
router.delete("/:id", async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = await db.remove(id); 
        res.json(data);
    } catch (error) {
        next(error);
    }
});

export default router;
import * as express from "express";
import db from "../db";

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const dbRes = await db.chirps.all();

        res.json(dbRes.reverse());
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});

router.get("/:chirpid", async (req, res, next) => {
    try {
        const chirpid = req.params.chirpid;

        const dbRes = await db.chirps.one(chirpid);

        res.json(dbRes[0]);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});

router.delete("/:chirpid", async (req, res, next) => {
    try {
        const chirpid = req.params.chirpid;

        const dbRes = await db.chirps.deleteOne(chirpid);

        res.send(dbRes);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});

router.post("/", async (req, res, next) => {
    try {
        const userid = req.body.userid;
        const content = req.body.content;

        const dbRes = await db.chirps.insert(userid, content);

        res.send(dbRes);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});

router.put("/:chirpid", async (req, res, next) => {
    try {
        const chirpid = req.params.chirpid;
        const content = req.body.content;

        const dbRes = await db.chirps.edit(content, chirpid);

        res.send(dbRes);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});

export default router;
import * as express from "express";
import db from "../db";

const router = express.Router();

router.get('/:userid', async (req, res, next) => {
    try {
        const userid = req.params.userid;

        const dbRes = await db.users.one(userid);

        res.json(dbRes);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});

router.post("/", async (req, res, next) => {
    try {
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;

        const dbRes = await db.users.insert(name, email, password);

        res.send(dbRes);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});

export default router;
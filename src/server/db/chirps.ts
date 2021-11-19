
import { Query } from "./index";

const all = () => Query("SELECT chirps.id, chirps.content, chirps._created, users.name FROM chirps JOIN users on chirps.userid = users.id");

const one = (chirpid: string) => Query("SELECT chirps.id, chirps.content, chirps._created, users.name FROM chirps JOIN users on chirps.userid = users.id WHERE chirps.id = ?", [chirpid]);

const deleteOne = (chirpid: string) => Query("DELETE FROM chirps WHERE id = ?", [chirpid]);

const insert = (userid: string, content: string) => Query("INSERT INTO chirps (userid, content) VALUES (?, ?)", [userid, content]);

const edit = (content: string, chirpid: string) => Query("UPDATE chirps SET content = ? WHERE chirps.id = ?", [content, chirpid])

export default {
    all,
    one,
    deleteOne,
    insert,
    edit
}
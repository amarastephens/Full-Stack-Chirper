import { Query } from './index'

const all = () => {
    Query("SELECT chirps.id, chirps.content, chirps._created, users.name FROM chirps JOIN users on chirps.userid = users.id"); 
}

const one = (chirpid: string) => {
    Query('SELECT * FROM chirps WHERE id = ?', [chirpid]) 
}
const insert = (userid: string, content: string) => {
Query('INSERT into chirps (userid, content) VALUES (?, ?)', [userid, content])

}
const edit = ( content: string, chirpid: string) => {
    Query('UPDATE chirps SET content = ? WHERE chirps.id = ?', [content, chirpid])

}

const deleteOne = (chirpid: string) => {
    Query('DELETE * FROM chirps WHERE id = ?', [chirpid])
}


export default {
all, one, insert, edit, deleteOne
}
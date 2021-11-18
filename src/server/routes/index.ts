import * as express from "express"; 
import chirpsRouter from "./chirps"
import userRouter from './users'


const router = express.Router(); 

router.use('/chirps', chirpsRouter )
router.use('/users', userRouter)



export default router; 
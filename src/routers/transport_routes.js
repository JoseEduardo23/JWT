//3.Rutas
import {Router} from 'express'
import { verifyToken } from '../middlewares/auth.js'
import { createtransportController, deletetransportController, getALLtransportController, getonetransportController, updatedtransportController } from '../controllers/transport_controller.js';
const router = Router()


//Publicas
router.get('/transport',getALLtransportController)


//Privadas - Admin or employed
router.post('/transport',verifyToken,createtransportController)

router.put('/transport/:id',verifyToken, updatedtransportController)

router.delete('/transport/:id',verifyToken, deletetransportController)

router.get('/transport/:id',verifyToken, getonetransportController)



export default router
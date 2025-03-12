import express from 'express'

import * as clientsControlles from '../controller/clientsControlles.js'

const router = express.Router()

router.get('/clients', clientsControlles.getClients)

export default router;
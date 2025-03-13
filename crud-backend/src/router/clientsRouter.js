import express from 'express'

import * as clientsControlles from '../controller/clientsControlles.js'

const router = express.Router()

router.get('/clients', clientsControlles.getClients)
router.post('/clients', clientsControlles.createClients)
router.put('/clients/:id', clientsControlles.updateClients)

export default router;
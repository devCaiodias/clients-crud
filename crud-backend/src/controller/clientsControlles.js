import * as clientService from '../services/clientsServices.js'

export const getClients = async (req, res) => {
    try {
        const clients = await clientService.getClients();
        res.status(200).json(clients);
    }catch (err) {
        console.error('Error fetching clients:', err);
        res.status(500).json({message: 'internal serve'})
    }
}
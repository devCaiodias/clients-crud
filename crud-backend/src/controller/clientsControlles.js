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

export const createClients = async (req, res) => {
    try {
        const clientData = req.body;
        const newClient = await clientService.createClient(clientData)
        res.status(200).json(newClient);
    }catch (err) {
        console.error('Error create clients:', err);
        res.status(500).json({message: 'internal serve'})
    }
}

export const updateClients = async (req, res) => {
    try {
        const clientId = req.params.id
        const clientData = req.body
        const updateClientt = await clientService.updateClient(clientData, clientId)
        if (!updateClientt) {
            return res.status(404).json({message: 'internal serve'})
        }

        res.status(200).json(updateClientt)
    }catch (err) {
        console.error('Error update clients:', err);
        res.status(500).json({message: 'internal serve'})
    }
}

export const deleteClients = async (req, res) => {
    try {
        const clientId = req.params.id
        const deleteClientt = await clientService.deleteClient(clientId)
        if (!deleteClientt) {
            return res.status(404).json({message: 'internal serve'})
        }

        res.status(200).send("Foi deletado com sucesso!")
    }catch (err) {
        console.error('Error delete clients:', err);
        res.status(500).json({message: 'internal serve'})
    }
}

export const searchClients = async (req, res) => {
    try {
        const searchClientt = req.query.q;
        const clients = await clientService.searchClient(searchClientt);
        res.status(200).json(clients)
    }catch (err) {
        console.error('Error delete clients:', err);
        res.status(500).json({message: 'internal serve'})
    }
}
import { query } from "../db.js";

export const getClients = async () => {
    const {rows} = await query('SELECT * FROM clients_db')
    return rows;
}

export const createClient = async (clientData) => {
    const {name, email, job, rate, isactive} = clientData;

    const {rows} = await query(
            `INSERT INTO clients_db (name, email, job, rate, isactive) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
            [name, email, job, rate, isactive]
        );

    return rows[0];
}

export const updateClient = async (clientData, clientsId) => {
    const {name, email, job, rate, isactive} = clientData;

    const {rows} = await query(
            `UPDATE clients_db SET name = $1, email = $2, job = $3, rate = $4, isactive = $5 
            WHERE id = $6 RETURNING *`,
            [name, email, job, rate, isactive, clientsId]
        );

    return rows[0];
}

export const deleteClient = async (clientsId) => {
    const {rowCount} = await query(`DELETE FROM clients_db WHERE id = $1`, [clientsId])
    return rowCount > 0
}

export const searchClient = async (searchIterm) => {
    const { rows} = await query(
        `SELECT * FROM clients_db WHERE name ILIKE $1 OR email ILIKE $1 OR job ILIKE $1`, [`%${searchIterm}%`]
    )
    return rows;
}
'use client'
import { useEffect, useState } from 'react';
import style from '../../../styles/TableList.module.css';
import axios from 'axios';

interface Client {
    id: number;
    name: string;
    email: string;
    job: string;
    rate: string;
    isactive: boolean;
}

export default function TableList({handleOpen, search}: any) {

    const [tableData, setTableData] = useState<Client[]>([])
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fechData = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/clients/")
                setTableData(response.data)
            } catch (err: any) {
                setError(err?.message || "Ocorreu um erro ao buscar os dados.");
            }
        }

        fechData()
    }, [])

    const filtradoData = tableData.filter(client => 
        client.name.toLowerCase().includes(search.toLowerCase()) ||
        client.email.toLowerCase().includes(search.toLowerCase()) ||
        client.job.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <>

            {error && <div>{error}</div>}
            <div className={style.div_table}>
                <table className={style.table_}>
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>email</th>
                        <th>Job</th>
                        <th>rate</th>
                        <th>isactive</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    {filtradoData.map((client) => (
                            <tr key={client.id}>
                                <th>{client.id}</th>
                                <td>{client.name}</td>
                                <td>{client.email}</td>
                                <td>{client.job}</td>
                                <td>{client.rate}</td>
                                <td><button className={`${style.btn} ${client.isactive ? `${style.btn_isactive}  ` : `${style.btn_isoff}`}`}>{client.isactive ? 'Active' : 'Inactive'}</button></td>
                                <td>
                                    <button onClick={() => handleOpen("edit")} className={style.btn_update}>Update</button>
                                </td>
                                <td>
                                    <button className={style.btn_delete}>Delete</button>
                                </td>
                            </tr>
                        )
                    )}
                    </tbody>
                </table>
            </div>
        </>
    )
}
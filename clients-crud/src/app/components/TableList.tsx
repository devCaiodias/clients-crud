'use client'
import style from '../../../styles/TableList.module.css';

export default function TableList({handleOpen}: any) {

    let clients = [
        {nome: "Caio", email: "Caio@gmail.com", job: "Developer", rate: "100", isactive: true},
        {nome: "Vin", email: "Vin@gmail.com", job: "Developer", rate: "100", isactive: true},
        {nome: "Joao", email: "Joao@gmail.com", job: "Developer", rate: "100", isactive: false},
        {nome: "Debora", email: "Debora@gmail.com", job: "Developer", rate: "100", isactive: true},
    ]

    return (
        <>
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
                    {clients.map((client, index) => {
                        return (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{client.nome}</td>
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
                    })}
                    </tbody>
                </table>
            </div>
        </>
    )
}
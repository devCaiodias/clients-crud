import style from '../../../styles/Navbar.module.css';

export default function NavBar() {
    return (
        <div className={style.navbar}>
            <h3>Clients</h3>
            <input type="text" placeholder="Shearch" className={style.input_nav} />
            <button className={style.btn_add}>Add Client</button>
        </div>
    )
}
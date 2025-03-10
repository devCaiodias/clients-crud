import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./components/NavBar";
import TableList from "./components/TableList";

export default function Home() {
  return (
    <>  
      <NavBar />
      <TableList />
    </>
  );
}

'use client'
import NavBar from "./components/NavBar";
import TableList from "./components/TableList";
import ModalFrom from "./components/ModalForm";
import { useState } from "react";
import style from '../app/page.module.css'
import axios from "axios";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState('add');
  const [search, setSearch] = useState("")

  const handleOpen = (mode: any) => { 
    setIsOpen(true)
    setModalMode(mode)
  }

  const handleSubimit = () => {
    if (modalMode === 'add') {
      console.log('modal mode add')
    }else {
      console.log('modal mode Edit')
    }
  }

  return (
    <div className={style.main}>  
      <NavBar onOpen={() => handleOpen('add')} onSearch={setSearch} />
      <TableList className={style.tablelist} handleOpen={handleOpen} search={search} />
      <ModalFrom 
      isOpen={isOpen} 
      onSubimit={handleSubimit}
      onClose={() => setIsOpen(false)}
      mode={modalMode}/>
    </div>
  );
}

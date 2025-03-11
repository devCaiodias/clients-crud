import style from "../../../styles/ModalFrom.module.css";

export default function ModalFrom({ isOpen, onClose, mode, onSubimit }: any) {
  return (
    <>
      <dialog id="my_modal_3" className={style.modal} open={isOpen}>
        <div className={style.modal_box}>
          <h1 className={style.modal_h1}>
            {mode === "edit" ? "Edit Client" : "Client Details"}
          </h1>
          <form method="dialog">
            <button className={style.btn_close} onClick={onClose}>
              ✕
            </button>
            <button className={style.btn_confirme}>{mode === "edit" ? "Save Change" : "Add Client"}</button>
          </form>
        </div>
      </dialog>
    </>
  );
}

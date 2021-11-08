
import style from "../components/style.module.css"

export default function Header() {
    return (
        <div id="myDIV" className={style.header}>
            <h2 className={style.textHeader} style={{margin:"10px"}}>My To Do List</h2>
        </div>
    )
}
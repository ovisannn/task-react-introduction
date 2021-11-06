import style from "./Header.module.css"

export default function Header () {
    return (
        <div className={style.container}>
            <h1 className={style.textHeader}>To Do App</h1>
            <hr />
        </div>
    )
    
    
}
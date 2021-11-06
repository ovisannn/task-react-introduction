import style from "../components/style.module.css"
const ListItem = ({item, hapusList, ubahCeklis}) => {


    return (

        //Ini di loop sebanyak data state
        
        <tr className={style.boxCenter}>
            <td style={item.completed ? {textDecoration:"line-through"} : {}}>{item.title}</td>
            <td>
                <input type="checkbox" defaultChecked={item.completed} onChange={() => {
                    ubahCeklis(item.id)
                }}/>
            </td>
            <td>
                <button className={style.buttonDelete} onClick={()=>{hapusList(item.id)}}>Hapus</button>
            </td>
        </tr>
    )
}

export default ListItem;
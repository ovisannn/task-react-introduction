import { useHistory } from "react-router";
import style from "../components/style.module.css"

const ListItem = ({item, hapusList, ubahCeklis, props}) => {

    const {id, title, completed} = item;

    const history = useHistory();
    const detailProfil = () => {
        
        history.push({
            pathname: `/profile/${title}`,
            state : {
                data : props
            }
            
        })
    }
    

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
                <button className='btn btn-danger' onClick={()=>{hapusList(item.id)}}>Hapus</button>
                <br />
                <button className='btn btn-secondary my-2' onClick={detailProfil}>Detail</button>
            </td>
        </tr>
    )
}

export default ListItem;
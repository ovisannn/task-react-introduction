import { useHistory } from "react-router";
import style from "../components/style.module.css"

const ListItem = (props) => {


    const history = useHistory();
    const detailProfil = () => {
        // console.log("props", props)

        history.push({

            pathname: `/profile/${props.item.id}`,
            state : {
                data : props.item
            }
        })
    }


    return (

        //Ini di loop sebanyak data state

        <tr className={style.boxCenter}>
            <td style={props.item.completed ? {textDecoration:"line-through"} : {}}>{props.item.title}</td>
            <td>
                <input type="checkbox" defaultChecked={props.item.completed} onChange={() => {
                    props.ubahCeklis(props.item.id)
                }}/>
            </td>
            <td>
                <button className='btn btn-danger' onClick={()=>{props.hapusList(props.item.id)}}>Hapus</button>
                <br />
                <button className='btn btn-secondary my-2' onClick={detailProfil}>Detail</button>
            </td>
        </tr>
    )
}

export default ListItem;
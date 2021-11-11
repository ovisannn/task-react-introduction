

import ListItem from "./ListItem";
import style from "../components/style.module.css"
import ListInput from "./ListInput";
import { useSelector, useDispatch } from "react-redux";
import { hapusList, ubahCeklis } from "../../store/dataSlice";



const ListTugas = (props) => {
    // const{data, hapusList, tambahList, ubahCeklis} = props //ambil variabel data dan hapus list dari props

    const dataForms = useSelector((state) => state.formData.formDatas)

    return (
        <div className={style.container}>

            <ListInput/>

            <br /><br />

            <table style={{margin:"auto"}}>
                <thead style={{textAlign:"center", margin:"0px"}}>
                    <td style={{ padding:"20px", textAlign:"center"}} width={"300px"}>Tugas</td>
                    <td style={{ padding:"20px", textAlign:"center"}} width={"100px"}>Status</td>
                    <td style={{ padding:"20px", textAlign:"center"}} width={"100px"}>Aksi</td>

                </thead>
                <tbody>
                    {dataForms.map((x) => <ListItem key={x.id} item = {x} />)}
                </tbody>

            </table>
        </div>
    )
}

export default ListTugas;
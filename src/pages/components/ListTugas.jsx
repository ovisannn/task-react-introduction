
import ListItem from "./ListItem";
import style from "../components/style.module.css"
import ListInput from "./ListInput";



const ListTugas = (props) => {
    const{data, hapusList, tambahList, ubahCeklis} = props //ambil variabel data dan hapus list dari props

    return (
        <div className={style.container}>

            <ListInput tambahList={tambahList} ubahCeklis={ubahCeklis}/>

            <br /><br />

            <table style={{margin:"auto"}}>
                <thead style={{textAlign:"center", margin:"0px"}}>
                    <td style={{ padding:"20px", textAlign:"center"}} width={"300px"}>Tugas</td>
                    <td style={{ padding:"20px", textAlign:"center"}} width={"100px"}>Status</td>
                    <td style={{ padding:"20px", textAlign:"center"}} width={"100px"}>Aksi</td>

                </thead>
                <tbody>
                    {data.map((x) => <ListItem key={x.id} item = {x} hapusList ={hapusList} ubahCeklis ={ubahCeklis}/>)}
                </tbody>

            </table>
        </div>
    )
}

export default ListTugas;
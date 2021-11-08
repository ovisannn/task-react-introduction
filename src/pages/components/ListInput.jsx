import { useState } from "react/cjs/react.development";
import style from "../components/style.module.css"


function ListInput(props){
    const [data, setData] = useState({
        item: "",
    })
    const onChange = (e) => {
        setData({...data,
            [e.target.name] : e.target.value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const formIsNotEmpty = data.item;

        if (formIsNotEmpty) {
            const newData = {
                item : data.item,
            }
            
            props.tambahList(newData);

            setData({
                item: "",

            })
        } else {
            alert("Data masih ada yang kosong")
        }
    }
    return (
        <div>
            <input type="text" name="item" className={style.inputFill} onChange={onChange} value={data.item} />
            <button className={style.buttonInput} value={data.item} onClick={handleSubmit} >Tambah</button>
        </div>
    )     
}


export default ListInput;
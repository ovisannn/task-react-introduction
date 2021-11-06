import { Component } from "react";
import style from "../components/style.module.css"


class ListInput extends Component {
    state = {
        item: "",
    }
    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
        setTimeout(() => {
            console.log(e.target.value)
            console.log(this.state.item)
        }, 1000);
        
    }


    handleSubmit = (e) => {
        e.preventDefault();
        const formIsNotEmpty = this.state.item;

        if (formIsNotEmpty) {
            const newData = {
                item : this.state.item,
            }
            
            this.props.tambahList(newData);

            this.setState({
                item: "",

            })
        } else {
            alert("Data masih ada yang kosong")
        }
    }
    render () {
        return (
            <div>
                <input type="text" name="item" className={style.inputFill} onChange={this.onChange} value={this.state.item} />
                <button className={style.buttonInput} value={this.state.item} onClick={this.handleSubmit} >Tambah</button>
            </div>
        )
    }
        
        
}


export default ListInput;
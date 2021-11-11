import { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import Header from "./Header"
import ListTugas from "./ListTugas"


// const initialValue = [

//   {
//     "id": uuidv4(),

//     "title": "Membuat Komponen",

//     "completed": true,

//   },

//   {

//     "id": uuidv4(),

//     "title": "Unit Testing",

//     "completed": false,

//   },

//   {

//     "id": uuidv4(),

//     "title": "Setup Development Environment",

//     "completed": true,

//   },

//   {

//     "id": uuidv4(),

//     "title": "Deploy ke server",

//     "completed": false,

//   },
// ]

function Home() {
    // const [data, setData] = useState(initialValue)

    // const hapusList = id => {
    //   setData((oldData) => oldData.filter((x)=> x.id !== id))
    // }


    // // const newListTugas = this.state.data.filter((item)=> item.id !== id) //id nya bukan itu
    // // this.setState({data: newListTugas}) //RETURN

    // const tambahList = newList => {
    //   const tambahList = {id:uuidv4(), completed:false, title: newList.item}

    //   setData((oldData) =>{
    //     return [...oldData, tambahList]
    //   })
    // }


    // const ubahCeklis = (id) => {
    //     let index = data.findIndex(
    //       function (item) {
    //         return item.id === id;
    //       }
    //     )
    //     let dataCeklis = data
    //     dataCeklis[index].completed = !dataCeklis[index].completed

    //     setData((data) => {return [...dataCeklis]})
    // }

  return (
      <>
          <Header/>
          <ListTugas/>
      </>
  )
}
export default Home
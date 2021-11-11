import { createSlice } from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid'


const initialValue = [

    {
      "id": uuidv4(),

      "title": "Membuat Komponen",

      "completed": true,

    },

    {

      "id": uuidv4(),

      "title": "Unit Testing",

      "completed": false,

    },

    {

      "id": uuidv4(),

      "title": "Setup Development Environment",

      "completed": true,

    },

    {

      "id": uuidv4(),

      "title": "Deploy ke server",

      "completed": false,

    },
]

export const dataSlice = createSlice({
    name : "formData",
    initialState : {
        formDatas : initialValue
    },

    reducers : {
        hapusList : (state, action ) => {
            state.formDatas = state.formDatas.filter((x)=> x.id !== action.payload)
        },
        tambahList : (state, action) => {
            const tambahList = {id:uuidv4(), completed:false, title: action.payload.item} // aslinya pake item

            state.formDatas = [...state.formDatas, tambahList]
        },
        ubahCeklis : (state, action) => {
            let index = state.formDatas.findIndex(
                function (item) {
                  return item.id === action.payload;
                }
              )
              let dataCeklis = state.formDatas
              dataCeklis[index].completed = !dataCeklis[index].completed

              state.formDatas = [...state.formDatas]
        },
    }
})


export const {hapusList, tambahList, ubahCeklis} = dataSlice.actions;
export default dataSlice.reducer;
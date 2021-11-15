import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialValue = [
  {
    nama: "",
    email: "",
    nomorHp: "",
    nationality: "",
    pesan: "",
  },
];

export const dataSlice = createSlice({
  name: "formData",
  initialState: {
    formDatas: initialValue,
  },

  reducers: {
    tambahList: (state, action) => {
      const tambahList = {
        id: uuidv4(),
        completed: false,
        title: action.payload.item,
      };
      state.formDatas = [tambahList];
    },
  },
});

export const { tambahList } = dataSlice.actions;
export default dataSlice.reducer;

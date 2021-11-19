import { useState } from "react";
import Popup from "./Popup";
import "./Home.css";
import { useMutation } from "@apollo/client";

const FormEdit = ({
  id,
  nama,
  jenisKelamin,
  umur,
  updateUmurById,
  valueId,
}) => {
  const [data, setData] = useState({
    id: id,
    nama: nama,
    jenisKelamin: jenisKelamin,
    umur: umur,
  });
  const [isOpen, setIsOpen] = useState(false);
  const [updateUmur, { loading: loadingUpdate }] = useMutation(updateUmurById);

  if (loadingUpdate) {
    return <h5>Loading....</h5>;
  }

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
    console.log(name, value);
  };
  const onUpdate = (idx) => {
    updateUmur({
      variables: {
        _eq: idx,
        jenis_kelamin: data.jenisKelamin,
        nama: data.nama,
        umur: data.umur,
      },
    });
    togglePopup();
  };

  return (
    <div>
      <input type="button" value="Edit" onClick={togglePopup} />
      {isOpen && (
        <Popup
          content={
            <>
              <label htmlFor="nama">Nama : </label>
              <input
                name="nama"
                type="text"
                value={data.nama}
                onChange={onChange}
              />
              <br />
              <br />

              <label htmlFor="jenisKelamin">Jenis Kelamin : </label>
              <select
                id="lang"
                name="jenisKelamin"
                // onChange={onChangeJenisKelamin}
                value={data.jenisKelamin}
                onChange={onChange}
              >
                <option value="select">Select</option>
                <option value="laki-laki">Laki-Laki</option>
                <option value="perempuan">Perempuan</option>
              </select>
              <br />
              <br />

              <label htmlFor="umur">Umur : </label>
              <input
                name="umur"
                type="number"
                value={data.umur}
                onChange={onChange}
              />
              <br />
              <button
                onClick={() => {
                  onUpdate(valueId);
                }}
              >
                Update
              </button>
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </div>
  );
};

export default FormEdit;

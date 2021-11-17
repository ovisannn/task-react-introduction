import ListItem from "./ListItem";

import { gql, useLazyQuery } from "@apollo/client";
import { useState } from "react";
import LoadingSvg from "./LoadingSvg";

const GetTodoList = gql`
  query MyQuery($id_user: Int!, $jenis_kelamin: String = "") {
    anggota(
      where: { id: { _eq: $id_user }, jenis_kelamin: { _eq: $jenis_kelamin } }
    ) {
      id
      jenis_kelamin
      nama
      umur
    }
  }
`;

const ListPassenger = () => {
  const [getTodo, { data, loading, error }] = useLazyQuery(GetTodoList);
  const [userId, setUserId] = useState([]);
  const [jenisKelamin, setJenisKelamin] = useState([]);
  const [list, setList] = useState([]);

  if (loading) {
    return <LoadingSvg />;
  }
  if (error) {
    console.log(error);
    return null;
  }

  const getData = () => {
    getTodo({
      variables: {
        id_user: userId,
        jenis_kelamin: jenisKelamin,
      },
    });
    setList(data?.todolist);
  };
  const onChangeUserId = (e) => {
    if (e.target) {
      setUserId(e.target.value);
    }
  };
  const onChangeJenisKelamin = (e) => {
    if (e.target) {
      setJenisKelamin(e.target.value);
    }
  };
  const hapusPengunjung = (id) => {
    // this.setState({
    //   data: [
    //     ...this.state.data.filter((item) => {
    //       return item.id !== id;
    //     }),
    //   ],
    // });
  };

  return (
    <div>
      <input
        type="text"
        value={userId}
        onChange={onChangeUserId}
        placeholder="User ID"
      />
      <br />
      {/* <input
        type="text"
        value={jenisKelamin}
        onChange={onChangeJenisKelamin}
        placeholder="laki-laki/perempuan"
      /> */}
      <select id="lang" onChange={onChangeJenisKelamin} value={jenisKelamin}>
        <option value="select">Select</option>
        <option value="laki-laki">Laki-Laki</option>
        <option value="perempuan">Perempuan</option>
      </select>
      <br />

      <button onClick={getData}>Get Data</button>
      <table cellPadding="5px" cellSpacing="0" style={{ margin: "auto" }}>
        <thead bgcolor="red">
          <td>ID</td>
          <td>Nama</td>
          <td>Umur</td>
          <td>Jenis Kelamin</td>
          <td bgcolor="white" className="removeBorder"></td>
        </thead>
        {data?.anggota.map((value, item) => (
          <ListItem
            key={item}
            id={value.id}
            nama={value.nama}
            jenisKelamin={value.jenis_kelamin}
            umur={value.umur}
            hapusPengunjung={() => hapusPengunjung()}
          />
        ))}
      </table>
    </div>
  );
};

export default ListPassenger;

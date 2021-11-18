import ListItem from "./ListItem";

import { gql, useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import LoadingSvg from "./LoadingSvg";
import PassengerInput from "./PassengerInput";

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
const getAll = gql`
  query MyQuery {
    anggota {
      id
      jenis_kelamin
      nama
      umur
    }
  }
`;
const updateUmurById = gql`
  mutation MyMutation($id: Int!, $umur_user: Int!) {
    update_anggota_by_pk(pk_columns: { id: $id }, _set: { umur: $umur_user }) {
      id
      umur
    }
  }
`;

const deleteById = gql`
  mutation MyMutation($id: Int = 10) {
    delete_anggota_by_pk(id: $id) {
      id
    }
  }
`;

const insertById = gql`
  mutation MyMutation(
    $nama: String = ""
    $jenis_kelamin: String = ""
    $umur_user: Int = 10
  ) {
    insert_anggota_one(
      object: { jenis_kelamin: $jenis_kelamin, nama: $nama, umur: $umur_user }
    ) {
      id
      nama
      jenis_kelamin
    }
  }
`;

const ListPassenger = () => {
  const { data, loading, error } = useQuery(getAll);
  // const [getTodo, { data, loading, error }] = useLazyQuery(GetTodoList);
  const [updateUmur, { loading: loadingUpdate }] = useMutation(updateUmurById);
  const [deleteUser, { loading: loadingDelete }] = useMutation(deleteById, {
    refetchQueries: [getAll],
  });
  const [insertUser, { loading: loadingInsert }] = useMutation(insertById, {
    refetchQueries: [getAll],
  });
  const [userId, setUserId] = useState([]);
  const [umur, setUmur] = useState([]);
  const [jenisKelamin, setJenisKelamin] = useState([]);
  const [list, setList] = useState([]);

  // INSERT
  const [insertNama, setInsertNama] = useState([]);

  if (loading || loadingUpdate || loadingDelete || loadingInsert) {
    return <LoadingSvg />;
  }
  if (error) {
    console.log(error);
    return null;
  }

  const getData = () => {
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
  const onChangeUmur = (e) => {
    if (e.target) {
      setUmur(e.target.value);
    }
  };
  const onClickItem = (idx) => {
    updateUmur({
      variables: {
        id: idx,
        umur_user: umur,
      },
    });
  };
  const hapusPengunjung = (idx) => {
    deleteUser({
      variables: {
        id: idx,
      },
    });
  };
  // INSERT
  const onChangeInsertNama = (e) => {
    if (e.target) {
      setInsertNama(e.target.value);
    }
  };
  const handleSubmit = () => {
    insertUser({
      variables: {
        nama: insertNama,
        jenis_kelamin: jenisKelamin,
        umur_user: umur,
      },
    });
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
      <select id="lang" onChange={onChangeJenisKelamin} value={jenisKelamin}>
        <option value="select">Select</option>
        <option value="laki-laki">Laki-Laki</option>
        <option value="perempuan">Perempuan</option>
      </select>
      <br />
      <button onClick={getData}>Get Data</button>
      <h3>Update Umur</h3>
      <input
        type="text"
        value={umur}
        onChange={onChangeUmur}
        placeholder="Masukkan umur disini"
      />
      <br />
      <br />
      <table cellPadding="5px" cellSpacing="0" style={{ margin: "auto" }}>
        <thead bgcolor="red">
          <td>Nomor</td>
          <td>ID</td>
          <td>Nama</td>
          <td>Umur</td>
          <td>Jenis Kelamin</td>
          <td bgcolor="white" className="removeBorder"></td>
        </thead>
        {data?.anggota.map((value, i) => (
          <ListItem
            key={value.id}
            no={i + 1}
            id={value.id}
            nama={value.nama}
            jenisKelamin={value.jenis_kelamin}
            umur={value.umur}
            hapusPengunjung={() => hapusPengunjung(value.id)}
            updateUmurClick={() => onClickItem(value.id)}
          />
        ))}
      </table>
      <br />
      <br />
      <div onSubmit={handleSubmit}>
        <p>Masukkan Nama Anda</p>
        <input
          type="text"
          className="input-text"
          placeholder="Nama anda ..."
          value={insertNama}
          name="nama"
          onChange={onChangeInsertNama}
        />
        <p>Masukkan Umur Anda</p>
        <input
          type="number"
          className="input-text"
          placeholder="Umur anda ..."
          value={umur}
          name="umur"
          onChange={onChangeUmur}
        />
        <select id="lang" onChange={onChangeJenisKelamin} value="ha">
          <option value="select">Select</option>
          <option value="laki-laki">Laki-Laki</option>
          <option value="perempuan">Perempuan</option>
        </select>
        <p></p>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default ListPassenger;

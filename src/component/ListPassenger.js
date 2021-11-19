import ListItem from "./ListItem";

import { gql, useMutation, useSubscription } from "@apollo/client";
import { useState } from "react";
import LoadingSvg from "./LoadingSvg";

const updateUmurById = gql`
  mutation MyMutation(
    $_eq: Int = 10
    $id: Int = 10
    $jenis_kelamin: String = ""
    $nama: String = ""
    $umur: Int = 10
  ) {
    update_anggota(
      where: { id: { _eq: $_eq } }
      _set: { jenis_kelamin: $jenis_kelamin, nama: $nama, umur: $umur }
    ) {
      returning {
        id
      }
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

const subscriptionAnggota = gql`
  subscription MySubscription($where: anggota_bool_exp = {}) {
    anggota(where: $where, order_by: { id: asc }) {
      id
      jenis_kelamin
      nama
      umur
    }
  }
`;

const ListPassenger = () => {
  const [subsQuery, setSubsQuery] = useState({ variables: { where: {} } });
  const { data, loading, error } = useSubscription(
    subscriptionAnggota,
    subsQuery
  );

  const [updateUmur, { loading: loadingUpdate }] = useMutation(updateUmurById);
  const [deleteUser, { loading: loadingDelete }] = useMutation(deleteById);
  const [insertUser, { loading: loadingInsert }] = useMutation(insertById);

  const [userId, setUserId] = useState([]);
  const [jenisKelamin, setJenisKelamin] = useState([]);
  const [umur, setUmur] = useState([]);
  const [insertNama, setInsertNama] = useState([]);

  // INSERT

  if (loading || loadingUpdate || loadingDelete || loadingInsert) {
    return <LoadingSvg />;
  }
  if (error) {
    console.log(error);
    return null;
  }
  const getAllDataById = () => {
    setSubsQuery({
      variables: {
        where: {
          id: {
            _eq: userId,
          },
        },
      },
    });
  };
  const getAllByJenisKelamin = () => {
    setSubsQuery({
      variables: {
        where: {
          jenis_kelamin: {
            _eq: jenisKelamin,
          },
        },
      },
    });
    setJenisKelamin("select");
  };
  const resetAll = () => {
    setSubsQuery({
      variables: {
        where: {},
      },
    });
    setUserId("");
    setInsertNama("");
    setUmur("");
    setJenisKelamin("");
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
        _eq: idx,
        jenisKelamin: jenisKelamin,
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
    resetAll();
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
      <button onClick={getAllDataById}>Get Data By ID</button>
      <br />
      <select id="lang" onChange={onChangeJenisKelamin} value={jenisKelamin}>
        <option value="select">Select</option>
        <option value="laki-laki">Laki-Laki</option>
        <option value="perempuan">Perempuan</option>
      </select>
      <br />

      <button onClick={getAllByJenisKelamin}>Get Data By Jenis Kelamin</button>
      <br />
      <button onClick={resetAll}>Reset</button>

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
            updateUmurById={updateUmurById}
            valueId={value.id}
          />
        ))}
      </table>
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

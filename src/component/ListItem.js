import "./Home.css";

const ListItem = ({
  id,
  nama,
  jenisKelamin,
  umur,
  hapusPengunjung,
  updateUmurClick,
  no,
}) => {
  // const { id, nama, umur, jenisKelamin } = props.data;

  return (
    <tr>
      <td>{no}</td>
      <td>{id}</td>
      <td>{nama}</td>
      <td>{umur}</td>
      <td>{jenisKelamin}</td>
      <td className="removeBorder">
        <button onClick={hapusPengunjung}>Hapus</button>
        <button onClick={updateUmurClick}>Update Umur {nama}</button>
      </td>
    </tr>
  );
};

export default ListItem;

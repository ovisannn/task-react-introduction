import "./Home.css";

const ListItem = ({ id, nama, jenisKelamin, umur, hapusPengunjung }) => {
  // const { id, nama, umur, jenisKelamin } = props.data;

  return (
    <tr>
      <td>{id}</td>
      <td>{nama}</td>
      <td>{umur}</td>
      <td>{jenisKelamin}</td>
      <td className="removeBorder" onClick={hapusPengunjung}>
        <button>Hapus</button>
      </td>
    </tr>
  );
};

export default ListItem;

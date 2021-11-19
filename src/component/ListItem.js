import FormEdit from "./FormEdit";
import "./Home.css";

const ListItem = ({
  no,
  id,
  nama,
  jenisKelamin,
  umur,
  hapusPengunjung,
  updateUmurById,
  valueId,
}) => {
  // const { id, nama, umur, jenisKelamin } = props.data;

  return (
    <tr>
      <td>{no}</td>

      <td>{id}</td>
      <td>{nama}</td>
      <td>{umur}</td>
      <td>{jenisKelamin}</td>
      <td className="removeBorder" onClick={hapusPengunjung}>
        <button>Hapus</button>
      </td>
      <td className="removeBorder">
        <FormEdit
          id={id}
          nama={nama}
          umur={umur}
          jenisKelamin={jenisKelamin}
          updateUmurById={updateUmurById}
          valueId={valueId}
        />
      </td>
    </tr>
  );
};

export default ListItem;

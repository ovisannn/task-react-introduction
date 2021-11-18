import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import PassengerInput from "./PassengerInput";
import ListPassenger from "./ListPassenger.js";
import Header from "./Header";

// const GetTodoList = gql`
//   query MyQuery {
//     todolist {
//       id
//       is_done
//       title
//     }
//   }
// `;

class Home extends Component {
  // constructor(props)
  //   super(props);
  //   this.state = {
  //     data: [
  //       {
  //         id: uuidv4(),
  //         nama: "Yoga",
  //         umur: 22,
  //         jenisKelamin: "Pria",
  //       },
  //       {
  //         id: uuidv4(),
  //         nama: "Ria",
  //         umur: 19,
  //         jenisKelamin: "Wanita",
  //       },
  //       {
  //         id: uuidv4(),
  //         nama: "Fahmi",
  //         umur: 25,
  //         jenisKelamin: "Pria",
  //       },
  //       {
  //         id: uuidv4(),
  //         nama: "Lala",
  //         umur: 21,
  //         jenisKelamin: "Wanita",
  //       },
  //       {
  //         id: uuidv4(),
  //         nama: "Ivan",
  //         umur: 25,
  //         jenisKelamin: "Pria",
  //       },
  //     ],
  //   };
  // }

  render() {
    return (
      <div>
        <Header />
        <ListPassenger
        // data={this.state.data}
        // hapusPengunjung={this.hapusPengunjung}
        />
      </div>
    );
  }
}
export default Home;

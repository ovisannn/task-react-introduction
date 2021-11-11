import axios from "axios";
import { useState } from "react";

const API = "https://fakestoreapi.com/products";

export default function CobaTes() {
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  async function showData(event) {
    let result;

    try {
      result = await axios.get(`${API}`);
      console.log(result);
      setData(result.data);
    } catch (error) {
      setError(error);
    }
  }
  return (
    <div className="row">
      <button onClick={showData}>
        <a href="#" class="btn btn-primary">
          Go somewhere
        </a>
      </button>
      {data.map((x) => (
        <div className="col-3">
          <div className="card-deck">
            <div className="card" style={{ width: "18rem" }}>
              <img src={x.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{x.title}</h5>
                <p className="card-text">Desc : {x.description}</p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

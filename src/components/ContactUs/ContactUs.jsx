import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./asset/logo.png";

const ContactUs = () => {
  const dataForm = {
    nama: "",
    email: "",
    nomorHp: "",
    nationality: "",
    pesan: "",
  };
  const baseError = {
    nama: "",
    email: "",
    nomorHp: "",
  };

  const [data, setData] = useState(dataForm);
  const [error, setError] = useState(baseError);

  const regexNama = /^[a-z A-Z]+$/;
  const regexNum = /^.{9,14}$/;
  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "nama") {
      if (regexNama.test(value)) {
        setError({ ...error, nama: "" });
      } else {
        setError({
          ...error,
          nama: "Nama harus menggunakan huruf saja tanpa angka",
        });
      }
    }
    if (name === "email") {
      if (regexEmail.test(value)) {
        setError({ ...error, email: "" });
      } else {
        setError({
          ...error,
          email: "Masukkan email dengan format yang sesuai",
        });
      }
    }
    if (name === "nomorHp") {
      if (regexNum.test(value)) {
        setError({ ...error, nomorHp: "" });
      } else {
        setError({
          ...error,
          nomorHp: "Nomor harus terdiri dari 9-14 karakter saja",
        });
      }
    }

    setData({
      ...data,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    if (error.nama === "" && error.email === "" && error.noHandphone === "") {
      alert(`Data dari " ${data.nama} berhasil diinput`);
      return false;
    } else {
      alert("Data yang anda masukkan tidak sesuai");
    }
    e.preventDefault();
  };

  return (
    <>
      <section className="container-fluid">
        <div className="row">
          <div className="col-md-5 m-0 p-0">
            <div className="image-form">
              <div className="image-fill">
                <div className="image-logo">
                  <img src={logo} alt="" width="95%" />\
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-7 text-right motto-top-img">
            <div className="container" style={{ marginTop: "100px" }}>
              <form className="px-5" action="validasi.html">
                <h2 style={{ fontSize: "28px", fontWeight: 400 }}>
                  Contact us
                </h2>
                <br />
                <div className="form-group">
                  <label htmlFor="fullName">
                    Full Name
                    <p
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        display: "inline",
                      }}
                    >
                      *
                    </p>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    name="nama"
                    aria-describedby="emailHelp"
                    placeholder="Your full name here"
                    onChange={handleInput}
                    value={data.nama}
                    required
                  />
                  <label className="text-danger mb-1">
                    {error.nama ? error.nama : ""}
                  </label>
                </div>
                <div className="form-group">
                  <label htmlFor="emailaddres">
                    Email Address
                    <p
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        display: "inline",
                      }}
                    >
                      *
                    </p>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="emailaddres"
                    name="email"
                    aria-describedby="emailHelp"
                    placeholder="example@domail.com"
                    onChange={handleInput}
                    value={data.email}
                    required
                  />
                  <label className="text-danger mb-1">
                    {error.email ? error.email : ""}
                  </label>
                </div>
                <div className="form-group">
                  <label htmlFor="phoneNum">
                    Phone Number
                    <p
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        display: "inline",
                      }}
                    >
                      *
                    </p>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="phoneNum"
                    name="nomorHp"
                    aria-describedby="emailHelp"
                    placeholder="08573890xxxxx"
                    onChange={handleInput}
                    value={data.nomorHp}
                    required
                  />
                  <label className="text-danger mb-1">
                    {error.nomorHp ? error.nomorHp : ""}
                  </label>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Nationality</label>
                  <select
                    className="form-select"
                    id="nationality"
                    aria-label="Default select example"
                    name="nationality"
                  >
                    <option value="" selected>
                      Selected
                    </option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Singapore">Singapore</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1" name="pesan">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    name="pesan"
                    placeholder="Leave a comment here"
                    id="message"
                    style={{ height: "100px" }}
                    defaultValue={""}
                  />
                </div>
                <br />
                <button
                  type="submit"
                  onclick={handleSubmit}
                  className="form-group btn rounded-pill px-4 py-2 font-weight-normal"
                  style={{ backgroundColor: "#F47522", color: "#ffff" }}
                >
                  Submit
                  {/* <Link
                    to="/result"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Submit
                  </Link> */}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ContactUs;

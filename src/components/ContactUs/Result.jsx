import logo from "./asset/img-1.png";
const Result = () => {
  return (
    <div className="container ml-5 mr-5">
      <div className="row my-row-top">
        <div className="box-descript m-auto">
          <div className="box-content">
            <table style={{ padding: "10px" }}>
              <tbody>
                <tr>
                  <td style={{ paddingRight: "100px" }}>Full Name</td>
                  <td>:</td>
                  <td id="nameValues" />
                </tr>
                <tr>
                  <td>Email Adress</td>
                  <td>:</td>
                  <td id="emailValues" />
                </tr>
                <tr>
                  <td>Phone Number</td>
                  <td>:</td>
                  <td id="phoneValues" />
                </tr>
                <tr>
                  <td>Nationality</td>
                  <td>:</td>
                  <td id="nationalityValues" />
                </tr>
              </tbody>
            </table>
            <div
              className="box-description fst-italic"
              id="messageValues"
            ></div>
            <hr className="hr-custom" />
            <br />
            <h4 className="tex-bottom">
              Thanks for contacting us! We will be in touch with you shortly.
            </h4>
            <br />
            <form action="home.html">
              <button
                type="submit"
                className="btn rounded-pill px-4 py-2 font-weight-normal"
                style={{ backgroundColor: "#F47522", color: "#ffff" }}
              >
                Home
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="row my-row-bot">
        <div className="col-6 text-center">
          <img src={logo} alt="dot" className="img-dot" />
        </div>
        <div className="col-6"></div>
      </div>
    </div>
  );
};

export default Result;

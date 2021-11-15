import React, { useState, useEffect } from "react";
import logo from "../Home/asset/profile.jpg";

const Home = () => {
  const [clock, setClock] = useState(new Date());

  useEffect(() => {
    setInterval(() => setClock(new Date(), 30000));
  }, []);
  return (
    <section className="jumbotron jumbotron-fluid jumbotron-poly">
      <h3 className="text-end p-4 pt-5 mb-5">
        {clock.toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: false,
        })}
      </h3>

      <div className="h-90 d-flex justify-content-center jumbotron-content">
        <div className="my-auto">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-4 mx-auto img-jumbotron">
                <img
                  src={logo}
                  alt="motto-top"
                  className="img-fluid h-100 rounded-circle"
                />
              </div>
              <div className="col-md-8 mx-auto text-right motto-top-img text-jumbotron">
                <h4>Hi, my name is</h4>
                <h1>Anne Sullivan</h1>
                {/* <h1>{clock.toLocaleString('en-US', {
                    hour: 'numeric',
                    minute: 'numeric',
                    second: 'numeric',
                    hour12: false,
                })}</h1> */}
                <h3>I build things for the web</h3>
                <br />
                <button
                  type="button"
                  className="btn rounded-pill px-4 py-2 font-weight-normal"
                  style={{ backgroundColor: "#F47522", color: "#ffff" }}
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;

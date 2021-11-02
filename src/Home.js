import './style.css'
import logo from './img/logo-ALTA@2x.png'
import logo2 from './img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg'


function Home() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container p-2">
          <img src={logo} alt="" width="10%" className="d-inline-block align-text-top" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse pd" id="navbarNav">
            <ul className="navbar-nav ms-auto navbars">
              <li className="nav-item mx-2">
                <a className="nav-link active-nav" style={{ color: '#F47522' }} href="#">HOME</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href style={{ color: '#19345E' }}>ABOUT</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#" style={{ color: '#19345E' }}>EXPERIENCE</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#contact" style={{ color: '#19345E' }}>CONTACT</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <br /><br />
      <section className="jumbotron jumbotron-fluid jumbotron-poly">
        <div className="h-100 d-flex justify-content-center jumbotron-content">
          <div className="my-auto">
            <div className="container h-100">
              <div className="row align-items-center h-100">
                <div className="col-md-4 mx-auto img-jumbotron">
                  <img src={logo2} alt="motto-top" className="img-fluid h-100 rounded-circle" />
                </div>
                <div className="col-md-8 mx-auto text-right motto-top-img text-jumbotron">
                  <h4>Hi, my name is</h4>
                  <h1>Anne Sullivan</h1>
                  <h3>I build things for the web</h3>
                  <br />
                  <button type="button" className="btn rounded-pill px-4 py-2 font-weight-normal" style={{ backgroundColor: '#F47522', color: '#ffff' }}>Get In Touch</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

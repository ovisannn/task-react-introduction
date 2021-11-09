import logo from '../components/img/img.png'
import {Link} from 'react-router-dom'
const Navbar =() => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary fixed-top">
            <div className="container p-2">
                <img src={logo} alt="" width="7%" className="d-inline-block align-text-top" />
                <h4 className="px-3" > <Link to="/" style={{fontWeight:"bolder", color:"white", textDecoration:"none"}}>To Do List App</Link> </h4>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse pd" id="navbarNav">
                <ul className="navbar-nav ms-auto navbars">
                    <li className="nav-item mx-2">
                        <Link className="nav-link active-nav fw-10" style={{color: 'white', fontWeight: "bold"}} to="/">HOME</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <span className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: 'white', fontWeight: "bold"}}>
                            ABOUT
                        </span>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><Link className="dropdown-item" to="/about/about-app">About App</Link></li>
                            <li><Link className="dropdown-item" to="/about/about-author">About Author</Link></li>
                        </ul>
                    </li>
                </ul>
                </div>
            </div>
        </nav>

    )
}
export default Navbar;
    
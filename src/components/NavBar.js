import { Link } from 'react-router-dom'

export default function NavBar(){
    return(
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
              <div className="d-flex justify-content-between align-items-center navbar-top">
                <ul className="navbar-left">
                  <li>Wed, March 4, 2020</li>
                  {/* <li>30°C,London</li> */}
                </ul>
                <div>
                  <a className="navbar-brand" href="#"
                    ><img src="assets/images/logo.svg" alt=""
                  /></a>
                </div>
                <div className="d-flex">
                  <ul className="navbar-right">
                    <li>
                      <a href="#">ENGLISH</a>
                    </li>
                    <li>
                      <a href="#">AMHARIC</a>
                    </li>
                  </ul>
                  <ul className="social-media">
                    <li>
                      <a href="#">
                        <i className="mdi mdi-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="mdi mdi-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="mdi mdi-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="mdi mdi-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="mdi mdi-twitter"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="navbar-bottom-menu">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div
                  className="navbar-collapse justify-content-center collapse"
                  id="navbarSupportedContent"
                >
                  <ul
                    className="navbar-nav d-lg-flex justify-content-between align-items-center"
                  >
                    <li>
                      <button className="navbar-close">
                        <i className="mdi mdi-close"></i>
                      </button>
                    </li>
                    <li className="nav-item active">
                      <Link className="nav-link active" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/NewsPost">News</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/stocklist">Stocks</Link>
                    </li>
                    {/* search icon is here */}
                    <li className="nav-item">
                      <a className="nav-link" href="#"><i className="mdi mdi-magnify"></i></a>
                    </li>
                    {/* search icon ends here */}
                  </ul>
                </div>
              </div>
            </nav>
            </div>
    )
}
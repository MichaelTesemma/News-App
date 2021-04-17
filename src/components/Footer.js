import { Link } from 'react-router-dom'

export default function Footer(){
    return(
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="border-top"></div>
              </div>
              <div className="col-sm-3 col-lg-3">
                <ul className="footer-vertical-nav">
                  <li className="menu-title"><Link to="pages/news-post.html">News</Link></li>
                  <li><Link to="index.html">Home</Link></li>
                  <li><Link to="pages/world.html">World</Link></li>
                  <li><Link to="pages/Linkuthor.html">Magazine</Link></li>
                  <li><Link to="pages/business.html">Business</Link></li>
                  <li><Link to="pages/politics.html">Politics</Link></li>
                </ul>
              </div>
              <div className="col-sm-3 col-lg-3">
                <ul className="footer-vertical-nav">
                  <li className="menu-title"><Link to="pages/world.html">World</Link></li>
                  <li><Link to="pages/sports.html">Sports</Link></li>
                  <li><Link to="pages/Linkrt.html">Art</Link></li>
                  <li><Link to="#">Magazine</Link></li>
                  <li><Link to="pages/real-estate.html">Real estate</Link></li>
                  <li><Link to="pages/travel.html">Travel</Link></li>
                  <li><Link to="pages/Linkuthor.html">Author</Link></li>
                </ul>
              </div>
              <div className="col-sm-3 col-lg-3">
                <ul className="footer-vertical-nav">
                  <li className="menu-title"><Link to="#">Features</Link></li>
                  <li><Link to="#">Photography</Link></li>
                  <li><Link to="#">Video</Link></li>
                  <li><Link to="pages/news-post.html">Newsletters</Link></li>
                  <li><Link to="#">Live Events</Link></li>
                  <li><Link to="#">Stores</Link></li>
                  <li><Link to="#">Jobs</Link></li>
                </ul>
              </div>
              <div className="col-sm-3 col-lg-3">
                <ul className="footer-vertical-nav">
                  <li className="menu-title"><Link to="#">More</Link></li>
                  <li><Link to="#">RSS</Link></li>
                  <li><Link to="#">FAQ</Link></li>
                  <li><Link to="#">User Agreement</Link></li>
                  <li><Link to="#">Privacy</Link></li>
                  <li><Link to="pages/Linkboutus.html">About us</Link></li>
                  <li><Link to="pages/contactus.html">Contact</Link></li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="d-flex justify-content-between">
                  <img src="assets/images/logo.svg" className="footer-logo" alt="" />

                  <div className="d-flex justify-content-end footer-social">
                    <h5 className="m-0 font-weight-600 mr-3 d-none d-lg-flex">Follow on</h5>
                    <ul className="social-media">
                      <li>
                        <Link to="#">
                          <i className="mdi mdi-instagram"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="mdi mdi-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="mdi mdi-youtube"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="mdi mdi-linkedin"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="mdi mdi-twitter"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>

    )
}
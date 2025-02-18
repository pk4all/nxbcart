interface MainMenuProps {
    className?: string;
}
  const Footer = ({ className }: MainMenuProps) => {
    return (
      <footer className="section-t-space footer-section-2">
      <div className="container-fluid-lg">
          <div className="main-footer">
              <div className="row g-md-4 gy-sm-5 gy-2">
                  <div className="col-xl-3 col-sm-6">
                      <a href="/" className="foot-logo">
                          <img src="/images/NXB_Logo_1.webp" className="img-fluid w-80" alt="" />
                      </a>
                      <p className="information-text">it is a long established fact that a reader will be distracted
                          by the readable content.</p>
                      <ul className="social-icon">
                          <li>
                              <a href="www.facebook.html">
                                  <i className="fab fa-facebook-f"></i>
                              </a>
                          </li>
                          <li>
                              <a href="www.goolge.html">
                                  <i className="fab fa-google"></i>
                              </a>
                          </li>
                          <li>
                              <a href="www.twitter.html">
                                  <i className="fab fa-twitter"></i>
                              </a>
                          </li>
                          <li>
                              <a href="www.instagram.html">
                                  <i className="fab fa-instagram"></i>
                              </a>
                          </li>
                          <li>
                              <a href="www.pinterest.html">
                                  <i className="fab fa-pinterest-p"></i>
                              </a>
                          </li>
                      </ul>

                      <div className="social-app mt-sm-4 mt-3 mb-4">
                          <ul>
                              <li>
                                  <a href="https://play.google.com/store/apps" target="_blank">
                                      <img src="../assets/images/playstore.svg" className="blur-up lazyload" alt="" />
                                  </a>
                              </li>
                              <li>
                                  <a href="https://www.apple.com/in/app-store/" target="_blank">
                                      <img src="../assets/images/appstore.svg" className="blur-up lazyload" alt="" />
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>

                  <div className="col-xl-2 col-sm-6">
                      <div className="footer-title">
                          <h4>About NXBKart</h4>
                      </div>
                      <ul className="footer-list footer-contact mb-sm-0 mb-3">
                          <li>
                              <a href="about-us.html" className="footer-contain-2">
                                  <i className="fas fa-angle-right"></i>About Us</a>
                          </li>
                          <li>
                              <a href="contact-us.html" className="footer-contain-2">
                                  <i className="fas fa-angle-right"></i>Contact Us</a>
                          </li>
                          <li>
                              <a href="term_condition.html" className="footer-contain-2">
                                  <i className="fas fa-angle-right"></i>Terms & Coditions</a>
                          </li>
                          <li>
                              <a href="careers.html" className="footer-contain-2">
                                  <i className="fas fa-angle-right"></i>Careers</a>
                          </li>
                          <li>
                              <a href="blog-list.html" className="footer-contain-2">
                                  <i className="fas fa-angle-right"></i>Latest Blog</a>
                          </li>
                      </ul>
                  </div>

                  <div className="col-xl-2 col-sm-6">
                      <div className="footer-title">
                          <h4>Useful Link</h4>
                      </div>
                      <ul className="footer-list footer-contact mb-sm-0 mb-3">
                          <li>
                              <a href="order-success.html" className="footer-contain-2">
                                  <i className="fas fa-angle-right"></i>Your Order</a>
                          </li>
                          <li>
                              <a href="user-dashboard.html" className="footer-contain-2">
                                  <i className="fas fa-angle-right"></i>Your Account</a>
                          </li>
                          <li>
                              <a href="order-tracking.html" className="footer-contain-2">
                                  <i className="fas fa-angle-right"></i>Track Orders</a>
                          </li>
                          <li>
                              <a href="wishlist.html" className="footer-contain-2">
                                  <i className="fas fa-angle-right"></i>Your Wishlist</a>
                          </li>
                          <li>
                              <a href="faq.html" className="footer-contain-2">
                                  <i className="fas fa-angle-right"></i>FAQs</a>
                          </li>
                      </ul>
                  </div>

                  <div className="col-xl-2 col-sm-6">
                      <div className="footer-title">
                          <h4>Categories</h4>
                      </div>
                      <ul className="footer-list footer-contact mb-sm-0 mb-3">
                          <li>
                              <a href="vegetables-demo.html" className="footer-contain-2">
                                  <i className="fas fa-angle-right"></i>Fresh Vegetables</a>
                          </li>
                          <li>
                              <a href="spice-demo.html" className="footer-contain-2">
                                  <i className="fas fa-angle-right"></i>Hot Spice</a>
                          </li>
                          <li>
                              <a href="bags-demo.html" className="footer-contain-2">
                                  <i className="fas fa-angle-right"></i>Brand New Bags</a>
                          </li>
                          <li>
                              <a href="bakery-demo.html" className="footer-contain-2">
                                  <i className="fas fa-angle-right"></i>New Bakery</a>
                          </li>
                          <li>
                              <a href="grocery-demo.html" className="footer-contain-2">
                                  <i className="fas fa-angle-right"></i>New Grocery</a>
                          </li>
                      </ul>
                  </div>

                  <div className="col-xl-3 col-sm-6">
                      <div className="footer-title">
                          <h4>Store infomation</h4>
                      </div>
                      <ul className="footer-address footer-contact">
                          <li>
                              <a href="javascript:void(0)">
                                  <div className="inform-box flex-start-box">
                                      <i className="feather fas fa-map map-pin"></i>
                                      <p>NXBKart Demo Store, Demo store india 345 - 659</p>
                                  </div>
                              </a>
                          </li>

                          <li>
                              <a href="javascript:void(0)">
                                  <div className="inform-box">
                                      <i className="feather fas fa-phone"></i>
                                      <p>Call us: 123-456-7890</p>
                                  </div>
                              </a>
                          </li>

                          <li>
                              <a href="javascript:void(0)">
                                  <div className="inform-box">
                                      <i className="feather fas fa-envelope"></i>
                                      <p>Email Us: support@nxbindia.com</p>
                                  </div>
                              </a>
                          </li>

                          <li>
                              <a href="javascript:void(0)">
                                  <div className="inform-box">
                                      <i className="feather fas fa-fax"></i>
                                      <p>Fax: 123456</p>
                                  </div>
                              </a>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>

          <div className="sub-footer section-small-space">
              <div className="left-footer">
                  <p>2025 Copyright By NXB India Pvt. Ltd.</p>
              </div>
              <div className="right-footer">
                  <ul className="payment-box">
                      <li>
                          <img src="/images/icon/paymant/visa.png" alt="" />
                      </li>
                      <li>
                          <img src="/images/icon/paymant/discover.png" alt="" />
                      </li>
                      <li>
                          <img src="/images/icon/paymant/american.png" alt="" />
                      </li>
                      <li>
                          <img src="/images/icon/paymant/master-card.png" alt="" />
                      </li>
                      {/* <li>
                          <img src="/images/icon/paymant/giro-pay.png" alt="" />
                      </li> */}
                  </ul>
              </div>
          </div>
      </div>
  </footer>
    );
  };

  export default Footer;

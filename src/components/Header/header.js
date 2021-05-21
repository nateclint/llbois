import React from 'react'
import './header.css'
import SearchBtn from '../BtnHandler/Search/Search'
import User from '../BtnHandler/User/User'

import { useStateValue } from '../../StateProvider'
import { Link } from 'react-router-dom';
import CartBtn from '../BtnHandler/Cart/CartBtn'

function Header() {

  const [{ basket }, dispatch] = useStateValue()

  return (
    <div className="shop-section-header">
      <header>
        <div className="desktop-header">
          <div className="container">
            <div className="header-holder">
              <div className="logo">
                <Link to="/">
                  <p className="logo-llbois">LLBois</p>
                </Link>           
              </div>

              <div className="menu">
                <div className="nav-holder">
                  <nav>
                    <ul>
                      <li className="dropdown">
                        <Link to="/">HOME</Link>
                      </li>

                      <li className="dropdown">
                        <Link to="/phone">PHONE</Link>
                        <div className="dropdown-menu">
                          <div className="row">
                            <div className="col-sm-9">
                              <div className="row col-list">
                                <div className="col-sm-4">
                                  <Link to className="title-submenu">
                                    APPLE
                                    <img src="assets/header/mm_04_400x.png" alt="" />
                                  </Link>
                                  <ul>
                                    <li>iPhone 12 Pro</li>
                                    <li>Coming Soon</li>
                                    <li>Coming Soon</li>
                                    <li>Coming Soon</li>
                                  </ul>
                                </div>
                                <div className="col-sm-4">
                                  <Link to className="title-submenu">
                                    SAMSUNG
                                    <img src="assets/header/mm_05_400x.png" alt="" />
                                  </Link>
                                  <ul>
                                    <li>Galaxy S21</li>
                                    <li>Coming Soon</li>
                                    <li>Coming Soon</li>
                                    <li>Coming Soon</li>
                                  </ul>
                                </div>
                                <div className="col-sm-4">
                                  <Link to className="title-submenu">
                                    ACCESSORIES
                                    <img src="assets/header/mm_06_400x.png" alt="" />
                                  </Link>
                                  <ul>
                                    <li>ANKER PowerCore Elite 20000mAh</li>
                                    <li>Coming Soon</li>
                                    <li>Coming Soon</li>
                                    <li>Coming Soon</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-3">
                              <div className="p-offset-7">
                                <Link to className="promo-02">
                                  <img src="assets/header/mm_03_410x.png" alt="promo" />

                                  <div className="promo-decription">
                                    <div className="promo-txt-wrapper">
                                      <div className="small-promo">SALE</div>
                                      <div className="big-promo">70% OFF</div>
                                      <p>Free shipping on all VN orders or order above $99</p>
                                      <span>SHOP NOW </span>
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li className="dropdown">
                        <Link to="/tablet">TABLET</Link>
                        <div className="dropdown-menu">
                          <div className="row">
                            <div className="col-sm-9">
                              <div className="row col-list">
                                <div className="col-sm-4">
                                  <Link className="title-submenu">
                                    APPLE
                                    <img src="assets/header/mm_04_400x.png" alt="" />
                                  </Link>
                                  <ul>
                                    <li>iPhone 12 Pro</li>
                                    <li>Coming Soon</li>
                                    <li>Coming Soon</li>
                                    <li>Coming Soon</li>
                                  </ul>
                                </div>
                                <div className="col-sm-4">
                                  <Link className="title-submenu">
                                    SAMSUNG
                                    <img src="assets/header/mm_05_400x.png" alt="" />
                                  </Link>
                                  <ul>
                                    <li>Galaxy S21</li>
                                    <li>Coming Soon</li>
                                    <li>Coming Soon</li>
                                    <li>Coming Soon</li>
                                  </ul>
                                </div>
                                <div className="col-sm-4">
                                  <Link className="title-submenu">
                                    ACCESSORIES
                                    <img src="assets/header/mm_06_400x.png" alt="" />
                                  </Link>
                                  <ul>
                                    <li>ANKER PowerCore Elite 20000mAh</li>
                                    <li>Coming Soon</li>
                                    <li>Coming Soon</li>
                                    <li>Coming Soon</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-3">
                              <div className="p-offset-7">
                                <Link className="promo-02">
                                  <img src="assets/header/mm_03_410x.png" alt="promo" />

                                  <div className="promo-decription">
                                    <div className="promo-txt-wrapper">
                                      <div className="small-promo">SALE</div>
                                      <div className="big-promo">70% OFF</div>
                                      <p>Free shipping on all VN orders or order above $99</p>
                                      <span>SHOP NOW </span>
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>


                      <li className="dropdown">
                        <Link to="/smartwatch">WATCH</Link>
                        <div className="dropdown-menu">
                          <div className="row">
                            <div className="col-sm-9">
                              <div className="row col-list">
                                <div className="col-sm-4">
                                  <Link className="title-submenu">
                                    APPLE
                                    <img src="assets/header/mm_04_400x.png" alt="" />
                                  </Link>
                                  <ul>
                                    <li>iPhone 12 Pro</li>
                                    <li>Coming Soon</li>
                                    <li>Coming Soon</li>
                                    <li>Coming Soon</li>
                                  </ul>
                                </div>
                                <div className="col-sm-4">
                                  <Link className="title-submenu">
                                    SAMSUNG
                                    <img src="assets/header/mm_05_400x.png" alt="" />
                                  </Link>
                                  <ul>
                                    <li>Galaxy S21</li>
                                    <li>Coming Soon</li>
                                    <li>Coming Soon</li>
                                    <li>Coming Soon</li>
                                  </ul>
                                </div>
                                <div className="col-sm-4">
                                  <Link className="title-submenu">
                                    ACCESSORIES
                                    <img src="assets/header/mm_06_400x.png" alt="" />
                                  </Link>
                                  <ul>
                                    <li>ANKER PowerCore Elite 20000mAh</li>
                                    <li>Coming Soon</li>
                                    <li>Coming Soon</li>
                                    <li>Coming Soon</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-3">
                              <div className="p-offset-7">
                                <Link className="promo-02">
                                  <img src="assets/header/mm_03_410x.png" alt="promo" />

                                  <div className="promo-decription">
                                    <div className="promo-txt-wrapper">
                                      <div className="small-promo">SALE</div>
                                      <div className="big-promo">70% OFF</div>
                                      <p>Free shipping on all VN orders or order above $99</p>
                                      <span>SHOP NOW </span>
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              <div className="options">

                <SearchBtn />


                <CartBtn />

                <User />

              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
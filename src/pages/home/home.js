import React from 'react'
import './home.css'
import { Link } from 'react-router-dom';
import BannerSlider from '../../components/BannerSlider/BannerSlider'
import { phone, tablet } from '../../data'
import ProductItem from '../../components/ProductItem/ProductItem'
//import Footer from '../../components/Footer/Footer'
//import Header from '../../components/Header/header'

class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            items: phone.concat(tablet)
        }

    }
    render() {
        return (
            <React.Fragment>
                

                <div className="pageContent">
                    <div className="shop-section-1">
                        <BannerSlider />
                    </div>

                    <div id="shop-section-2">
                        <div className="container-indent">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-sm-12 col-md-6">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <Link to className="promo-box hover-scale">
                                                    <img className="" alt="Pic" src="assets/pagecontent/section-2/demo01_03_307x.jpg" srcset={`assets/pagecontent/section-2/demo01_03_307x.jpg 1x, assets/pagecontent/section-2/demo01_03_614x.jpg 2x`} />

                                                    <div className="s2-decription">
                                                        <div className="s2-decription-wrap">
                                                            <div className="dec-content">SALE</div>
                                                        </div>
                                                    </div>
                                                </Link>

                                                <Link to className="promo-box hover-scale">
                                                    <img className="" alt="Pic" src="assets/pagecontent/section-2/demo01_04_307x.jpg" srcset={`assets/pagecontent/section-2/demo01_04_307x.jpg 1x, assets/pagecontent/section-2/demo01_04_614x.jpg 2x`} />

                                                    <div className="s2-decription">
                                                        <div className="s2-decription-wrap">
                                                            <div className="dec-content">NEW</div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col-sm-6">
                                                <Link to='/phone' className="promo-box hover-scale">
                                                    <img className="" alt="Pic" src="assets/pagecontent/section-2/demo01_06_307x.jpg" srcset={`assets/pagecontent/section-2/demo01_06_307x.jpg 1x, assets/pagecontent/section-2/demo01_06_614x.jpg 2x`} />

                                                    <div className="s2-decription">
                                                        <div className="s2-decription-wrap">
                                                            <div className="dec-content">PHONE</div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <Link to='/tablet' className="promo-box hover-scale">
                                                    <img className="" alt="Pic" src="assets/pagecontent/section-2/demo01_05_307x.jpg" srcset={`assets/pagecontent/section-2/demo01_05_307x.jpg 1x, assets/pagecontent/section-2/demo01_05_614x.jpg 2x`} />

                                                    <div className="s2-decription">
                                                        <div className="s2-decription-wrap">
                                                            <div className="dec-content">TABLET</div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col-sm-6">
                                                <Link to className="promo-box hover-scale">
                                                    <img className="" alt="Pic" src="assets/pagecontent/section-2/demo01_07_307x.jpg" srcset={`assets/pagecontent/section-2/demo01_07_307x.jpg 1x, assets/pagecontent/section-2/demo01_07_614x.jpg 2x`} />

                                                    <div className="s2-decription">
                                                        <div className="s2-decription-wrap">
                                                            <div className="dec-content">ACCESSORIES</div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col-sm-12">
                                                <Link to='/shoes' className="promo-box hover-scale">
                                                    <img className="" alt="Pic" src="assets/pagecontent/section-2/demo01_08_633x.jpg" srcset={`assets/pagecontent/section-2/demo01_08_633x.jpg 1x, assets/pagecontent/section-2/demo01_08_1266x.jpg 2x`} />

                                                    <div className="s2-decription">
                                                        <div className="s2-decription-wrap">
                                                            <div className="dec-content">SHOES</div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="shop-section-3">
                        <div className="container-indent">
                            <div className="container">
                                <div className="shop-block-title">
                                    <Link>
                                        <h5>BEST SELLER</h5>
                                    </Link>
                                    <p>TOP PRODUCTS OF THIS WEEK</p>
                                </div>

                                <div className="shop-items">
                                    <div className="row">
                                        {
                                            this.state.items.map((index, value) => {
                                                return (
                                                    <div key={value} className="col-6 col-md-4 col-lg-3">
                                                        <ProductItem
                                                            data={index}
                                                        />
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="shop-section-4">
                        <div className="container-indent">
                            <div className="container-fluid-custom">
                                <div className="row-custom">
                                    <div className="col-sm-6 col-md-4 col-12-440width">
                                        <a href className="promo-box hover-scale">
                                            <img className="" alt="Pic" src="/assets/pagecontent/section-4/demo01_10_415x.jpg" srcset="/assets/pagecontent/section-4/demo01_10_415x.jpg 1x, /assets/pagecontent/section-4/demo01_10_830x.jpg 2x" />

                                            <div className="s4-decription">
                                                <div className="s4-decription-wrap">
                                                    <div className="dec-content sml">
                                                        {'SUMMER '}
                                                        <span style={{ color: '#fe8e26' }}>2021</span>
                                                    </div>
                                                    <div className="dec-content big">NEW ARRIVALS</div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-12-440width">
                                        <Link to className="promo-box hover-scale">
                                            <img className="" alt="Pic" src="/assets/pagecontent/section-4/demo01_11_415x.png" srcset="/assets/pagecontent/section-4/demo01_11_415x.png 1x, /assets/pagecontent/section-4/demo01_11_830x.png 2x" />

                                            <div className="s4-decription">
                                                <div className="s4-decription-wrap">
                                                    <div className="dec-content sml">NEW COLLECTION</div>
                                                    <div className="dec-content big" style={{ color: '#fe8e26' }}>WARRIOR</div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-12-440width">
                                        <a href className="promo-box hover-scale">
                                            <img className="" alt="Pic" src="/assets/pagecontent/section-4/demo01_09_415x.jpg" srcset="/assets/pagecontent/section-4/demo01_09_415x.jpg 1x, /assets/pagecontent/section-4/demo01_09_830x.jpg 2x" />

                                            <div className="s4-decription">
                                                <div className="s4-decription-wrap">
                                                    <div className="dec-content sml">GREAT SUMMER SALES</div>
                                                    <div className="dec-content big">
                                                        GET UP TO
                                                    <span style={{ color: '#fe8e26' }}> 70% OFF</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="shop-section-5">
                        <div className="container-indent">
                            <div className="container-fuild">
                                <div className="title-block">
                                    <h2 className="big">
                                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/">FOLLOW</a>
                                        {' US ON'}
                                    </h2>

                                    <div className="sml">INSTAGRAM</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="shop-section-6">
                        <div className="container-indent">
                            <div className="container">
                                <div className="row services-listing">
                                    <div className="col-xs-12 col-md-6 col-lg-4">
                                        <Link to className="service-block">
                                            <div className="col-icon">
                                                <ion-icon name="call-outline"></ion-icon>
                                            </div>
                                            <div className="col-description">
                                                <h4>SUPPORT 24/7</h4>
                                                <p>Contact us 24 hours a day, 7 days a week</p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-xs-12 col-md-6 col-lg-4">
                                        <Link to className="service-block">
                                            <div className="col-icon">
                                                <ion-icon name="timer-outline"></ion-icon>
                                            </div>
                                            <div className="col-description">
                                                <h4>30 DAYS RETURN</h4>
                                                <p>Simply return it within 24 days for an exchange</p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-xs-12 col-md-6 col-lg-4">
                                        <Link to className="service-block">
                                            <div className="col-icon">
                                                <ion-icon name="car-outline"></ion-icon>
                                            </div>
                                            <div className="col-description">
                                                <h4>FREE SHIPPING</h4>
                                                <p>Free shipping on all VN order or order above $99</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                        
            </React.Fragment >
        )
    }
}

export default Home
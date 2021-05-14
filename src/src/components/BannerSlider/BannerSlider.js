import React from 'react'
import './BannerSlider.css'



class BannerSlider extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fuild">
                    <div id="arouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#arouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#arouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#arouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="assets/slider/home1_01.png" className="d-block w-100" alt="Happy" />
                                <div className="carousel-caption d-none d-md-block slide-1">
                                    <h5>Best Sites to Buy</h5>
                                    <p>MOBILE PHONE</p>
                                    <button className="btn btn-primary">GO SHOPPING</button>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="assets/slider/home1_02.png" className="d-block w-100" alt="Dreamy" />
                                <div className="carousel-caption d-none d-md-block slide-2">
                                    <h5>We also have</h5>
                                    <div>
                                        Unique <br />
                                        Accessories
                                    </div>
                                    <button className="btn btn-primary">GO SHOPPING</button>
                                </div>
                            </div>
                            <div className="carousel-item">
                            <img src="assets/slider/home1_03.png" className="d-block w-100" alt="Dreamy" />
                                <div className="carousel-caption d-none d-md-block slide-3">
                                    <h1>LLBois</h1>
                                    <h4>
                                        Find and Choose <br />
                                        Your Products
                                    </h4>
                                    <button className="btn btn-primary">GO SHOPPING</button>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#arouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#arouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BannerSlider

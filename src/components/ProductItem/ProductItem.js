import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './ProductItem.css'
import Tooltip from '@material-ui/core/Tooltip';
import Dialog from '@material-ui/core/Dialog';
import ReactImageZoom from 'react-image-zoom';
import { useStateValue } from '../../StateProvider';
import { db } from '../../firebase'


function ProductItem({ data }) {
    const [{ user, basket }, dispatch] = useStateValue();

    const [checkWishlist, setCheckWishlist] = useState(false)
    const history = useHistory()
    const [openQuickView, setopenQuickView] = useState(false);
    
    var size = data.size[0];

    var quickView_imgSrc = data.colors[0].imgSrc;
    var quickView_imgColor = data.colors[0].color;

    useEffect(() => {
        db
            .collection('users')
            .doc(user?.uid)
            .collection('wishlist')
            .doc(data.sku)
            .get()
            .then(doc => {
                if (doc.exists) {
                    setCheckWishlist(true)
                }
                else {
                    setCheckWishlist(false)
                }
            })
            .catch(error => {
                console.log('fail to add wishlist', error)
            })

        return
    }, [user, data])

    const addToBasket = () => {
        let item = {
            sku: data.sku,
            label: data.label,
            name: data.name,
            price: data.price,
            productType: data.productType,
            description: data.description,
            tags: data.tags,
            colors: [{ color: data.colors[0].color, imgSrc: data.colors[0].imgSrc }],
            material: data.material,
            size: size
        }
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                data: item
            }
        })
    };

    const changeSize = (s) => (event) => {
        event.preventDefault();

        size = s;
    }

    const changeImg = (srcImg, color) => (event) => {
        event.preventDefault();

        quickView_imgSrc = srcImg;
        quickView_imgColor = color;

    };

    const handleOpenQuickView = () => {
        setopenQuickView(true);
    };

    const handleCloseQuickView = () => {
        setopenQuickView(false);
    };

    const handleAddWishlist = () => {
        if (!checkWishlist) {
            if (user) {
                db
                    .collection('users')
                    .doc(user?.uid)
                    .collection('wishlist')
                    .doc(data.sku)
                    .set({
                        item: data
                    })

                setCheckWishlist(true)
            }
            else {
                history.replace('/login')
            }
        }
        else {
            if (user) {
                db
                    .collection('users')
                    .doc(user?.uid)
                    .collection('wishlist')
                    .doc(data.sku)
                    .delete()
                    .then(() => {
                        console.log('Remove wishlist');
                    })
                    .catch(() => {
                        alert('Fail to remove wishlist')
                    })

                setCheckWishlist(false)
            }
            else {
                history.replace('/login')
            }
        }
    }
    return (

        <div className="shop-product">
            <div className="img-box">
                <Tooltip title="Quick View" placement="left">
                    <Link className="quickView" onClick={handleOpenQuickView}>
                        <ion-icon name="eye-outline"></ion-icon>
                    </Link>
                </Tooltip>

                <Dialog
                    fullWidth={true}
                    maxWidth="md"
                    open={openQuickView}
                    onClose={handleCloseQuickView}
                    aria-labelledby="quickview-dialog-title"
                    aria-describedby="quickview-dialog-description"
                >
                    <div className="modal-quickview">
                        <div className="row">
                            <div className="col-12 col-md-5 col-lg-6">
                                <div className="product-img">
                                    <ReactImageZoom {...{ width: 440, img: `${quickView_imgSrc}`, zoomPosition: 'original' }} />
                                </div>
                            </div>
                            <div className="col-12 col-md-7 col-lg-6">
                                <div className="product-info">
                                    <p>{"SKU: " + data.sku}</p>
                                    <p>{"Availability: " + data.status}</p>
                                    <h4>{data.name}</h4>
                                    <h4 className="modal-prod-price">{"$" + data.price}</h4>

                                    <p style={{ fontSize: 0.85 + 'rem', fontWeight: 500 }}>
                                        {"COLOR: "}
                                        <span style={{ color: '#fe8e26', fontSize: 0.85 + 'rem', fontWeight: 500 }}>
                                            {quickView_imgColor}
                                        </span>
                                    </p>
                                    <div className="modal-prod-opt-block">
                                        <ul className="opt-items">
                                            {
                                                data.colors.map((index, value) => {
                                                    var active = (index.imgSrc === quickView_imgSrc) ? 'active' : ''

                                                    return (
                                                        // <li key={value} className={active ? 'active' : ''} onClick={changeImg(index.imgSrc, index.color)}>
                                                        <li key={value} className={active ? 'active' : ''}>
                                                            <a href className={"opt-" + `${value + 1}`}>
                                                                <img src={index.imgSrc} alt="" />
                                                            </a>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>

                                    <div className="prod___size">
                                        <span style={{ fontSize: 0.9 + 'rem', fontWeight: 500 }}>STORAGE</span>
                                        {
                                            data.size.map((index, value) => {
                                                var active = (index === size) ? 'active' : ''

                                                return (

                                                    <button className={`btn___size ${active ? 'active' : ''}`} onClick={changeSize(index)}>
                                                        {index}
                                                    </button>

                                                )
                                            })
                                        }
                                        <span style={{ fontSize: 0.9 + 'rem', fontWeight: 500 }}> GB</span>

                                    </div>
                                    <button className="btn-addtocart btn btn-primary" onClick={addToBasket} style={{marginTop:20, marginBottom: 30}}>
                                        <span>ADD TO CART</span>
                                    </button>
                                    <p>{"Vendor: " + data.label.toUpperCase()}</p>
                                    <p>{"Product Type: " + data.productType}</p>
                                    <p>{"Barcode: " + data.barcode}</p>

                                    <Link to={
                                        {
                                            pathname: "/item/" + data.sku,
                                            state: {
                                                productData: data
                                            }
                                        }
                                    }>
                                        View Full Info
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Dialog>

                <Tooltip
                    title={
                        user
                            ? (checkWishlist ? 'Remove Wishlist' : 'Add to wishlist')
                            : 'Need to Login'
                    }
                    placement="left"
                >
                    <Link
                        onClick={handleAddWishlist}
                        className={checkWishlist ? "wishlist___added" : "wishlist"}>
                        <ion-icon name="heart-outline"></ion-icon>
                    </Link>
                </Tooltip>
                <Link>
                    <span className="img">
                        <Link to={
                            {
                                pathname: "/item/" + data.sku,
                                state: {
                                    productData: data
                                }
                            }
                        }>
                            <img src={data.colors[0].imgSrc} alt="" style={{ width: 100 + '%' }} />
                        </Link>
                    </span>

                    <span className="label-tag"></span>
                </Link>
            </div>
            <div className="img-description">
                <div className="s-row">
                    <div className="item-info" style={{ width: 100 + '%' }}>
                        <Link to>{data.label.toUpperCase()}</Link>
                    </div>
                    <div className="rating">
                        <ul>
                            <li>
                                <ion-icon name="star"></ion-icon>
                            </li>
                            <li>
                                <ion-icon name="star"></ion-icon>
                            </li>
                            <li>
                                <ion-icon name="star"></ion-icon>
                            </li>
                            <li>
                                <ion-icon name="star-half"></ion-icon>
                            </li>
                            <li>
                                <ion-icon name="star-outline"></ion-icon>
                            </li>
                        </ul>
                    </div>
                </div>

                <Link to={
                    {
                        pathname: "/item/" + data.sku,
                        state: {
                            productData: data
                        }
                    }
                }>
                    <h5 className="prod-title">{data.name}</h5>
                </Link>
                <div className="prod-price">
                    <span className="money">${data.price}</span>
                </div>

                <div className="prod-opt-block">
                    <ul className="opt-items">
                        {
                            data.colors.map((index, value) => {

                                var active = (index.imgSrc === data.colors[0].imgSrc) ? 'active' : ''
                                //console.log('value', value)
                                return (
                                    //<li key={value} className={active ? 'active' : ''} onClick={changeImg(index.imgSrc, index.color)}>
                                    <li key={value} className={active ? 'active' : ''} >
                                        <Link to className={"opt-" + `${value + 1}`}>
                                            <img src={index.imgSrc} alt="" />
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="prod-add-btn">
                    <div className="btn-row">


                        <button className="btn-addtocart btn btn-primary" onClick={addToBasket}>

                            <span>ADD TO CART</span>
                        </button>

                    </div>
                </div>
            </div>
        </div>

    )

}

export default ProductItem
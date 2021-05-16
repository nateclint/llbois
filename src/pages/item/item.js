import React, { useState } from 'react'
//import { Link } from 'react-router-dom'
import './item.css'
import { DiscussionEmbed } from 'disqus-react'
import { useStateValue } from '../../StateProvider';
import ReactImageZoom from 'react-image-zoom';

function Item(props) {
    const [{ user, basket }, dispatch] = useStateValue();
    const { productData } = props.location.state
    const [mouseVisible, setMouseVisible] = useState(false)
    const [top, setTop] = useState(0)
    const [left, setLeft] = useState(0)

    const disqusShortName = 'llbois'
    const configDisqus = {
        url: 'https://llbois-group08.web.app/item/' + productData.sku,
        identifier: productData.sku,
        title: productData.name
    }



    const [imgSrc, setImgSrc] = useState(productData.colors[0].imgSrc);
    const [imgColor, setImgColor] = useState(productData.colors[0].color);

    const [size, setSize] = useState(productData.size[0]);


    const addToBasket = () => {
        let item = {
            sku: productData.sku,
            label: productData.label,
            name: productData.name,
            price: productData.price,
            productType: productData.productType,
            description: productData.description,
            tags: productData.tags,
            colors: [{ color: imgColor, imgSrc: imgSrc }],
            material: productData.material,
            size: size
        }
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                data: item
            }
        })
    };

    const changeImg = (srcImg, color) => (event) => {
        event.preventDefault();

        setImgColor(color);
        setImgSrc(srcImg);

    };

    const changeSize = (size) => (event) => {
        event.preventDefault()

        setSize(size)
    }


    return (

        <div className="modal-quickview container">
            <div className="row" style={{ marginBottom: 2 + 'rem' }}>
                <div className="col-12 col-md-5 col-lg-6">
                    <div className="product-img">
                        <ReactImageZoom {...{ width: 500, img: `${imgSrc}`, zoomPosition: 'original' }} />

                    </div>
                </div>
                <div className="col-12 col-md-7 col-lg-6">
                    <div className="product-info">
                        <p>{"SKU: " + productData.sku}</p>
                        <p>{"Availability: " + productData.status}</p>
                        <h4>{productData.name}</h4>
                        <h4 className="modal-prod-price">{"$" + productData.price}</h4>

                        <div className='prod___description' style={{ paddingTop: 30, paddingBottom: 30 , whiteSpace:"pre-line"}}>
                            {productData.description}
                        </div>

                        <p style={{ fontSize: 0.9+ 'rem', fontWeight: 500 }}>
                            {"COLOR: "}
                            <span style={{ color: '#fe8e26', fontSize: 0.9 + 'rem', fontWeight: 500 }}>
                                {imgColor}
                            </span>
                        </p>
                        <div className="modal-prod-opt-block">
                            <ul className="opt-items">
                                {
                                    productData.colors.map((index, value) => {
                                        var active = (index.imgSrc === imgSrc) ? 'active' : ''

                                        return (
                                            <li key={value} className={active ? 'active' : ''} onClick={changeImg(index.imgSrc, index.color)}>
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
                            <span style={{ fontSize: 0.9 + 'rem', fontWeight: 500 }}>SIZE</span>
                            {
                                productData.size.map((index, value) => {
                                    var active = (index === size) ? 'active' : ''

                                    return (
                                        
                                        <button className={`btn___size ${active ? 'active': ''}`} onClick={changeSize(index)}>
                                            {index}
                                        </button>
                                        
                                    )
                                })
                            }

                        </div>
                        <button className="btn-addtocart btn btn-primary" onClick={addToBasket} style={{marginTop:20, marginBottom: 30}}>
                            <span>ADD TO CART</span>
                        </button>
                        <p>{"Vendor: " + productData.label.toUpperCase()}</p>
                        <p>{"Product Type: " + productData.productType}</p>
                        <p>{"Barcode: " + productData.barcode}</p>
                    </div>
                </div>
            </div>

            <div>
                <DiscussionEmbed
                    shortname={disqusShortName}
                    config={configDisqus}
                />
            </div>
        </div>
    )

}

export default Item
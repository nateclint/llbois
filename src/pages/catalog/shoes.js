import React from 'react'
import './catalog.css'
import '../../index.css'
import { Link } from 'react-router-dom'
import ProductItem from '../../components/ProductItem/ProductItem'
import { useState, useEffect } from 'react'
import { shoes } from '../../data'
import CloseIcon from '@material-ui/icons/Close';

function Shoes(props) {
    const [vendor, setVendor] = useState(null)
    const [asc, setAsc] = useState(false)
    const [desc, setDesc] = useState(false)
    const [data, setData] = useState(shoes)
    const [option, setOption] = useState('normal')

    useEffect(() => {
        if (vendor) {

            let filter = shoes.filter((item) => {
                if (item.label === vendor.toLowerCase()) {
                    return true
                }
                else {
                    return false
                }
            })
                .sort((a, b) => {
                    if (option === 'asc') {
                        return a.price - b.price
                    }
                    else if (option === 'desc') {
                        return b.price - a.price
                    }
                    else {
                        return 0
                    }
                })

            setData(filter)
        }
        else {
            let sort = [...shoes].sort((a, b) => {
                if (option === 'asc') {
                    return a.price - b.price
                }
                else if (option === 'desc') {
                    return b.price - a.price
                }
                else {
                    return 0
                }
            })

            setData(sort)
        }

    }, [vendor, option])



    const handleSetVendor = (vendor) => e => {
        e.preventDefault()
        setVendor(vendor)
    }

    const handleOption = (option) => e => {
        e.preventDefault()
        console.log('Go inside check ', option)
        setOption(option)

    }

    return (
        <React.Fragment>
            <div className="nav-breadcrumb">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to='/'>
                            Home
                            </Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">Shoes</li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div className="pageContent">
                <div className="container p-0 d-flex flex-row my-4">
                    <div className="shop-section-filter col-3">
                        <div className="container d-flex flex-column align-content-between my-3">
                            <h5 className="row border-bottom py-3">
                                <div className="col-10 text-uppercase">Collection</div>
                                <button data-toggle="collapse" data-target="#collection" className="col-2 border-0 bg-transparent">
                                    <ion-icon name="remove-outline"></ion-icon>
                                </button>
                            </h5>
                            <div id="collection">
                                <ul className="list-group">
                                    <li className="list-group-item border-0 bg-transparent p-1">
                                        <Link to='/womens' className='text-muted'>Womens</Link>
                                    </li>
                                    <li className="list-group-item border-0 bg-transparent p-1">
                                        <Link to='/mens' className='text-muted'>Mens</Link>
                                    </li>
                                    <li className="list-group-item border-0 bg-transparent p-1">
                                        <Link to='/shoes' className='text-muted'>Shoes</Link>
                                    </li>

                                </ul>
                            </div>
                        </div>

                        <div className="container d-flex flex-column align-content-between my-3">
                            <h5 className="row border-bottom py-3">
                                <div className="col-10 text-uppercase">Filter by</div>
                                <button data-toggle="collapse" data-target="#collection" className="col-2 border-0 bg-transparent">
                                    <ion-icon name="remove-outline"></ion-icon>
                                </button>
                            </h5>
                            <div id="collection">
                                <ul className="list-group">

                                    {
                                        vendor
                                            ? <>
                                                <li className="list-group-item border-0 bg-transparent p-1" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                                    <Link to onClick={handleSetVendor(null)} className='text-muted'>{vendor.toUpperCase()}</Link>
                                                    <span onClick={handleSetVendor(null)}>
                                                        <CloseIcon style={{ fontSize: 20 }} />
                                                    </span>
                                                </li>
                                            </>
                                            : <div></div>
                                    }

                                    {
                                        (option === 'asc')
                                            ?
                                            <>
                                                <li className="list-group-item border-0 bg-transparent p-1" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                                    <Link to onClick={handleOption('reset')} className='text-muted'>Ascending</Link>
                                                    <span onClick={handleOption('reset')}>
                                                        <CloseIcon style={{ fontSize: 20 }} />
                                                    </span>
                                                </li>
                                            </>
                                            : ((option === 'desc')
                                                ? <>
                                                    <li className="list-group-item border-0 bg-transparent p-1" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                                        <Link to onClick={handleOption('reset')} className='text-muted'>Descending</Link>
                                                        <span onClick={handleOption('reset')}>
                                                            <CloseIcon style={{ fontSize: 20 }} />
                                                        </span>
                                                    </li>
                                                </>
                                                : <div></div>)

                                    }


                                </ul>
                            </div>
                        </div>

                        <div className="container d-flex flex-column align-content-between my-3">
                            <h5 className="row border-bottom py-3">
                                <div className="col-10 text-uppercase">Price</div>
                                <button data-toggle="collapse" data-target="#price" className="col-2 border-0 bg-transparent">
                                    <ion-icon name="remove-outline"></ion-icon>
                                </button>
                            </h5>
                            <div id="price">
                                <ul className="list-group">
                                    <li className="list-group-item border-0 bg-transparent p-1">
                                        <Link to className="text-muted" onClick={handleOption('asc')}>Ascending</Link>
                                    </li>
                                    <li className="list-group-item border-0 bg-transparent p-1">
                                        <Link to className="text-muted" onClick={handleOption('desc')}>Descending</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="container d-flex flex-column align-content-between my-3">
                            <h5 className="row border-bottom py-3">
                                <div className="col-10 text-uppercase">Vendor</div>
                                <button data-toggle="collapse" data-target="#vendor" className="col-2 border-0 bg-transparent">
                                    <ion-icon name="remove-outline"></ion-icon>
                                </button>
                            </h5>
                            <div id="vendor">
                                <ul className="list-group">
                                    <li className="list-group-item border-0 bg-transparent p-1">
                                        <Link to className="text-muted" onClick={handleSetVendor('gap')}>Gap</Link>
                                    </li>
                                    <li className="list-group-item border-0 bg-transparent p-1">
                                        <Link to className="text-muted" onClick={handleSetVendor('guess')}>Guess</Link>
                                    </li>
                                    <li className="list-group-item border-0 bg-transparent p-1">
                                        <Link to className="text-muted" onClick={handleSetVendor('lacoste')}>Lacoste</Link>
                                    </li>
                                    <li className="list-group-item border-0 bg-transparent p-1">
                                        <Link to className="text-muted" onClick={handleSetVendor('levis')}>Levi's</Link>
                                    </li>
                                    <li className="list-group-item border-0 bg-transparent p-1">
                                        <Link to className="text-muted" onClick={handleSetVendor('polo')}>Polo</Link>
                                    </li>
                                    <li className="list-group-item border-0 bg-transparent p-1">
                                        <Link to className="text-muted" onClick={handleSetVendor('zara')}>Zara</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div id="shop-section-items col">
                        <div className="container-indent mx-4">
                            <div className="container">
                                <div className="shop-block-title">
                                    <h4 className="text-uppercase">Shoes {'(' + data?.length + ' items)'}</h4>
                                </div>

                                <div className="shop-items">
                                    <div className="row">
                                        {
                                            data.map((index, value) => {
                                                return (
                                                    <div key={value} className="col-6 col-md-4">
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
                </div>
            </div>
                                    
        </React.Fragment >
    )
}

export default Shoes

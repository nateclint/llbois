import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import { getBasketTotal } from '../../reducer'
import './cart.css'


function Cart() {
  const [{ user, basket }, dispatch] = useStateValue()
  const history = useHistory()

  const [country, setCountry] = useState('vietnam')
  const [city, setCity] = useState('hochiminh')
  const [zip, setZip] = useState('')
  const [note, setNote] = useState('')
  const [address, setAddress] = useState('')

  const currencyFormat = (num) => {
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  const removeItem = (sku) => (event) => {
    event.preventDefault()
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: sku
    })
  }

  const removeBasket = () => (event) => {
    event.preventDefault()

    dispatch({
      type: 'REMOVE_ALL_BASKET'
    })

    console.log('basket: ' + basket)
  }

  const handleCheckout = (e) => {
    e.preventDefault()

    dispatch({
      type: 'SET_CHECKOUT_INFO',
      country: country,
      city: city,
      zip: zip,
      note: note,
      address: address
    })

    if(user){
      history.push('/payment')
    }
    else {
      history.replace('/login')
    }

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
              <li className="breadcrumb-item active" aria-current="page">Your shopping</li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container pt-2 pb-4 mt-5">
        <div className="row pb-4 border-bottom mx-0">
          <div className="text-uppercase h1 w-100 text-center mb-5">Shopping Cart</div>
        </div>

        {
          basket.length > 0 ?
            <>
              <div id="style-7" className="row prod-container">
                {
                  basket?.map((index, val) => {
                    let quantity = 1

                    const insQuantity = () => {
                      quantity += 1;
                    }

                    const desQuantity = () => {
                      if (quantity === 1)
                        return
                      else
                        quantity -= 1
                    }
                    return (
                      <div className="form-group row border-bottom py-3 mb-0 align-items-center">
                        <div className="col-2">
                          <img src={index.data.colors[0].imgSrc} alt="boots" className="w-50" />
                        </div>
                        <div className="col-8 row p-0 m-0">
                          <div className="col-md-6 col-sm-12 py-1">
                            <span>{index.data.name}</span>
                          </div>
                          <div className="col-md-6 col-sm-12 py-1">
                            <span>{currencyFormat(index.data.price)}</span>
                          </div>
                          {/* <div className="col-md-5 col-sm-12 py-1">
                            <div className="row">
                              <div className="input-group col-md-12 col-sm-6">
                                <span className="input-group-btn bg-light rounded-left">
                                  <button
                                    type="button"
                                    className="btn btn-default btn-number"
                                    disabled="disabled"
                                    data-type="minus"
                                    data-field="quant[1]"
                                    onClick={desQuantity}
                                  >
                                    <ion-icon name="remove-outline"></ion-icon>
                                  </button>
                                </span>
                                <input type="text" name="quant[1]" className="form-control border-0 bg-light text-center" value={quantity} min="1" max="99" />
                                <span className="input-group-btn bg-light rounded-right">
                                  <button
                                    type="button"
                                    className="btn btn-default btn-number"
                                    data-type="plus" data-field="quant[1]"
                                    onClick={insQuantity}
                                  >
                                    <ion-icon name="add-outline"></ion-icon>
                                  </button>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-2 col-sm-12 py-1">
                            <span>{currencyFormat(index.data.price * quantity)}</span>
                          </div> */}
                        </div>
                        <div className="col-2 p-0">
                          <div className="text-muted" onClick={removeItem(index.data.sku)}>
                            <ion-icon name="trash-outline"></ion-icon>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>

              <div className="row d-flex flex-row justify-content-between py-4">
                <Link to='/' className="align-self-start text-uppercase text-primary">
                  <ion-icon name="return-down-back-outline" className="pr-2"></ion-icon>
                    Continue shopping
                </Link>
                <Link className="align-self-end text-uppercase" onClick={removeBasket()}>
                  <ion-icon name="trash-outline" className="pr-2"></ion-icon>
                    Clear shopping cart
                </Link>
              </div>
              <div className="row">
                <form className='row mb-5' onSubmit={handleCheckout}>
                  <div className="col-md-4 col-sm-12 pb-4">
                    <div className="pr-2 border">
                      <div className="p-4">
                        <h4 className="text-uppercase">Shipping information</h4>
                        <p className="text-muted">Enter your destination to get a shipping</p>
                        <div className="form-group pt-1">
                          <label for="country" className="text-uppercase">Country*</label>
                          <select className="form-control" id="country" value={country} onChange={e => setCountry(e.target.value)}>
                            <option value='vietnam' selected>Viet Nam</option>
                          </select>
                        </div>
                        <div className="form-group pt-1">
                          <label for="city" className="text-uppercase">City/Province*</label>
                          <select className="form-control" id="city" value={city} onChange={e => setCity(e.target.value)} >
                            <option value='hochimnh' selected>Ho Chi Minh</option>
                            <option value='hanoi'>Ha Noi</option>
                            <option value='angiang'>An Giang</option>
                          </select>
                        </div>
                        <div className="form-group pt-1">
                          <label for="zip" className="text-uppercase">Zip/Postal Code*</label>
                          <input className="form-control" type="text" id="zip" placeholder="Zip/Postal Code" required
                            onChange={e => setZip(e.target.value)}
                            value={zip}
                          />
                        </div>
                        <div className="form-group pt-1">
                          <label for="address" className="text-uppercase">Address*</label>
                          <input className="form-control" type="text" id="address" placeholder="Your Address" required
                            onChange={e => setAddress(e.target.value)}
                            value={address}
                          />
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12 pb-4">
                    <div className="px-2 border">
                      <div className="p-4">
                        <h4 className="text-uppercase">Note</h4>
                        <p className="text-muted">Add special instructions for your order...</p>
                        <div className="form-group">
                          <textarea className="form-control border-0 bg-light" id="exampleFormControlTextarea1" rows="10"
                            value={note}
                            onChange={e => setNote(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12 pb-4">
                    <div className="pl-2 border">
                      <div className="p-4">
                        <div className="container">
                          <div className="row d-flex flex-row justify-content-between mb-4">
                            <div className="text-uppercase align-self-start">Subtotal</div>
                            <div className="align-self-end">{currencyFormat(getBasketTotal(basket))}</div>
                          </div>
                          <div className="row d-flex flex-row justify-content-between mb-4">
                            <div className="text-uppercase align-self-start">Grand Total</div>
                            <div className="align-self-end h4 text-primary">{currencyFormat(getBasketTotal(basket))}</div>
                          </div>
                          <div className="form-check mt-2 px-1 mb-2 text-muted">
                            <input type="checkbox" className="form-check-input" id="terms" checked />
                            <label className="form-check-label ml-2" for="terms">I agree with the terms and conditions</label>
                          </div>
                          <button type='submit' className="btn btn-primary text-uppercase mt-4 w-100 py-3">
                            Proceed to checkout
                        </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </>
            :
            <div className='empty-cart'>
              <h5 style={{ color: '#999999', fontSize: 2.5 + 'rem' }}>Your cart is empty now</h5>
              <Link to='/' className="btn btn-primary">GO SHOPPING</Link>
            </div>
        }
      </div>
    </React.Fragment>
  )
}

export default Cart
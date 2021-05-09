import React, { useEffect, useState } from 'react'
import { Redirect, useHistory, useParams } from 'react-router-dom'
import Order from '../../components/Order/Order'
import { db } from '../../firebase'
import { useStateValue } from '../../StateProvider'
import './orderDetail.css'
import moment from 'moment'

function OrderDetail(props) {
  const [{ user, basket }, dispatch] = useStateValue()
  const [orders, setOrders] = useState([])
  const history = useHistory()
  const params = useParams()

  useEffect(() => {

    if (!user) {
      history.replace('/login')
    }

    db
      .collection('users')
      .doc(user?.uid)
      .collection('orders')
      .doc(params?.orderID)
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log(doc.data())
          setOrders(doc.data())
        }
        else {
          history.replace('/orders')
        }
      })
      .catch(error => {
        alert(error)
        history.replace('/')
      })
  }, [user, history, params])

  const currencyFormat = (num) => {
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  const handleGoBack = (e) => {
    e.preventDefault()
    history.goBack()
  }
  return (
    <div className='order___details'>
      <div className="row pb-4 mx-0">
        <div className="w-100 text-center mt-3 mb-3 check_out">
          <div className="text-uppercase h1">Order Detail</div>
        </div>

        <div className='w-100 order__container '>
          <div className='row'>
            <div className='col-md-8'>
              <div className='order___info___details'>
                <div className='border-bottom w-100'>
                  <h5>Detail</h5>
                </div>

                <div className='order___basket'>
                  {
                    orders.basket?.map(item => {
                      return (
                        <div className="form-group row py-3 mb-0 align-items-center">
                          <div className="col-3">
                            <img src={item.data.colors[0].imgSrc} alt="boots" className="w-50" />
                          </div>
                          <div className="col-5 row p-0 m-0 order___item___detail">

                            <span><strong>{item.data.name}</strong></span>
                            <span style={{ fontSize: 0.9 + 'rem', color: '#777777' }}>{`SKU ${item.data.sku}`}</span>
                            <span style={{ fontSize: 0.9 + 'rem', color: '#777777' }}>{`SIZE ${item.data.size}`}</span>
                            <span style={{ fontSize: 0.9 + 'rem', color: '#777777' }}>{`LABEL ${item.data.label.toUpperCase()}`}</span>
                          </div>
                          <div className="col-2 row p-0 m-0">
                            <span className='text-primary' style={{ fontWeight: 500 }}>
                              {`${currencyFormat(item.data.price)}  x   1 `}
                            </span>
                          </div>
                          <div className="col-2 row p-0 m-0">
                            <div className='text-primary' style={{ fontWeight: 500, textAlign: 'right' }}>
                              {` ${currencyFormat(item.data.price)}`}
                            </div>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>


                <div className='note___price w-100'>
                  <div className='row w-100'>
                    <div className='col-6'>
                      <div className='pt-1'>
                        <label for="note__" className="text-uppercase">NOTE*</label>
                        <input className="form-control" type="text" id="note__"
                          value={orders?.note}
                          readOnly={true}
                        />
                      </div>
                    </div>
                    <div className='col-6' style={{ display: 'flex', flexDirection: 'column' }}>

                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 1 + 'rem' }}>
                        <div style={{ textAlign: 'right' }}>Total Price</div>
                        <div style={{ textAlign: 'left' }}>{`${currencyFormat(orders.amount / 100)} `}</div>
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 1 + 'rem' }}>
                        <div style={{ textAlign: 'right' }}> Shipping Fee</div>
                        <span>{`${currencyFormat(0)}`}</span>
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 1 + 'rem' }}>
                        <div style={{ textAlign: 'right' }}>Discount</div>
                        <span>{`${currencyFormat(0)}`}</span>
                      </div>

                      <div className='border-bottom'></div>

                      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 1 + 'rem' }}>
                        <div style={{ fontWeight: 500, color: '#2879fe', fontSize: 1.2 + 'rem' }}>Grand Total</div>
                        <span style={{ fontWeight: 500, color: '#2879fe', fontSize: 1.2 + 'rem' }}>{`${currencyFormat(orders.amount / 100)}`}</span>
                      </div>



                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='order___customer'>
                <div className='border-bottom w-100'>
                  <h5>Customer</h5>
                </div>

                <div className='border-bottom' style={{ marginBottom: 2 + 'rem', marginTop: 2 + 'rem', paddingBottom: 2 + 'rem' }}>
                  <h5>Order Information</h5>
                  <small>
                    <strong>AT </strong>
                    {moment.unix(orders?.created).format("MMMM Do YYYY, h:mma")}
                  </small>

                  <p className='order___id'>
                    <small><strong>ID </strong>{params?.orderID}</small>
                  </p>
                </div>

                <div style={{ marginBottom: 1 + 'rem', marginTop: 1 + 'rem' }}>
                  <h5>Shipping Information</h5>

                  <div style={{ display: 'flex', flexDirection: 'column', marginTop: 2 + 'rem' }}>
                    <span>{orders?.address}</span>
                    <span>{orders?.country}</span>
                    <span>{orders?.city}</span>
                    <span>{orders?.zip}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='btn___goback'>
        <button className='btn btn-primary' onClick={handleGoBack}>GO BACK</button>
      </div>
    </div>

  )
}

export default OrderDetail
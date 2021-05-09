import React, { useEffect, useState } from 'react'
import moment from 'moment'
import {Link} from 'react-router-dom'
import './Order.css'
function Order({ order }) {

  const currencyFormat = (num) => {
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
  
  return (
    <div className='order___detail'>
      <div className='order___info'>
        <div>
          <h2>
            Ordered   
            <small>{' ('+ order.data.basket?.length + ' items)'}</small>
          </h2>
        </div>
        <div>
          <small>
            <strong>Order at </strong>
            {moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")} 
          </small>

          <p className='order___id'>
            <small><strong>Order ID: </strong>{order.id}</small>
          </p>
        </div>
      </div>

      <div>
        {
          order.data.basket?.map(item => (
            <div className="form-group row py-3 mb-0 align-items-center">
              <div className="col-3">
                <img src={item.data.colors[0].imgSrc} alt="boots" className="w-50" />
              </div>
              <div className="col-8 row p-0 m-0">
                <div className="col-md-3 col-sm-12 py-1">
                  <span><strong>{item.data.name}</strong></span>
                </div>
                <div className="col-md-2 col-sm-12 py-1">
                  <span>{currencyFormat(item.data.price)}</span>
                </div>
              </div>

            </div>
          ))
        }
      </div>

      <div style={{display:"flex", justifyContent:'center'}}>
        <Link to={`/order/${order.id}`} className='btn btn-primary'>
          CHECK MORE
        </Link>
      </div>
    </div>
  )
}

export default Order
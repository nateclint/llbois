import React, { useEffect, useState, useRef } from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import Order from '../../Order/Order'
import { db } from '../../../firebase'
import { useStateValue } from '../../../StateProvider'
import LazyLoad from 'react-lazyload';

function OrderHistory(props) {
  const [{ user, basket }, dispatch] = useStateValue()
  const [orders, setOrders] = useState([])
  




  useEffect(() => {
    db
      .collection('users')
      .doc(user?.uid)
      .collection('orders')
      .orderBy('created', 'desc')
      .onSnapshot(snapshot => {
        setOrders(snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data()
        })))
      })
  }, [user])

  
  return (
    <div className='order__container'>
      {
        orders?.map((order, index) => (
          <Order key={index} order={order} />
        ))
      }
      
    </div>
  )
}

export default OrderHistory
import React, { useEffect, useState } from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import Order from '../../components/Order/Order'
import { db } from '../../firebase'
import { useStateValue } from '../../StateProvider'


function Orders(props) {
  const [{ user, basket }, dispatch] = useStateValue()
  const [orders, setOrders] = useState([])
  const history = useHistory()
  useEffect(() => {
    
    if(!user){
      history.replace('/login')
    }

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
  }, [user, history])

  return (
    <div className='orders'>
      <div className='container'>
        <div className="row pb-4 mx-0">
          <div className="w-100 text-center mt-3 mb-3 check_out">
            <div className="text-uppercase h1">Orders History</div>
          </div>

          <div className='order__container'>
            {
              orders?.map((order, index) => (
                <Order key={index} order={order}/>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Orders
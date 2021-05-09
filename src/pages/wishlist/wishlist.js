import React, { useEffect, useState } from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import ProductItem from '../../components/ProductItem/ProductItem'
import { db } from '../../firebase'
import { useStateValue } from '../../StateProvider'
import './wishlist.css'

function Wishlist(props) {
  const [{ user, basket }, dispatch] = useStateValue()

  const [wishlist, setWishlist] = useState([])
  const history = useHistory()
  useEffect(() => {

    if (!user) {
      history.replace('/login')
    }

    db
      .collection('users')
      .doc(user?.uid)
      .collection('wishlist')
      .onSnapshot(snapshot => {
        setWishlist(snapshot.docs.map(doc => ({
          data: doc.data()
        })))
      })
    //console.log('Wish: ', wishlist);  
  }, [user, wishlist, history])

  return (
    <div className='wishlist___page'>
      <div className='container'>
        <div className="row pb-4 mx-0">
          <div className="w-100 text-center mt-3 mb-3 check_out">
            <div className="text-uppercase h1">
              Your Wishlist
              <span
                style={{fontSize: 1.5 + 'rem'}}
              >
                {wishlist.length ? `(${wishlist.length} items)` : 'No item'}
              </span>
            </div>
          </div>


          <div className='wishlist___details' style={{ overflowX: 'hidden', paddingBottom: 50 }}>

            <div className='row'>
              {
                wishlist?.map((product, index) => {
                  return (
                    <div className='col-6 col-md-4 col-lg-3' style={{ marginTop: 2 + 'rem' }}>
                      <ProductItem key={index} data={product.data.item} />
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wishlist
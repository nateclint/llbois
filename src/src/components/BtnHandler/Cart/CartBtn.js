import React from 'react'
import Badge from '@material-ui/core/Badge';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import { useStateValue } from '../../../StateProvider'
import { Link } from 'react-router-dom';
import './CartBtn.css'
import Divider from '@material-ui/core/Divider';
import {currencyFormat} from '../../../supportFunction'
import { getBasketTotal } from '../../../reducer'

function CartBtn() {
  const [{ basket }, dispatch] = useStateValue()

  const removeItem = (sku) => (event)=> {
    event.preventDefault()
    
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: sku
    })
  }

  return (
    <Badge badgeContent={basket?.length} color="primary">
      <div className="cart-icon">
        <Link to='/cart'>
          <button className="btn-dropdown-toggle" >
            <ion-icon name="bag-outline"></ion-icon>
          </button>
        </Link>


        <div className="btn-dropdown-menu">
          <div className="cart-holder">
            <div className="cart-empty" style={basket?.length ? { display: 'none' } : { display: 'flex' }}>
              <LocalMallOutlinedIcon></LocalMallOutlinedIcon>
              <p>No products in the Cart</p>
            </div>

            <div id='style-7' className="cart-item-list container">
              {
                basket?.map(item => {

                  return (
                    <React.Fragment>
                      <div className="row">
                        <div className="col-4">
                          <img src={item.data.colors[0].imgSrc} alt="" />
                        </div>
                        <div className="col-6">
                          <div className="prod-info">
                            <span>{item.data.name}</span>
                            <span>{currencyFormat(item.data.price)}</span>
                          </div>

                        </div>
                        <div className="col-2">
                          <span onClick={removeItem(item.data.sku)}>
                            <ion-icon name="trash-outline"></ion-icon>
                          </span>
                        </div>


                      </div>
                      <Divider />
                    </React.Fragment>

                  )
                })
              }
              <div className='total'>
                <span>TOTAL</span>
                <span>{currencyFormat(getBasketTotal(basket))}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Badge>
  )
}

export default CartBtn
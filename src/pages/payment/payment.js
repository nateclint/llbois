import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import { getBasketTotal } from '../../reducer'
import './payment.css'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from '../../axios';
import { db } from '../../firebase'
import CircularProgress from '@material-ui/core/CircularProgress';
import Dialog from '@material-ui/core/Dialog';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

function Payment(props) {
  const [{ user, basket, checkOut }, dispatch] = useStateValue()

  const stripe = useStripe()
  const elements = useElements()
  const history = useHistory()

  const [error, setError] = useState(null)
  const [processing, setProcessing] = useState(false)
  const [succeeded, setSucceeded] = useState(false)
  const [disabled, setDisabled] = useState(true)
  const [clientSecret, setClientSecret] = useState(true)

  const [open, setOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState(null)
  //const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!checkOut) {
      let check = localStorage.getItem('checkOut')

      if (check) {

        let data = JSON.parse(check)
        dispatch({
          type: 'SET_CHECKOUT_INFO',
          country: data.country,
          city: data.city,
          zip: data.zip,
          note: data.note,
          address: data.address
        })
      }
      else {
        if(succeeded){
          history.replace('/orders')
        }
        else {
          history.replace('/cart')
        }
      }
    }
  }, [checkOut, dispatch, history, succeeded])

  useEffect(() => {
    //generate the special stripe secret which allow us to charge a customer


    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`
      })

      setClientSecret(response.data.clientSecret)
    }

    getClientSecret()


  }, [basket])


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

  const handleSubmit = async (e) => {

    //handle with Stripe
    e.preventDefault()

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    setProcessing(true)

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    }).then(({ paymentIntent }) => {
      //paymentIntent = paymentInformation

      db
        .collection('users')
        .doc(user?.uid)
        .collection('orders')
        .doc(paymentIntent.id)
        .set({
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
          country: checkOut?.country,
          city: checkOut?.city,
          address: checkOut?.address,
          note: checkOut?.note,
          zip: checkOut?.zip
        })

      setSucceeded(true)
      setError(null)
      setProcessing(false)

      dispatch({
        type: 'REMOVE_ALL_BASKET'
      })

      dispatch({
        type: 'REMOVE_CHECKOUT'
      })

      //history.replace('/orders')
    }).catch(error => {

      setSucceeded(false)
      setError(null)
      setProcessing(false)

      
      setModalMessage(`Please check your cards. Error ${error}`)
      handleOpen()
    })

  }

  const handleChange = e => {
    setDisabled(e.empty)
    setError(e.error ? e.error.message : '')
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <React.Fragment>
      <div className='payment'>

        <div className='container'>
          <div className="row pb-4 mx-0">
            <div className="w-100 text-center mb-3 check_out">
              <div className="text-uppercase h1">Checkout</div>
              <div>{'(' + basket?.length + ' items)'}</div>
            </div>

          </div>
          <div className='row delivery_detail border-bottom'>

            <div className='title col-4'>Delivery Information</div>
            <div className='details col-8'>
              <div className='row' style={{ display: 'flex', flexDirection: 'column' }}>
                <div>{user?.email}</div>

                <div>{checkOut?.address.toUpperCase()}</div>
                <div>{checkOut?.city.toUpperCase()}</div>
                <div>{checkOut?.note.toUpperCase()}</div>
                <div>{checkOut?.country.toUpperCase()} ,{checkOut?.zip.toUpperCase()}</div>
              </div>
            </div>



          </div>
          <div className='row delivery_products border-bottom'>
            <div className='title col-4'>Review Items</div>
            <div className='details col-8'>
              {
                basket?.map(item => {
                  return (
                    <div className="form-group row py-3 mb-0 align-items-center">
                      <div className="col-2">
                        <img src={item.data.colors[0].imgSrc} alt="boots" className="w-50" />
                      </div>
                      <div className="col-8 row p-0 m-0">
                        <div className="col-md-3 col-sm-12 py-1">
                          <span>{item.data.name}</span>
                        </div>
                        <div className="col-md-2 col-sm-12 py-1">
                          <span>{currencyFormat(item.data.price)}</span>
                        </div>


                      </div>
                      <div className="col-1 pl-4">
                        <div className="text-muted" onClick={removeItem(item.data.sku)}>
                          <ion-icon name="trash-outline"></ion-icon>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>

          </div>
          <div className='row payment_method'>
            <div className='title col-4'> Payment method</div>
            <div className='details col-8'>

              <form onSubmit={handleSubmit}>
                <div className='card___container'>
                  <span><strong>Card Infomation</strong></span>
                  <div className='card___info'>
                    <CardElement onChange={handleChange} on />
                  </div>
                </div>

                <div className='mt-3 box___buynow'>
                  <div className='title'>Order Total :  {currencyFormat(getBasketTotal(basket))}</div>
                  <button className={`btn btn-${succeeded ? 'success' : 'primary' } btn___buynow`} disabled={processing || disabled || succeeded || !stripe}>
                    <span>
                      {
                        processing
                          ?
                          <div className='___inprocess'>
                            <CircularProgress size={25} />
                            <span>Processing</span>
                          </div>
                          : 'Buy Now'}
                    </span>
                  </button>
                </div>
              </form>


            </div>

          </div>
        </div>

      </div>

      <Dialog
        open={open}
        fullWidth={true}
        maxWidth='xs'
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className='modal___message'>
          {
            succeeded
              ? <CheckCircleOutlineIcon style={{ color: '#54e346', fontSize: 3.5 + 'rem' }} />
              : <ErrorOutlineIcon color="secondary" style={{ fontSize: 3.5 + 'rem' }} />
          }
          <span style={{ color: `${succeeded ? '#54e346' : '#f50057'}` }}>{modalMessage}</span>
          <button className='btn btn-primary' onClick={handleClose}>Close</button>
        </div>
      </Dialog>
    </React.Fragment>
  )
}

export default Payment
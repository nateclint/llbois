import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../pages/home/home';
import Mens from '../pages/catalog/mens';
import Womens from '../pages/catalog/womens';
import Shoes from '../pages/catalog/shoes';
import Item from '../pages/item/item';
import Cart from '../pages/cart/cart';
import LoginPage from '../pages/login/login';
import Register from '../pages/register/register';
import Account from '../pages/account/account';
import errPage from '../pages/404page/404page';
import Payment from '../pages/payment/payment';
import Orders from '../pages/orders/orders';
import Wishlist from '../pages/wishlist/wishlist';
import OrderDetail from '../pages/order-details/orderDetail';

import { useStateValue } from '../StateProvider';
import { useLoading, Grid } from '@agney/react-loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';



const promise = loadStripe('pk_test_51I1pynBGPqZ0wiytbSrHsnOHlp1KTpPbAVjxAFSX2QNDgHXJ6ZEnArUUqbfasaug8jjgEofwLUebDEPWm8QQQYHw00b3Arbuuw')

function LoadingScreen() {

    const { containerProps, indicatorEl } = useLoading({
        loading: true,
        indicator: <Grid width="50" />,
    });

    return (
        <div className='loading'
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 500
            }}
        >
            <section  {...containerProps} style={{ color: '#fe8e26' }}>
                {indicatorEl}
            </section>
        </div>
    )
}


export default function MainRouter() {
    const [{ user }, dispatch] = useStateValue()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let waiting = setTimeout(() => setLoading(false), 1000)

        return () => {
            clearTimeout(waiting)
        }
    }, [])

    return (

        <Switch>

            <Route exact path='/' component={Home} />
            <Route path='/cart' component={Cart} />
            <Route exact path='/mens' component={Mens} />
            <Route exact path='/womens' component={Womens} />
            <Route exact path='/shoes' component={Shoes} />
            <Route exact path='/item/:sku' component={Item} />
            <Route exact path='/order/:orderID'
                render={() => {
                    if (loading) {
                        return <LoadingScreen />
                    }
                    else {
                        if (user) {
                            return <OrderDetail />
                        }
                        else {
                            return <Redirect to='/' />
                        }
                    }
                }}

            />




            <Route exact path='/login'
                render={() => {
                    if (loading) {
                        return <LoadingScreen />
                    }
                    else {
                        if (user) {
                            return <Redirect to='/' />
                        }
                        else {
                            return <LoginPage />
                        }
                    }
                }}
            />

            <Route exact path='/register'
                render={() => {
                    if (loading) {
                        return <LoadingScreen />
                    }
                    else {
                        if (user) {
                            return <Redirect to='/' />
                        }
                        else {
                            return <Register />
                        }
                    }
                }}
            />

            <Route exact path='/account'
                render={() => {
                    if (loading) {
                        return <LoadingScreen />
                    }
                    else {
                        if (user) {
                            return <Account />
                        }
                        else {
                            return <Redirect to='/login' />

                        }
                    }
                }}
            />

            <Route exact path='/wishlist'
                render={() => {
                    if (loading) {
                        return <LoadingScreen />
                    }
                    else {
                        if (user) {
                            return <Wishlist />
                        }
                        else {
                            return <Redirect to='/login' />

                        }
                    }
                }}
            />
            <Route exact path='/payment'>
                <Elements stripe={promise}>
                    <Payment />
                </Elements>
            </Route>

            <Route exact path='/orders'>
                <Orders />
            </Route>


            <Route component={errPage}></Route>


        </Switch>

    )

}

//export default MainRouter
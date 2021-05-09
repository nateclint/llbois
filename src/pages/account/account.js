import React, { useState, useEffect } from 'react'
import './account.css'
import '../../index.css'

//import AccProfileEdit from '../../components/AccProfileEdit/AccProfileEdit'
//import AccBilling from '../../components/AccBilling/AccBilling'
import { Link } from 'react-router-dom'
import Profile from '../../components/Account/Profile/Profile'
import OrderHistory from '../../components/Account/OrderHistory/OrderHistory'
import Billing from '../../components/Account/Billing/Billing'
import Setting from '../../components/Account/Setting/Setting'



function Account(props) {

    return (
        <React.Fragment>
            <div className="nav-breadcrumb bg-light-custom">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb bg-light-custom">
                            <li className="breadcrumb-item">
                                <Link to='/'>{'Home '} </Link>
                                {' / Account'}
                            </li>

                        </ol>
                    </nav>
                </div>
            </div>

            <div className="pageContent">
                <div className='container'>
                    <div class="row">
                        <div class="col-3">
                            <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                <a class="nav-link active" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="true">Profile</a>
                                <a class="nav-link" id="v-pills-billing-tab" data-toggle="pill" href="#v-pills-billing" role="tab" aria-controls="v-pills-billing" aria-selected="false">Billing info</a>
                                <a class="nav-link" id="v-pills-ordered-tab" data-toggle="pill" href="#v-pills-ordered" role="tab" aria-controls="v-pills-ordered" aria-selected="false">Shopping history</a>
                                <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</a>
                            </div>
                        </div>
                        <div class="col-9">
                            <div class="tab-content tab-decor" id="v-pills-tabContent">
                                <div class="tab-pane fade show active" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                    <div style={{
                                        fontSize: 2 + 'rem',
                                        textAlign: 'center',
                                        marginBottom: 0.8 + 'rem'

                                    }}>User Information</div>

                                    <Profile />
                                </div>
                                <div class="tab-pane fade" id="v-pills-billing" role="tabpanel" aria-labelledby="v-pills-billing-tab">
                                    <div style={{
                                        fontSize: 2 + 'rem',
                                        textAlign: 'center',
                                        marginBottom: 0.8 + 'rem'

                                    }}>Billing Information</div>
                                    
                                    <Billing />
                                </div>
                                <div class="tab-pane fade" id="v-pills-ordered" role="tabpanel" aria-labelledby="v-pills-ordered-tab">
                                    <div style={{
                                        fontSize: 2 + 'rem',
                                        textAlign: 'center',
                                        marginBottom: 0.8 + 'rem'

                                    }}>Orders History</div>

                                    <OrderHistory />
                                </div>
                                <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                                    <div style={{
                                        fontSize: 2 + 'rem',
                                        textAlign: 'center',
                                        marginBottom: 0.8 + 'rem'

                                    }}>Settings</div>

                                    <Setting />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment >
    )

}

export default Account

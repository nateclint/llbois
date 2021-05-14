import React from 'react'
import Divider from '@material-ui/core/Divider';
import { Chip } from '@material-ui/core';
import './Billing.css'
//import { Link } from 'react-router-dom';

import { useStateValue } from '../../../StateProvider';


function Billing(props) {

  const [{ user }, dispatch] = useStateValue()

  return (
    <React.Fragment>
      
      <div id="billing" className="container">
        <Divider />
        <div className='row'>
          <div className='col-sm-2 logo___card'>
            <img src='assets/billing/visa.png' alt='Visa' className='w-100' />
          </div>
          <div className='col-sm-10'>
            <div className='visa___title'>
              <span>VISA CARD</span>
              <Chip size='small' label='Default' color='primary' />
            </div>

            <div className='visa___detail'>
              <div className='row'>
                <span className='col-sm-3'>CARD NUMBER</span>
                <span className='col-sm-9'>4242 4242 4242 4242</span>
              </div>

              <div className='row'>
                <span className='col-sm-3'>DAY EXPRIED</span>
                <span className='col-sm-9'>04/24</span>
              </div>

              <div className='row'>
                <span className='col-sm-3'>CVC</span>
                <span className='col-sm-9'>242</span>
              </div>

              <div className='row'>
                <span className='col-sm-3'>ZIP</span>
                <span className='col-sm-9'>42424</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )

}

export default Billing
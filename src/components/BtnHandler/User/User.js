import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../../firebase'
import { useStateValue } from '../../../StateProvider'
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import Tooltip from '@material-ui/core/Tooltip';
import './User.css'

function User() {
  const [target, setTarget] = useState()

  const [{ user }, dispatch] = useStateValue()

  const  [snack, setSnack] = useState({
    vertical: 'bottom',
    horizontal: 'left',
    open: false
  })

  const [message, setMessage] = useState('')
  const {open, vertical, horizontal} = snack

  const handleOpenSnackbar = (mess) => {
    
    setMessage(mess)
    setSnack({...snack, open: true})
  }

  const handleCloseSnackbar = () => {
    setSnack({...snack, open: false})
  }

  const handleOpenDropdown = (event) => {
    event.preventDefault()


    setTarget(event.target.parentElement)


    var e = event.target.parentElement
    var check = e.getElementsByClassName("btn-dropdown-menu")[0].style.display

    if (check === 'block') {
      e.getElementsByClassName("btn-dropdown-menu")[0].style.display = "none"
    }
    else {
      e.getElementsByClassName("btn-dropdown-menu")[0].style.display = "block"
    }
  }

  const handleCloseDropDown = () => {
    var tar = target.getElementsByClassName("btn-dropdown-menu")[0].style.display

    if (tar === 'block') {
      target.getElementsByClassName("btn-dropdown-menu")[0].style.display = 'none'
    }
  }

  const handleAuthentication = (e) => {
    e.preventDefault()

    if (user) {
      auth.signOut().then(() => {
        handleOpenSnackbar('Logged out')
      })
    }

    handleCloseDropDown()
  }

  return (
    <React.Fragment>
      <div className="user">
        <button
          className="btn-dropdown-toggle"
          onClick={handleOpenDropdown}

        >
          <ion-icon name="person-outline"></ion-icon>
        </button>

        <div className="btn-dropdown-menu">
          <ul>
            {
              user
                ? 
                <li className='welcome'>
                  <div style={{fontSize: 0.9 + 'rem'}}>Hello</div>
                  <Tooltip title={user.email} placement='top'>
                    <div className='email'>{user.email}</div>
                  </Tooltip>
                  
                </li>
                : ''
            }
            <li>
              <Link 
                to={!user && '/login'} 
                onClick={user ? handleAuthentication : handleCloseDropDown}
              >
                {
                  user
                    ? <ion-icon name="log-out-outline"></ion-icon>
                    : <ion-icon name="lock-closed-outline"></ion-icon>
                }
                <span>{user ? 'Sign out' : 'Sign in'}</span>

              </Link>
            </li>
            <li style={user ? { display: 'none' } : { display: 'block' }}>
              <Link to='/register' onClick={handleCloseDropDown}>

                <ion-icon name="person-outline"></ion-icon>
                <span>Register</span>

              </Link>
            </li>
            <li style={user ? { display: 'block' } : { display: 'none' }}>
              <Link to='/account' onClick={handleCloseDropDown}>

                <ion-icon name="person-outline"></ion-icon>
                <span>Account</span>

              </Link>
            </li>
            <li>
              <Link to='/cart' onClick={handleCloseDropDown}>

                <ion-icon name="bag-outline"></ion-icon>
                <span>View Cart</span>

              </Link>
            </li>
            <li>
              <Link to={user ? '/wishlist' : '/login'} onClick={handleCloseDropDown}>

                <ion-icon name="heart-outline"></ion-icon>
                <span>Wishlist</span>

              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Snackbar
        anchorOrigin={{ vertical , horizontal}}
        open={open}
        onClose={handleCloseSnackbar}
        
        key={vertical + horizontal}
      >
        <Alert onClose={handleCloseSnackbar} variant="filled" severity="info">
          {message}
        </Alert>
      </Snackbar>
    </React.Fragment>
  )


}

export default User
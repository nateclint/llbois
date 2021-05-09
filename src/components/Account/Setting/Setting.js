import React, { useState, useEffect } from 'react'
import Divider from '@material-ui/core/Divider';
import { auth } from '../../../firebase'
import { useStateValue } from '../../../StateProvider'
//import Modal from '@material-ui/core/Modal';
import Dialog from '@material-ui/core/Dialog';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import firebase from 'firebase'
import './Setting.css'

function Setting(props) {
  const [{ user }, dispatch] = useStateValue()

  const [success, setSuccess] = useState(true);

  const [open, setOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState(null)

  const [password, setPassword] = useState(null)
  const [messagePass, setMessagePass] = useState(null)

  const [newPass, setNewPass] = useState(null)
  const [messageNewPass, setMessageNewPass] = useState(null)

  const [confirmPass, setConfirmPass] = useState(null)
  const [messageConfirmPass, setMessageConfirmPass] = useState(null)


  const [checkPass, setCheckPass] = useState(false)
  const [checkNewPass, setCheckNewPass] = useState(false)
  const [checkConfirmPass, setCheckConfirmPass] = useState(false)

  const [disabled, setDisabled] = useState(true)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (password != null) {
      if (password.length < 6) {
        setMessagePass('Your password must at least 6 characters')
        setCheckPass(false)
      } else {
        setMessagePass(null)
        setCheckPass(true)
      }
    }

    if (newPass != null) {
      if (newPass.length < 6) {
        setMessageNewPass('Your password must at least 6 characters')
        setCheckNewPass(false)
      } else {
        setMessageNewPass(null)
        setCheckNewPass(true)
      }
    }

    if (confirmPass != null) {
      if (confirmPass !== newPass) {
        setMessageConfirmPass('Confirm password must match with New Password')
        setCheckConfirmPass(false)
      } else {
        setMessageConfirmPass(null)
        setCheckConfirmPass(true)
      }
    }

    if (checkPass && checkNewPass && checkConfirmPass) {
      setDisabled(false)
    }
    else {
      setDisabled(true)
    }

  }, [password, newPass, confirmPass, checkPass, checkNewPass, checkConfirmPass])

  //Re-authencicate
  const reauthenticateUser = (currentPassword) => {
    let user = auth.currentUser;

    //Get Authenciate Credential
    let AuthCre = firebase.auth.EmailAuthProvider.credential(user?.email, currentPassword)

    return user.reauthenticateWithCredential(AuthCre)
  }


  const handleChangePassword = (e) => {
    e.preventDefault()
    setLoading(true)
    setDisabled(true)

    reauthenticateUser(password)
      .then(() => {
        var user = auth.currentUser;

        user
          .updatePassword(newPass)
          .then(() => {
            console.log('Updated pass: ')
            setSuccess(true)
            setModalMessage('Update Successfully')
            setPassword('')
            setConfirmPass('')
            setNewPass('')
            handleOpen()
          })
          .catch((error) => {
            console.log('Update pass: ', error)
            setSuccess(false)
            setModalMessage('Update Failed')
            handleOpen()
          })


      })
      .catch(err => {
        console.log(err)

        if (err.code === 'auth/wrong-password') {
          setSuccess(false)
          setModalMessage('Wrong Current Password.')
          handleOpen()
        }
        else if (err.code === 'auth/too-many-requests') {
          setSuccess(false)
          setModalMessage('Too many requests. Temporarily disable account')
          handleOpen()
        }
        else {
          setSuccess(false)
          setModalMessage(err.message)
          handleOpen()
        }
      })


    setLoading(false)
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <div className='change___pass'>
        <div className='header___pass'>
          <span>Change Password</span>
          <span>Do not let any one know your password</span>
        </div>
        <Divider />

        <div className='body___pass container'>
          <form onSubmit={handleChangePassword}>
            <div class="form-group row">
              <label for="password" className='col-sm-3 col-form-label'>Current Password</label>
              <div className="col-sm-9">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder='Current Password'
                  autoComplete='false'
                />
              </div>

            </div>
            <div className='message___noti row'>
              <div className='col-sm-3'></div>
              <div className='col-sm-9'>{messagePass}</div>
            </div>

            <div class="form-group row">
              <label for="newpass" className='col-sm-3 col-form-label'>New Password</label>
              <div className="col-sm-9">
                <input
                  type="password"
                  className="form-control"
                  id="newpass"
                  value={newPass}
                  onChange={e => setNewPass(e.target.value)}
                  placeholder='New Password'
                  autoComplete='false'
                />
              </div>

            </div>
            <div className='message___noti row'>
              <div className='col-sm-3'></div>
              <div className='col-sm-9'>{messageNewPass}</div>
            </div>

            <div class="form-group row">
              <label for="confirmpass" className='col-sm-3 col-form-label'>Confirm New Password</label>
              <div className="col-sm-9">
                <input
                  type="password"
                  className="form-control"
                  id="confirmpass"
                  value={confirmPass}
                  onChange={e => setConfirmPass(e.target.value)}
                  placeholder='Confirm New Password'
                  autoComplete='false'
                />
              </div>

            </div>
            <div className='message___noti row'>
              <div className='col-sm-3'></div>
              <div className='col-sm-9'>{messageConfirmPass}</div>
            </div>

            <button
              className='btn btn-primary'
              type='submit'
              disabled={disabled || loading}
            >
              {
                loading ? 'UPDATING' : 'CONFIRM'
              }
            </button>
          </form>
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
            success
              ? <CheckCircleOutlineIcon style={{ color: '#54e346', fontSize: 3.5 + 'rem' }} />
              : <ErrorOutlineIcon color="secondary" style={{ fontSize: 3.5 + 'rem' }} />
          }
          <span style={{ color: `${success ? '#54e346' : '#f50057'}` }}>{modalMessage}</span>
          <button className='btn btn-primary' onClick={handleClose}>Close</button>
        </div>
      </Dialog>
    </React.Fragment>
  )
}

export default Setting
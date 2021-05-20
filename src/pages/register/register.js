import React, { useState, useEffect } from 'react'
import './register.css'
import { auth } from '../../firebase'
import { Link, useHistory } from 'react-router-dom'
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import { db } from '../../firebase'

function Register() {
  const history = useHistory()
  const [captchaToken, setCaptchaToken] = useState(null)

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [checkPass, setCheckPass] = useState(false)

  const [confirmPassword, setConfirmPassword] = useState(null)
  const [checkConfirmPass, setCheckConfirmPass] = useState(false)

  const [loading, setLoading] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const [snack, setSnack] = useState({
    vertical: 'bottom',
    horizontal: 'left',
    open: false
  })

  const [message, setMessage] = useState('')
  const { open, vertical, horizontal } = snack

  useEffect(() => {
    if (password != null) {
      if (password.length < 6) {
        setCheckPass(false)
      }
      else {
        setCheckPass(true)
      }
    }

    if (confirmPassword != null) {
      if (confirmPassword.length < 6) {
        setCheckConfirmPass(false)
      }
      else {
        setCheckConfirmPass(true)
      }
    }

    if (checkPass && checkConfirmPass) {
      setDisabled(false)
    }
    else {
      setDisabled(true)
    }
  }, [password, confirmPassword, checkPass, checkConfirmPass])

  const handleOpenSnackbar = (mess) => {

    setMessage(mess)
    setSnack({ ...snack, open: true })
  }

  const handleCloseSnackbar = () => {
    setSnack({ ...snack, open: false })
  }

  const register = async (e) => {
    e.preventDefault()
    setLoading(true)

    //Firebase createUser
    auth
    .createUserWithEmailAndPassword(email, password)
    .then((auth) => {

      if (auth) {
        setUserInfoToFireStore(auth)
      }

    })
    .catch(error => {
      console.log(error)
      handleOpenSnackbar(error.message)
    })

    setLoading(false)
  }

  const setUserInfoToFireStore = (auth) => {
    let user = auth?.user
    let name = email.split("@")
    db
      .collection('users')
      .doc(user?.uid)
      .collection('profile')
      .doc('userInfo')
      .set({
        address: 'Unknown',
        email: email,
        gender: 'Unknown',
        phone: 'Unknown',
        name: name[0]
      })
  }

  const onChangeReCAPTCHA = (token) => {
    setCaptchaToken(token)
  }

  const handleCaptchaExpired = () => {
    setCaptchaToken(null)
  }

  return (
    <div className="pageContent">
      <div className="login-section">
        <div className="container">
          <h2>CREATE AN ACCOUNT</h2>

          <div className="register-form">
            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-6">
                <div className="item">
                  <h2>PERSONAL INFORMATION</h2>
                  <p>Input your information in the field below.</p>

                  <div className="form-controller">

                    <form onSubmit={register}>
                      <div className="form-group">
                        <label for="loginInputEmail">Email <sup>*</sup></label>
                        <input type="email"
                          placeholder="Enter your e-mail"
                          id="loginInputEmail" required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      <div className="form-group">
                        <label for="loginInputPass">Password <sup>*</sup></label>
                        <input type="password"
                          placeholder="Enter your password"
                          className="loginInputPass" required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>

                      <div className="form-group">
                        <label for="loginInputPass">Confirm password <sup>*</sup></label>
                        <input type="password"
                          placeholder="Enter your password"
                          className="loginInputPass" required
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                      </div>
                      <div className='noti-password'>
                        {
                          password !== confirmPassword
                            ? <span style={{ fontSize: 0.85 + 'rem', color: '#ff4646', fontWeight: 500 }}>Password mismatch. Please input correctly</span>
                            : ''
                        }
                      </div>
                      
                      <div className="form-go">
                        <div className="form-group">
                          <button
                            type="submit"
                            className="btn"
                            disabled={disabled || loading}
                          >
                            {
                              loading ? 'CREATING...' : 'CREATE'
                            }
                          </button>
                        </div>

                        <div className="external-link">
                          <Link to='/'>
                            <a href className=""> Return to Store </a>
                          </Link>
                        </div>
                      </div>
                    </form>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleCloseSnackbar}

        key={vertical + horizontal}
      >
        <Alert onClose={handleCloseSnackbar} variant="filled" severity="error">
          {message}
        </Alert>
      </Snackbar>
    </div>
  )
}

export default Register
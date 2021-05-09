import React, { useState, useEffect, useRef } from 'react'
import './login.css'
import { auth } from '../../firebase'
import { Link, useHistory } from 'react-router-dom'
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';
import ReCAPTCHA from 'react-google-recaptcha'
import axios from '../../axios';

const PUBLIC_RECAPTCHA_KEY = '6LcYficaAAAAADjQAOjTXJN6kD8cs4LDHQvHE_4l'

function LoginPage() {
  const history = useHistory()

  const [captchaToken, setCaptchaToken] = useState(null)
  const [loadingLogin, setLoadingLogin] = useState(false)
  const [disabled, setDisabled] = useState(true)
  const [openLogin, setOpenLogin] = useState('block')
  const [openForgot, setopenForgot] = useState('none')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [forgotEmail, setForgotEmail] = useState('')

  const [snack, setSnack] = useState({
    vertical: 'bottom',
    horizontal: 'left',
    open: false
  })
  const [alertType, setAlertType] = useState('error')

  const [message, setMessage] = useState('')
  const { open, vertical, horizontal } = snack

  useEffect(() => {
    if (captchaToken) {
      setDisabled(false)
    }
    else {
      setDisabled(true)
    }

  }, [captchaToken])
  const handleOpenSnackbar = (mess, alertType) => {
    setAlertType(alertType)
    setMessage(mess)
    setSnack({ ...snack, open: true })
  }

  const handleCloseSnackbar = () => {
    setSnack({ ...snack, open: false })
  }

  const handleOpenLogin = () => {
    setOpenLogin('block')
    setopenForgot('none')
  }

  const handleOpenForgot = () => {
    setOpenLogin('none')
    setopenForgot('block')
  }

  //Login Function
  const SignIn = async (e) => {
    e.preventDefault()
    setLoadingLogin(true)

    await axios.post('/login-with-captcha',
      {
        token: captchaToken
      })
      .then(response => {
        let { success } = response.data

        if (success) {
          auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
              if (auth) {
                history.push('/')
              }

            })
            .catch((error) => {
              console.log('auth-err: ', error)

              if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
                let message = 'Invalid email or password'
                handleOpenSnackbar(message, 'error')
              }
            })
        }
        else {
          let message = 'You are not human or reCaptchaFail. Please reload page!'
          handleOpenSnackbar(message, 'error')
        }
      })
      .catch(error => {
        console.log(error, 'google response');
      })

    setLoadingLogin(false)
  }

  //ResetEMAIL function
  const sendResetEmail = (e) => {
    e.preventDefault()

    auth
      .sendPasswordResetEmail(forgotEmail)
      .then((noti) => {
        console.log(noti)
        handleOpenSnackbar('Sent reset password link. Check your email', 'success')
      })
      .catch((err) => {
        handleOpenSnackbar(err.message, 'error')
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
          <h2>ALREADY REGISTERED?</h2>

          <div className="login-form">
            <div className="row">
              <div className="col-xs-12 col-md-6">
                <div className="item">
                  <h2>NEW CUSTOMER</h2>
                  <p>By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.</p>

                  <div className="form-group">
                    <Link to='/register'>
                      <a href>CREATE AN ACCOUNT</a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-md-6">
                <div className="item">
                  <div className="login" style={{ display: `${openLogin}` }}>
                    <h2>LOGIN</h2>
                    <p>If you have an account with us, please log in.</p>

                    <div className="form-controller">
                      <form onSubmit={SignIn}>
                        <div className="form-group">
                          <label for="loginInputEmail">E-MAIL <sup>*</sup></label>
                          <input
                            type="email"
                            placeholder="Enter E-mail"
                            id="loginInputEmail" required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>

                        <div className="form-group">
                          <label for="loginInputPass">PASSWORD <sup>*</sup></label>
                          <input
                            type="password"
                            placeholder="Enter password"
                            className="loginInputPass" required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>

                        <ReCAPTCHA sitekey={PUBLIC_RECAPTCHA_KEY} size='normal' onChange={onChangeReCAPTCHA} onExpired={handleCaptchaExpired} />
                        <div className="form-go">
                          <div className="form-group">
                            <button type="submit" className="btn" disabled={loadingLogin || disabled}>
                              <span>
                                {
                                  loadingLogin ? 'LOGING IN' : 'LOGIN'
                                }
                              </span>
                            </button>
                          </div>

                          <div className="external-link">
                            <Link className="" onClick={handleOpenForgot}> Forgot your password? </Link>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="forgot-pass" style={{ display: `${openForgot}` }}>
                    <h2>FORGOT PASSWORD</h2>
                    <p>We will send you an email to reset your password.</p>

                    <div className="form-controller">
                      <form onSubmit={sendResetEmail}>
                        <div className="form-group">
                          <label for="loginInputEmail">E-MAIL <sup>*</sup></label>
                          <input
                            type="email"
                            placeholder="Enter E-mail"
                            id="loginInputEmail" required
                            value={forgotEmail}
                            onChange={(e) => setForgotEmail(e.target.value)}
                          />
                        </div>
                        <div className="form-go">
                          <div className="form-group">
                            <button type="submit" className="btn">SEND</button>
                          </div>

                          <div className="external-link">
                            <Link className="" onClick={handleOpenLogin}> or Cancel </Link>
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
      </div>

      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleCloseSnackbar}

        key={vertical + horizontal}
      >
        <Alert onClose={handleCloseSnackbar} variant="filled" severity={alertType}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  )
}

export default LoginPage
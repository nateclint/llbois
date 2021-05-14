import React from 'react'
import { useState, useEffect } from 'react'
import { useStateValue } from '../../../StateProvider'
import { db } from '../../../firebase'
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import './Profile.css'

function Profile(props) {
  const [{ user }, dispatch] = useStateValue()
  const [editForm, setEditForm] = useState('none')
  const [showForm, setShowForm] = useState('block')

  const [userInfo, setUserInfo] = useState({
    email: null,
    phone: null,
    address: null,
    name: null,
    gender: null
  })

  const [userEmail, setUserEmail] = useState(null)
  const [userPhone, setUserPhone] = useState(null)
  const [userAddr, setUserAddr] = useState(null)
  const [userGender, setUserGender] = useState(null)
  const [userName, setUserName] = useState(null)

  const [loading, setLoading] = useState(false)
  const [snack, setSnack] = useState({
    vertical: 'top',
    horizontal: 'left',
    open: false
  })
  const [alertType, setAlertType] = useState('error')

  const [message, setMessage] = useState('')
  const { open, vertical, horizontal } = snack

  const handleOpenSnackbar = (mess, alertType) => {
    setAlertType(alertType)
    setMessage(mess)
    setSnack({ ...snack, open: true })

    closeEditForm()
    setLoading(false)
  }

  const handleCloseSnackbar = () => {
    setSnack({ ...snack, open: false })
  }


  useEffect(() => {
    db
      .collection('users')
      .doc(user?.uid)
      .collection('profile')
      .doc('userInfo')
      .onSnapshot(doc => {
        if (doc.exists) {
          let data = doc.data()
          setUserInfo(data)
          setUserEmail(data.email)
          setUserPhone(data.phone)
          setUserAddr(data.address)
          setUserGender(data.gender)
          setUserName(data.name)
        }
      })
  }, [user])


  const openEditForm = (e) => {
    e.preventDefault()
    setShowForm('none')
    setEditForm('block')
  }

  const closeEditForm = () => {
    setEditForm('none')
    setShowForm('block')

  }

  const handleSubmitUserInfo = (e) => {
    e.preventDefault()

    setLoading(true)
    let docRef = db.collection('users').doc(user?.uid).collection('profile').doc('userInfo')

    db.runTransaction((transaction) => {
      return transaction.get(docRef).then((sfDoc) => {
        if (!sfDoc.exists) {
          throw "Documents does not exists";
        }

        transaction.update(docRef, {
          address: userAddr,
          name: userName,
          phone: userPhone,
          gender: userGender
        })
      })
    }).then(() => {
      handleOpenSnackbar("Update Successfully", 'success')
    }).catch(err => {
      handleOpenSnackbar("Update Failed", 'error')
    })


    
  }

  const handleCancelClick = (e) => {
    e.preventDefault()
    closeEditForm()
    //handleOpenSnackbar('Test', 'success')
  }


  return (
    <React.Fragment>
      <div id="profile" className="container">
        <div className="row">
          <div className="col-12">
            <form className='from____show' style={{ display: showForm }} onSubmit={openEditForm}>
              <div class="form-group row">
                <label for="email" className='col-sm-2 col-form-label'>Email</label>
                <div className="col-sm-10">
                  <input type="email" className="form-control" id="email" value={userInfo.email ? userInfo.email : 'Empty'} readOnly={true}/>
                </div>
              </div>

              <div class="form-group row">
                <label for="name" className='col-sm-2 col-form-label'>Name</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="name" value={userInfo.name ? userInfo.name : 'Empty'} readOnly={true}/>
                </div>
              </div>

              <div class="form-group row">
                <label for="phone" className='col-sm-2 col-form-label'>Phone</label>
                <div className="col-sm-10">
                  <input type="tel" className="form-control" id="phone" value={userInfo.phone ? userInfo.phone : 'Empty'} readOnly={true}/>
                </div>
              </div>

              <div class="form-group row">
                <label for="address" className='col-sm-2 col-form-label'>Adress</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="address" value={userInfo.address ? userInfo.address : 'Empty'} readOnly={true}/>
                </div>
              </div>

              <div class="form-group row">
                <label for="gender" className='col-sm-2 col-form-label'>Gender</label>
                <div className="col-sm-10">
                  <select className='form-control' id='gender'>
                    <option>{userInfo.gender ? userInfo.gender : 'Empty'}</option>
                  </select>
                </div>
              </div>

              <button className='btn btn-primary'>EDIT</button>
            </form>

            <form
              className='form___edit'
              style={{ display: editForm }}
              onSubmit={handleSubmitUserInfo}

            >
              <div class="form-group row">
                <label for="email" className='col-sm-2 col-form-label'>Email</label>
                <div className="col-sm-10">
                  <input
                    readOnly={true}
                    type="email" className="form-control" id="email" value={userEmail}
                    onChange={e => setUserEmail(e.target.value)}
                  />
                </div>
              </div>

              <div class="form-group row">
                <label for="name" className='col-sm-2 col-form-label'>Name</label>
                <div className="col-sm-10">
                  <input
                    type="text" className="form-control" id="name" value={userName}
                    onChange={e => setUserName(e.target.value)}
                  />
                </div>
              </div>

              <div class="form-group row">
                <label for="phone" className='col-sm-2 col-form-label'>Phone</label>
                <div className="col-sm-10">
                  <input
                    type="tel" className="form-control" id="phone" value={userPhone}
                    onChange={e => setUserPhone(e.target.value)}
                  />
                </div>
              </div>

              <div class="form-group row">
                <label for="address" className='col-sm-2 col-form-label'>Adress</label>
                <div className="col-sm-10">
                  <input
                    type="text" className="form-control" id="address" value={userAddr}
                    onChange={e => setUserAddr(e.target.value)}
                  />
                </div>
              </div>

              <div class="form-group row">
                <label for="gender" className='col-sm-2 col-form-label'>Gender</label>
                <div className="col-sm-10">
                  <select className='form-control' id='gender' onChange={e => setUserGender(e.target.value)}>
                    <option value='Male' selected={true}>Male</option>
                    <option value='Female' >Female</option>
                    <option value='Other' >Other</option>
                  </select>
                </div>
              </div>


              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <button className='btn btn-primary' type='submit' disabled={loading}>
                  {
                    loading ? 'SAVING...' : 'SAVE'
                  }
                </button>
                <span className='cancel____form_profile' onClick={handleCancelClick}>CANCEL</span>
              </div>
            </form>

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
    </React.Fragment>
  )

}

export default Profile
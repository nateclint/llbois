import React, {useEffect} from 'react'
import MainRouter from '../../router/router'
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/header'
import { auth } from '../../firebase';
import { useStateValue } from '../../StateProvider';




function App() {
  const [{user}, dispatch] = useStateValue()
  
  useEffect(() => {
    let storage = localStorage.getItem('basket')

    if(storage){
      dispatch({
        type: 'LOAD_BASKET',
        items: JSON.parse(storage)
      })
    }
    else return
  }, [])

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('The USER IS >>> ', authUser)

      if(authUser){
        //Check the user just log in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

        dispatch({
          type: 'SET_LOG_IN',
          isLogin: true
        })
      } else {
        //The user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })

        dispatch({
          type: 'SET_LOG_IN',
          isLogin: false
        })
      }
    })
  }, [user])

  return (
    <BrowserRouter>
      <div className="Zangg">
        <Header/>
          <MainRouter></MainRouter>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;

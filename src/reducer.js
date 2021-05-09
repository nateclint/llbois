export const initialState = {
  basket: [],
  user: null,
  isLogin: false,
  checkOut: null
}

//selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.data.price + amount, 0)

export const reducer = (state, action) => {
  console.log('Action:' ,action)
  switch ( action.type) {
    case 'SET_CHECKOUT_INFO':
      let checkout = {
        country: action.country,
        city: action.city,
        zip: action.zip,
        note: action.note,
        address: action.address
      }
    
      localStorage.setItem('checkOut', JSON.stringify(checkout))

      return{
        ...state,
        checkOut: checkout
      }
    case 'REMOVE_CHECKOUT':
      localStorage.removeItem('checkOut')
      return {
        ...state,
        checkOut: null
      }
    case 'LOAD_BASKET':
      return{
        ...state,
        basket: [...state.basket, ...action.items]
      }
    case 'ADD_TO_BASKET':
      let store = [...state.basket, action.item]
      localStorage.setItem('basket', JSON.stringify(store))
      
      return {
        ...state,
        basket: [...state.basket, action.item],
      }
    case 'REMOVE_FROM_BASKET':
      console.log(action.id)
      const index = state.basket.findIndex(
        (basketItem) => basketItem.data.sku === action.id
      )
      let newBasket = [...state.basket]

      if (index >= 0) {
        newBasket.splice(index, 1)

      } else {
        console.warn(
          `Can not remove id ${action.id}`
        )
      }

      localStorage.setItem('basket', JSON.stringify(newBasket))
      return {
        ...state,
        basket: newBasket
      }
    case 'REMOVE_ALL_BASKET':
      localStorage.removeItem('basket')

      return {
        ...state,
        basket: []
      }
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      }
    case 'SET_LOG_IN':
      return {
        ...state,
        isLogin: action.isLogin
      }
    default:
      return
  }
}


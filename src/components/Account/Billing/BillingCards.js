import React  from 'react'
import { users } from '../../../data'

class BillingCard extends React.Component {
  constructor(props) {
    super(props)
    
    this.user_id = props.user_id
    this.state = {
      items: users[this.user_id].billing
    }
  }

  getCardNumber = (str) => {
    return '**** **** **** ' + str.split(' ')[3]
  }

  getName = (str) => {
    return str.toUpperCase()
  }

  getButtons = (str) => {
    if (str) {
      return (
        <React.Fragment>
        <a href="#" class="btn btn-outline-primary disabled">Default</a>
        <a href={"/account/" + this.user_id + "/billing-edit"} class="btn btn-light border">Edit</a>
        <a to="#" class="btn btn-outline-danger disabled">Delete</a>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
        <a href="#" class="btn btn-outline-primary"> Set default</a>
        <a href={"/account/" + this.user_id + "/billing-edit"} class="btn btn-light border">Edit</a>
        <a href="#" class="btn btn-outline-danger">Delete</a>
        </React.Fragment>
      )
    }
  }

  render() {
    return (
      <div class="cardlist">
        {
          this.state.items.map((index, value) => {
            return (
              <div key={value} class="card mb-4" >
                <div class="card-header d-flex flex-row justify-content-between">
                  <div>
                    <ion-icon name="card-outline"></ion-icon>
                    {' ' + index.bankName}
                  </div>
                  <div>{this.getCardNumber(index.cardNumber)}</div>
                </div>
                <div class="card-body">
                  <h5 class="card-title">
                    <span class="text-uppercase">{this.getName(index.name)}</span>
                  </h5>
                  <p class="card-text">Address: <b>{index.address}</b></p>
                  <div class="btn-block">
                    {this.getButtons(index.default)}
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default BillingCard
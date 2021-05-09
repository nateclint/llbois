import React  from 'react'
import { users } from '../../../data'

class ProfileEdit extends React.Component {
  constructor(props) {
    super(props)
    
    this.user_id = props.user_id
    this.state = {
      items: users
    }
  }

  getGenderSelected = (gender) => {
    if (this.state.items[this.user_id].gender === gender) {
        return true
    } else {
        return false
    }
  }

  render() {
    return (
      <div id="profile-edit" class="container col-8 col-lg-9 border p-4">
        <div class="row">
          <div class="col-4 text-center position-relative h-100">
            <img src={this.state.items[this.user_id].imgSrc} alt="Profile" class="w-100 pb-4 rounded-circle" />
            <a href="#"><button type="button" class="btn btn-light border mt-3">
              Upload
            </button></a>
          </div>
          <form class="col-8">
            <div class="form-group">
              <label for="name">Name</label>
              <input class="form-control" type="text" id="name" value={this.state.items[this.user_id].fullName} required />
            </div>
            <div class="form-group">
              <label for="username">Username</label>
              <input class="form-control" type="text" id="username" value={this.state.items[this.user_id].username} required />
            </div>
            <div class="form-group">
              <label for="dob">Date of Birth</label>
              <input class="form-control" type="date" id="dob" value={this.state.items[this.user_id].dob} />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input class="form-control" type="email" id="email" value={this.state.items[this.user_id].email} />
            </div>
            <div class="form-group">
              <label for="phone">Phone</label>
              <input class="form-control" type="tel" id="phone" value={this.state.items[this.user_id].phone} />
            </div>
            <div class="form-group">
              <label for="gender">Gender</label>
              <select class="form-control" id="gender">
              <option selected={this.getGenderSelected('Male')}>Male</option>
              <option selected={this.getGenderSelected('Female')}>Female</option>
              <option selected={this.getGenderSelected('Not specified')}>Not specified</option>
              </select>
            </div>
            <button type="submit" class="btn btn-outline-primary mr-2 mt-3">Save</button>
            <a href={"/account/" + this.user_id + "/profile"}><button type="button" class="btn btn-light border mt-3">Cancel</button></a>
          </form>
        </div>
      </div>
    )
  }
}

export default ProfileEdit
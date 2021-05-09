import React  from 'react'
import './Breadcrumb.css'

class Breadcrumb extends React.Component {
  constructor(props) {
    super(props)
    this.path = props.path
    if (props.user_id != null) {
      this.user_id = props.user_id
    }
  }

  generateCrumbs = () => {
    // Root page
    let html = '<li class="breadcrumb-item"><a href="/">Home</a></li>'
    for (let i = 0; i < this.path.length; i++) {
      let page = this.path[i];
      let pageU = page.toUpperCase()[0] + page.slice(1)
      if (pageU === 'undefined' || parseInt(page) == this.user_id) {
        continue
      }
      if (i !== this.path.length - 1) {
        switch (page) {
          case 'account':
            page = 'account/' + this.user_id + '/profile'
            pageU = 'Account'
            break;
        }
        // Parent page
        html += '\n<li class="breadcrumb-item"><a href="/' + page + '">'+ pageU +'</a></li>'
      } else {
        // Active page
        html += '\n<li class="breadcrumb-item active" aria-current="page">' + pageU.split('-')[0] + '</li>'
      }
    }
    return html
  }

  render() {
    return (
      <div class="nav-breadcrumb bg-light-custom">
        <div class="container">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-light-custom"
              dangerouslySetInnerHTML={{ __html: this.generateCrumbs() }}
            />
          </nav>
        </div>
      </div>
    )
  }
}

export default Breadcrumb
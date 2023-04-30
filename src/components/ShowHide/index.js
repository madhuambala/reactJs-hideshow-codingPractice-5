// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {isFirstNameStatus: false, isLastNameStatus: false}

  showFirstName = () => {
    const {isFirstNameStatus} = this.state
    this.setState(prevState => ({
      isFirstNameStatus: !prevState.isFirstNameStatus,
    }))
  }

  showLastName = () => {
    const {isLastNameStatus} = this.state
    this.setState(prevState => ({
      isLastNameStatus: !prevState.isLastNameStatus,
    }))
  }

  render() {
    const {isFirstNameStatus, isLastNameStatus} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="card">
          <div className="button-card">
            <button
              className="button"
              type="button"
              onClick={this.showFirstName}
            >
              Show/Hide FirstName
            </button>
            {isFirstNameStatus && <p className="firstName">Joe</p>}
          </div>
          <div className="button-card">
            <button
              className="button"
              type="button"
              onClick={this.showLastName}
            >
              Show/Hide LastName
            </button>
            {isLastNameStatus && <p className="firstName">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide

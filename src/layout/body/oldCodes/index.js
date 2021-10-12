import React, { Component } from 'react'
import Header from '../../header'
import Navbar from '../../navbar'
import Footer from '../../footer'
import './style.css'

class OldCodes extends Component {
  state = {
    numOfDevices: 0,
    customerEmail: '',
    numOfDays: 0,
    componentType: 'old',
  }

  onNumOfDevicesInput = (event) => {
    if (!isNaN(event.target.value)) {
      this.setState({ numOfDevices: event.target.value })
    }
  }

  onCustomerEmailInput = (event) => {
    this.setState({ customerEmail: event.target.value })
  }

  onNumOfDaysInput = (event) => {
    this.setState({ numOfDays: event.target.value })
  }

  render() {
    return (
      <div>
        <Header />
        <Navbar />
        <div className="row">
          <div className="container">
            <div>
              <label>Customer email</label>
              <input
                type="text"
                value={this.state.customerEmail}
                onChange={this.onCustomerEmailInput}
              />
            </div>
          </div>

          <div className="container">
            <div>
              <label>Number of devices</label>
              <input
                value={this.state.numOfDevices}
                onChange={this.onNumOfDevicesInput}
              />
            </div>
          </div>

          <div className="container">
            <div>
              <label>Number of days</label>
              <input
                value={this.state.numOfDays}
                onChange={this.onNumOfDaysInput}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default OldCodes

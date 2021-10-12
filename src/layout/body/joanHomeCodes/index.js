import React, { Component } from 'react'
import Header from '../../header'
import Navbar from '../../navbar'
import Footer from '../../footer'
import './style.css'
import Calculator from './calculator'
import Button from '../../../components/button/index'
import { EUR, USD, YEARLY, SUB_CODE, PROMO_CODE } from '../constants'

class JoanHomeCodes extends Component {
  state = {
    numOfDevices: 0,
    customerEmail: '',
    numOfMonths: 0,
    yearlyPlan: false,
    codeType: SUB_CODE,
    subBtnIsActive: true,
    proBtnIsActive: false,
    currency: EUR,
    componentType: 'home',
  }

  onNumOfDevicesInput = (event) => {
    if (!isNaN(event.target.value)) {
      this.setState({ numOfDevices: event.target.value })
    }
  }

  onCustomerEmailInput = (event) => {
    this.setState({ customerEmail: event.target.value })
  }

  onNumOfMonthsInput = (event) => {
    this.setState({ numOfMonths: event.target.value })
    if (this.state.numOfMonths === 12) this.setState({ yearlyPlan: true })
  }

  handleYearlyPlanBtnClick = (event) => {
    event.preventDefault()
    if (this.state.yearlyPlan === false) {
      this.setState({
        yearlyPlan: true,
        numOfMonths: 12,
      })
    } else {
      this.setState({
        yearlyPlan: false,
        numOfMonths: 0,
      })
    }
  }

  handleCodeTypeBtnClick = (event) => {
    event.preventDefault()
    if (this.state.codeType === SUB_CODE) {
      this.setState({
        codeType: PROMO_CODE,
        subBtnIsActive: false,
        proBtnIsActive: true,
      })
    } else if (this.state.codeType === PROMO_CODE) {
      this.setState({
        codeType: SUB_CODE,
        subBtnIsActive: true,
        proBtnIsActive: false,
      })
    }
  }

  handleCurrencySelect = () => {
    if (this.state.currency === EUR) {
      this.setState({
        currency: USD,
      })
    } else if (this.state.currency === USD) {
      this.setState({
        currency: EUR,
      })
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Navbar />
        <div className="row">
          <div className="container">
            <div>
              <label>Number of devices</label>
              <input
                value={this.state.numOfDevices}
                onChange={this.onNumOfDevicesInput}
              />
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
              <label>Code length in months</label>
              <input
                value={this.state.numOfMonths}
                onChange={this.onNumOfMonthsInput}
              />
              <Button
                isActive={this.state.yearlyPlan}
                value={YEARLY}
                handle={this.handleYearlyPlanBtnClick}
              />
            </div>
          </div>
          <div className="container">
            <div>
              <label>Code type</label>
              <Button
                isActive={this.state.subBtnIsActive}
                value={'Subscription code'}
                handle={this.handleCodeTypeBtnClick}
              />
              <Button
                isActive={this.state.proBtnIsActive}
                value={'Promotional code'}
                handle={this.handleCodeTypeBtnClick}
              />
            </div>
          </div>
          <div className="container">
            <div className="form">
              <label>Currency </label>
              <select
                name="currency"
                className="select"
                defaultValue={this.state.currency}
              >
                <option value={EUR} onClick={this.handleCurrencySelect}>
                  €
                </option>
                <option value={USD} onClick={this.handleCurrencySelect}>
                  $
                </option>
              </select>
            </div>
          </div>
        </div>
        <Calculator {...this.state} />
        <Footer />
      </div>
    )
  }
}

export default JoanHomeCodes

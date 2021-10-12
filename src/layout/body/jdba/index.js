import React, { Component } from 'react'
import Header from '../../header'
import Navbar from '../../navbar'
import Footer from '../../footer'
import './style.css'
import Calculator from './calculator'
import Button from '../../../components/button/index'
import {
  YEARLY,
  SUB_CODE,
  PROMO_CODE,
  NORMAL_PLAN,
  EAP_PLAN,
  EUR,
  USD,
} from '../constants'

class JDBA extends Component {
  state = {
    numOfUsers: 0,
    customerEmail: '',
    numOfMonths: 0,
    yearlyPlan: false,
    codeType: SUB_CODE,
    subBtnIsActive: true,
    proBtnIsActive: false,
    planType: NORMAL_PLAN,
    normalPlanBtnIsActive: true,
    eapPlanBtnIsActive: false,
    currency: EUR,
    componentType: 'jdba',
  }

  onNumOfUsersInput = (event) => {
    if (!isNaN(event.target.value)) {
      this.setState({ numOfUsers: event.target.value })
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

  handlePlanTypeBtnClick = (event) => {
    event.preventDefault()
    if (this.state.planType === NORMAL_PLAN) {
      this.setState({
        planType: EAP_PLAN,
        normalPlanBtnIsActive: false,
        eapPlanBtnIsActive: true,
      })
    } else if (this.state.planType === EAP_PLAN) {
      this.setState({
        planType: NORMAL_PLAN,
        normalPlanBtnIsActive: true,
        eapPlanBtnIsActive: false,
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
              <label>Number of users</label>
              <input
                value={this.state.numOfUsers}
                onChange={this.onNumOfUsersInput}
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
            <div>
              <label>Plan type</label>
              <Button
                isActive={this.state.normalPlanBtnIsActive}
                value={NORMAL_PLAN}
                handle={this.handlePlanTypeBtnClick}
              />
              <Button
                isActive={this.state.eapPlanBtnIsActive}
                value={EAP_PLAN}
                handle={this.handlePlanTypeBtnClick}
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

export default JDBA

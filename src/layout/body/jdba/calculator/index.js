import React from 'react'
import './style.css'
import { NORMAL_PLAN, EAP_PLAN, EUR, USD } from '../../constants'
import { NORMAL, EAP } from '../constants'
import { connect } from 'react-redux'
import { saveCode } from '../../../../redux'

export const costCalculator = (numOfUsers, numOfMonths, planType) => {
  switch (planType) {
    case NORMAL_PLAN:
      return numOfUsers * numOfMonths * NORMAL
    case EAP_PLAN:
      return numOfUsers * numOfMonths * EAP
    default:
      break
  }
}

const Calculator = (props) => {
  const { numOfUsers, numOfMonths, planType, currency, save } = props
  const currencySign = () => {
    switch (currency) {
      case USD:
        return '$'
      case EUR:
        return '€'
      default:
        return 'Currency not supported'
    }
  }

  return (
    <div>
      <div className="output_container">
        <p>
          {costCalculator(numOfUsers, numOfMonths, planType)}
          {currencySign()}
        </p>
      </div>
      <div className="output_button">
        <button onClick={() => save(props)}>Save code</button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = {
  save: saveCode,
}
export default connect(mapStateToProps, mapDispatchToProps)(Calculator)

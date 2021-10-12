import React from 'react'
import './style.css'
import { YEAR, MONTH } from '../constants'
import { EUR, USD } from '../../constants'
import { connect } from 'react-redux'
import { saveCode } from '../../../../redux'

export const costCalculator = (numOfDevices, numOfMonths, yearlyPlan) => {
  if (yearlyPlan) {
    return numOfDevices * YEAR
  } else {
    return numOfDevices * numOfMonths * MONTH
  }
}

const Calculator = (props) => {
  const {
    numOfDevices,
    numOfMonths,
    yearlyPlan,
    planType,
    currency,
    save,
  } = props

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
          {costCalculator(
            numOfDevices,
            numOfMonths,
            yearlyPlan,
            planType,
            currency,
          )}
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

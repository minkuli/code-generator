import React from 'react'
import './style.css'
import {
  ESP_M,
  DSP_M,
  ESP_Y,
  DSP_Y,
  EPP_M,
  DPP_M,
  EPP_Y,
  DPP_Y,
} from '../constants'
import { STD_PLAN, PREM_PLAN, EUR, USD } from '../../constants'
import { connect } from 'react-redux'
import { saveCode } from '../../../../redux'

export const costCalculator = (
  numOfDevices,
  numOfMonths,
  yearlyPlan,
  planType,
  currency,
) => {
  switch (currency) {
    case EUR:
      switch (planType) {
        case STD_PLAN:
          if (yearlyPlan) {
            return numOfDevices * ESP_Y
          } else {
            return numOfDevices * numOfMonths * ESP_M
          }
        case PREM_PLAN:
          if (yearlyPlan) {
            return numOfDevices * EPP_Y
          } else {
            return numOfDevices * numOfMonths * EPP_M
          }
        default:
          break
      }
      break
    case USD:
      switch (planType) {
        case STD_PLAN:
          if (yearlyPlan) {
            return numOfDevices * DSP_Y
          } else {
            return numOfDevices * numOfMonths * DSP_M
          }
        case PREM_PLAN:
          if (yearlyPlan) {
            return numOfDevices * DPP_Y
          } else {
            return numOfDevices * numOfMonths * DPP_M
          }
        default:
          break
      }
      break
    default:
      break
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

import { costCalculator as newCodesCalc } from '../layout/body/newCodes/calculator'
import { costCalculator as joanHomeCodesCalc } from '../layout/body/joanHomeCodes/calculator'
import { costCalculator as jdbaCodesCalc } from '../layout/body/jdba/calculator'

export function saveCode(formData) {
  let {
    componentType,
    numOfDevices,
    numOfMonths,
    yearlyPlan,
    planType,
    currency,
    codeType,
    amount,
  } = formData
  const MyUserName = 'fLYBdeVQnTtn5Ed7tOVHtIZOoFbTWhLNC5Mf7Fju'
  const MyPassword =
    'Pxg2sHZLM5eewDBgB5sbjITqvI79MnKp6kufFgJZesHrrMiQzFnqFQMd3cvDcYaAOQydzz3nImHvGjkmc47KQctWrWUelR2C499kSibm3HZ0theu15EncDOarr0gZxsX'
  if (componentType === 'new') {
    amount = newCodesCalc(
      numOfDevices,
      numOfMonths,
      yearlyPlan,
      planType,
      currency,
    )
  } else if (componentType === 'home') {
    amount = joanHomeCodesCalc(
      numOfDevices,
      numOfMonths,
      yearlyPlan,
      planType,
      currency,
    )
  } else if (componentType === 'jdba') {
    amount = jdbaCodesCalc(formData.numOfUsers, numOfMonths, planType)
    console.log('jdba amount', amount)
  }

  return (dispatch) => {
    const url = 'https://joan-test.joan.app/'

    dispatch(start())

    fetch(url + 'api/token/', {
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `grant_type=client_credentials&client_id=${MyUserName}&client_secret=${MyPassword}`,
    })
      .then((res) => res.json())
      .then((res) => {
        let token = res['access_token']
        let payload = {}
        if (componentType === 'old') {
          payload = {
            reseller: 3,
            devicesAllowed: numOfDevices,
            client: '',
            duration: numOfMonths,
            voided: '',
            devices: '',
            type: 'legacy',
            amount: 0,
            currency: '',
          }
        } else {
          payload = {
            reseller: 3,
            devicesAllowed: 0,
            client: '',
            duration: 0,
            voided: '',
            devices: '',
            type: codeType,
            amount,
            currency,
          }
        }
        fetch(url + 'rest/management/prepaidcode/', {
          method: 'post',
          headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        })
          .then((res) => res.json())
          .then((res) => {
            dispatch(response(res))
          })
      })
      .catch((e) => {
        dispatch(error(e))
      })
  }
}

function start() {
  return {
    type: 'START',
  }
}

function response(code) {
  return {
    type: 'RESPONSE',
    payload: code,
  }
}

function error(e) {
  return {
    type: 'ERROR',
    payload: e,
  }
}

const initialState = {
  loading: false,
  code: null,
  error: null,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'START':
      return {
        ...state,
        loading: true,
      }
    case 'RESPONSE':
      return {
        ...state,
        loading: false,
        code: action.payload,
      }
    case 'ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

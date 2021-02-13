import moment from 'moment'

//!!!!! ONLY CHANGE LINES 5 - 7

const day = 5
const month = 3
const year = 2021

export const dateValidation = () => {
  const date = moment(
    `${year.toString()}-${month.toString()}-${day.toString()}`
  )
  const check = date.isValid()
  if (!check) {
    window.alert(
      '!!WHOOPS!! You may have made a typo as THE DATE YOU PUT IN IS NOT VALID. GO TO src/config/dateChange.js AND UPDATE TO A VALID DATE 👍'
    )
    console.log('%c' + check, 'background: #ff000d; color: #bada55')
  }
}

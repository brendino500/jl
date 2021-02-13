import moment from 'moment'

//!!!!! ONLY CHANGE LINES 5 - 9 FOR THE RELEASE DATE OF THE PRODUCT AS NUMBERS.
//* NOTE HOUR IS IN 24HRS

export const day = 15
export const month = 2
export const year = 2021
export const hour = 21
export const minute = 0

//!! NO MESSING AROUND THE REST OF THE CODE. I SEE YOU... 🙅‍♂️🙅‍♂️🙅‍♂️🙅‍♂️🙅‍♂️

export let dateString = ''
export let UTC = ''
const date = moment(`${year.toString()}-${month.toString()}-${day.toString()}`)
const sortDateAndTime = moment(
  `${year.toString()}-${month.toString()}-${day.toString()} ${hour}:${minute}`
)
export let UTCFinish = moment(
  `${year.toString()}-${month.toString()}-${day.toString()} ${
    hour + 1
  }:${minute}`
).format()

export const dateValidation = () => {
  const check = date.isValid()
  if (!check) {
    window.alert(
      `!!WHOOPS!! You may have made a typo as THE DATE YOU PUT IN IS NOT VALID. GO TO src/config/dateChange.js AND UPDATE TO A VALID DATE 👍 YOU ALSO HAVE TO HARD REFRESH THIS PAGE ONCE COMPLETED`
    )
  }
}

const dateToWords = () => {
  dateString = moment(date).format('Do MMMM')
}
dateToWords()

const formatToUTC = () => {
  UTC = moment(sortDateAndTime).format()
  console.log(UTC)
}
formatToUTC()

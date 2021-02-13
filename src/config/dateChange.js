import moment from 'moment'

//!!!!! ONLY CHANGE LINES 7 - 11 FOR THE RELEASE DATE OF THE PRODUCT AS NUMBERS.
//* NOTE HOUR IS IN 24HRS

export const releaseDate = {
  day: 15,
  month: 6,
  year: 2021,
  hour: 21,
  minute: 0,
}

//!! NO MESSING AROUND THE REST OF THE CODE. I SEE YOU... 🙅‍♂️🙅‍♂️🙅‍♂️🙅‍♂️🙅‍♂️

const date = moment(
  `${releaseDate.year.toString()}-${releaseDate.month.toString()}-${releaseDate.day.toString()}`
)
export const dateString = moment(date).format('Do MMMM')
const shortDateAndTime = moment(
  `${releaseDate.year.toString()}-${releaseDate.month.toString()}-${releaseDate.day.toString()} ${
    releaseDate.hour
  }:${releaseDate.minute}`
)
export let UTC = moment(shortDateAndTime).format()
export let UTCFinish = moment(
  `${releaseDate.year.toString()}-${releaseDate.month.toString()}-${releaseDate.day.toString()} ${
    releaseDate.hour + 1
  }:${releaseDate.minute}`
).format()

export const dateValidation = () => {
  const check = date.isValid()
  if (!check) {
    window.alert(
      `!!WHOOPS!! You may have made a typo as THE DATE YOU PUT IN IS NOT VALID. GO TO src/config/dateChange.js AND UPDATE TO A VALID DATE 👍`
    )
  }
}

export const countdownDate = new Date(
  releaseDate.year,
  releaseDate.month - 1,
  releaseDate.day,
  releaseDate.hour,
  releaseDate.minute
).getTime()

export const hasDateHappened = () => {
  const currentTime = new Date().getTime()
  return countdownDate - currentTime <= 0
}

console.log(hasDateHappened())

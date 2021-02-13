import moment from 'moment'

//!!!!! ONLY CHANGE LINES 5 - 7 FOR THE RELEASE DATE OF THE PRODUCT

export const day = 15
export const month = 12
export const year = 2021

//!! NO MESSING AROUND THE REST OF THE CODE. I SEE YOU... 🙅‍♂️🙅‍♂️🙅‍♂️🙅‍♂️🙅‍♂️

export let dateString = ''
const date = moment(`${year.toString()}-${month.toString()}-${day.toString()}`)

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

import { Button } from '@material-ui/core'

import { UTC, UTCFinish } from '../../config/dateChange'
import addToCalendarButton from '../../assets/add-to-calendar-button.png'
import useStyles from '../../styles/heroStyles/ButtonsMainStyles'

export default function CalendarButton() {
  const classes = useStyles()

  const gapi = window.gapi
  const DISCOVERY_DOCS = [
    'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
  ]
  const SCOPES = 'https://www.googleapis.com/auth/calendar'
  const CLIENT_ID =
    '725151615208-7vfs07dj8mt8j9gickg29l89mu9vbf0a.apps.googleusercontent.com'
  const API_KEY = 'AIzaSyA0zAu2REpL3tW9Iz1mlyQE5BYcZmsOXx4'

  const handleAddToCalendar = () => {
    gapi.load('client:auth2', () => {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      })
      gapi.client.load('calendar', 'v3', () => {})

      // signIn() returns promise --> once user has signed in promse is resolved.
      gapi.auth2
        .getAuthInstance()
        .signIn()
        .then(() => {
          const event = {
            summary: 'Tomb Raider Release',
            location: 'UK',
            description: 'Tomb Raider is available to buy, go go go!',
            start: {
              dateTime: UTC,
            },
            end: {
              dateTime: UTCFinish,
            },
            reminders: {
              useDefault: false,
              overrides: [
                { method: 'email', minutes: 24 * 60 },
                { method: 'popup', minutes: 10 },
              ],
            },
          }

          const request = gapi.client.calendar.events.insert({
            calendarId: 'primary',
            resource: event,
          })
          request.execute((event) => {
            window.open(event.htmlLink)
          })
        })
    })
  }
  return (
    <Button onClick={handleAddToCalendar}>
      <img
        src={addToCalendarButton}
        alt="add to calendar"
        className={`${classes.button} hvr-grow`}
      />
    </Button>
  )
}

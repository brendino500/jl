import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import SocialIconsLayout from './SocialIconsLayout'

const useStyles = makeStyles((theme) => ({}))

export default function ButtonsMain() {
  const classes = useStyles()

  const gapi = window.gapi
  const DISCOVERY_DOCS = [
    'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
  ]
  const SCOPES = 'https://www.googleapis.com/auth/calendar'
  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID_KEY
  const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY

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
            summary: 'Tomb Raider',
            location: '800 Howard St., San Francisco, CA 94103',
            description:
              "A chance to hear more about Google's developer products.",
            start: {
              dateTime: '2021-02-16T09:00:00-07:00',
              timeZone: 'America/Los_Angeles',
            },
            end: {
              dateTime: '2021-02-16T17:00:00-07:00',
              timeZone: 'America/Los_Angeles',
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
    <>
      <Button onClick={handleAddToCalendar}>Add to Calendar</Button>

      <Button
        href="https://square-enix-games.com/"
        target="_blank"
        rel="noreferrer"
      >
        Newsletter SignUp
      </Button>

      <SocialIconsLayout />
    </>
  )
}

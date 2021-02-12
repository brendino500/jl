import { Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  buttonLink: {
    textDecoration: 'none',
  },
}))

export default function ButtonsMain() {
  const classes = useStyles()
  return (
    <>
      <Typography>Reveal Event April 27th</Typography>
      <Button>Watch Teaser</Button>
      <Button>Add to Calendar</Button>
      <a
        href="https://square-enix-games.com/"
        target="_blank"
        rel="noreferrer"
        className={classes.buttonLink}
      >
        <Button>Newsletter SignUp</Button>
      </a>
    </>
  )
}

import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
  },
  buttonText: {
    color: 'black',
    fontFamily: 'Sora',
    marginLeft: '1em',
  },
}))

export default function UserButtons({ text }) {
  const classes = useStyles()
  return (
    <>
      <a
        href="http://square-enix-games.com"
        target="_blank"
        rel="noreferrer"
        className={classes.link}
      >
        <Button disableRipple="true" className={classes.buttonText}>
          {text}
        </Button>
      </a>
    </>
  )
}

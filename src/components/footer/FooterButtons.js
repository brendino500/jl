import { Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1em',
    [theme.breakpoints.between('md', 'lg')]: {
      height: 10,
    },
  },
  button: {
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: 9,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: 12,
    },
  },
  buttonFormat: {
    display: 'flex',
    alignItems: 'center',
  },
}))

const buttonText = [
  { label: 'Cookie Policy', url: '' },
  { label: 'Terms of Use', url: '' },
  { label: 'Privacy Policy', url: '' },
  { label: 'Support', url: '' },
  { label: 'Material Usage', url: '' },
]

export default function FooterButtons() {
  const classes = useStyles()

  const getBulletPoint = (index) => {
    if (index < buttonText.length - 1) {
      return <Typography>•</Typography>
    }
  }

  return (
    <div className={classes.root}>
      {buttonText.map((text, index) => (
        <div className={classes.buttonFormat}>
          <Button className={classes.button} href={text.url}>
            {text.label}
          </Button>
          {getBulletPoint(index)}
        </div>
      ))}
    </div>
  )
}

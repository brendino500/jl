import { Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1em',
  },
  button: {
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: 12,
    },
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
  return (
    <div className={classes.root}>
      {buttonText.map((text, index) => (
        <>
          <div>
            <Button key={text.label} className={classes.button} href={text.url}>
              {text.label}
            </Button>
          </div>
          <div>
            <Typography key={index} className="footer-bulletpoint">
              •
            </Typography>
          </div>
        </>
      ))}
    </div>
  )
}

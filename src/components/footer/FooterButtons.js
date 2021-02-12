import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  button: {},
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
    <>
      {buttonText.map((text) => (
        <Button key={text.label} className={classes.button} href={text.url}>
          {text.label}
        </Button>
      ))}
    </>
  )
}

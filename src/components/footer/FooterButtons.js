import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  button: {},
}))

const buttonText = [
  'Cookie Policy',
  'Terms of Use',
  'Privacy Policy',
  'Support',
  'Material Usage',
]

export default function FooterButtons() {
  const classes = useStyles()
  return (
    <>
      {buttonText.map((text, index) => (
        <Button className={classes.button}>{text}</Button>
      ))}
    </>
  )
}

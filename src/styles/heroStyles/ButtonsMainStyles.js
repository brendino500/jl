import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  buttonSection: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '1vh',
    bottom: 10,
    alignItems: 'center',
  },
  button: {
    width: 210,
  },
  socialIconGrid: {
    justifyContent: 'space between',
  },
}))

export default useStyles

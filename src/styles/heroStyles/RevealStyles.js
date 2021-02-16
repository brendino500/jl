import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  iconLayout: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Sora',
    color: '#ffffff',
    textTransform: 'uppercase',
    letterSpacing: 5,
    marginTop: '-3em',
    textAlign: 'center',
  },
  confetti: {
    marginLeft: '14em',
  },
  gameIcon: {
    color: '#EBE9EA',
    margin: '0 1.5em',
    fontSize: '2em',
  },
}))

export default useStyles

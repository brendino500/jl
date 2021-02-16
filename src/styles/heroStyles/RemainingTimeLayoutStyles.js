import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  timeTextLayout: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '1em',
  },
  timeNumbers: {
    fontFamiy: 'Sora',
    fontSize: '6em',
    color: '#ffffff',
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: '2em',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: '4em',
    },
  },
  timeText: {
    fontFamiy: 'Sora',
    textTransform: 'uppercase',
    letterSpacing: '0.5vw',
    color: '#ffffff',
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: '0.7em',
    },
  },
  test: {
    color: '#ffffff',
  },
}))
export default useStyles

import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '6vh',
  },
  timerFormat: {
    display: 'flex',
  },
  timerLayoutMain: {
    display: 'flex',
  },
  divider: {
    width: 'auto',
  },
  colon: {
    fontSize: '5em',
    marginTop: 50,
    fontFamily: 'Sora',
    color: '#ffffff',
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: '3em',
      marginTop: '2vh',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: '3em',
      marginTop: 30,
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      fontSize: '4em',
      marginTop: 50,
    },
  },
}))
export default useStyles

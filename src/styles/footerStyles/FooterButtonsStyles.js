import { makeStyles } from '@material-ui/core'

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
      fontSize: 7,
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

export default useStyles

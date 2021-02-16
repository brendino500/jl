import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    height: 400,
    backgroundColor: '#ffffff',
    margin: '-0.5em',
    [theme.breakpoints.between('xs', 'sm')]: {
      height: 390,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      height: 300,
    },
    [theme.breakpoints.between('md', 'lg')]: {
      height: 340,
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      height: 380,
    },
  },
}))

export default useStyles

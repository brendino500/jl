import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallPrintContainer: {
    padding: 4,
    textAlign: 'justify',
    maxWidth: '90vw',
  },
  font: {
    fontFamily: 'Noto Sans KR',
    color: '#949494',
    fontSize: '0.7em',
    lineHeight: '2em',
    textAlign: 'center',
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: '0.5em',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: '0.5em',
    },
  },
}))

export default useStyles

import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(({ palette, spacing }) => ({
  root: {
    width: '100%',
    maxWidth: 600,
    marginTop: 20,
    '& .MuiFormControl-root': {
      width: '100%',
      marginBottom: 5,
      '& .MuiFormLabel-asterisk': {
        color: palette.error.main,
      },
    },
  },
  backButton: {
    marginRight: spacing(1),
  },
  instructions: {
    marginTop: spacing(1),
    marginBottom: spacing(1),
  },
  formnContainer: {
    padding: '0 24px',
  },
  formActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '20px 0',
  },
  signupDone: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 360,
    height: 200,
    margin: '0 auto',
    color: 'green',
  },
}))

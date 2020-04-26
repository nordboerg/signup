import React, { useEffect } from 'react'
import { Stepper, Step, StepLabel, Typography, Button, Paper } from '@material-ui/core'
import { DoneOutline } from '@material-ui/icons'
import { DynamicForm } from 'components/DynamicForm/DynamicForm'
import { Template, FormValues, SignupPageValues } from 'interfaces/DynamicForm.interface'
import { useStyles } from './Signup.styles'
import { userTemplate } from 'components/DynamicForm/templates/user'
import { privacyTemplate } from 'components/DynamicForm/templates/privacy'

// to add a new form to the flow create a new template and add it here
const SIGNUP_PAGES: Template[] = [userTemplate, privacyTemplate]

export const Signup: React.FC = () => {
  const classes = useStyles()
  const [activeStep, setActiveStep] = React.useState(0)
  const [formValues, setFormValues] = React.useState<FormValues | null>(null)
  const [template, setTemplate] = React.useState<Template | null>(null)

  useEffect(() => {
    setTemplate(SIGNUP_PAGES[activeStep])

    if (isLastPage) {
      console.log('Submitted values', formValues)
    }
    // eslint-disable-next-line
  }, [activeStep])

  // get the step titles from the templates
  const steps = [...SIGNUP_PAGES.map(({ meta: { title } }) => title), 'Done']

  const isLastPage = activeStep === steps.length - 1

  const handleNext = (pageValues: SignupPageValues) => {
    const { key } = SIGNUP_PAGES[activeStep].meta
    // save the values of the current page before proceeding to the next page
    setFormValues((formValues) => ({
      ...(formValues ?? {}),
      [key]: pageValues,
    }))

    if (!isLastPage) {
      setActiveStep((activeStep) => activeStep + 1)
    }
  }

  return (
    <div className={classes.root}>
      <Paper>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div className={classes.formnContainer}>
          {isLastPage ? (
            <div className={classes.signupDone}>
              <DoneOutline fontSize="large" />
              <Typography className={classes.instructions} align="center">
                Please verify your email address, you should have received an email from us already!
              </Typography>
            </div>
          ) : (
            <>
              {template && (
                <DynamicForm template={template}>
                  {(isValid, values) => (
                    <div className={classes.formActions}>
                      {!isLastPage && (
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => handleNext(values)}
                          disabled={!isValid}
                        >
                          Submit
                        </Button>
                      )}
                    </div>
                  )}
                </DynamicForm>
              )}
            </>
          )}
        </div>
      </Paper>
    </div>
  )
}

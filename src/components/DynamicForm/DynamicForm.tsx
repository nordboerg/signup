import React from 'react'
import { Formik, FormikProps, Form } from 'formik'
import { Template, SignupPageValues } from 'interfaces/DynamicForm.interface'
import { FormGenerator } from './FormGrenerator'

interface Props {
  template: Template
  children(isValid: boolean, values: SignupPageValues): JSX.Element
}

export const DynamicForm: React.FC<Props> = ({ template, children }) => (
  <Formik
    validateOnMount
    enableReinitialize
    initialValues={template.initialValues}
    validationSchema={template.validationSchema}
    onSubmit={() => undefined}
  >
    {({ isValid, values }: FormikProps<SignupPageValues>) => (
      <Form>
        <FormGenerator template={template} />

        {children(isValid, values)}
      </Form>
    )}
  </Formik>
)

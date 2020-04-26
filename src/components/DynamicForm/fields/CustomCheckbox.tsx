import React from 'react'
import { FieldProps, ErrorMessage } from 'formik'
import { Checkbox, FormControl, FormGroup, FormControlLabel, Typography } from '@material-ui/core'
import { FieldConfig, CustomFieldProps } from 'interfaces/DynamicForm.interface'

export const CustomCheckbox = ({
  field: { name, ...rest },
  props: { title },
}: FieldConfig & FieldProps<CustomFieldProps>) => (
  <FormControl component="fieldset">
    <FormGroup row>
      <FormControlLabel control={<Checkbox id={name} {...rest} color="primary" />} label={title} />
    </FormGroup>
    <Typography variant="caption" color="error">
      <ErrorMessage name={name} />
    </Typography>
  </FormControl>
)

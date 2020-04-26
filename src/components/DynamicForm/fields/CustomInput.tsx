import React from 'react'
import { FieldProps, ErrorMessage } from 'formik'
import { TextField, FormControl, Typography } from '@material-ui/core'
import { FieldConfig, CustomFieldProps } from 'interfaces/DynamicForm.interface'

export const CustomInput = ({
  field: { name, onChange, ...rest },
  form: { setFieldTouched },
  props: { title, inputType, required },
}: FieldConfig & FieldProps<CustomFieldProps>) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFieldTouched(name, true)
    onChange(event)
  }

  return (
    <FormControl component="fieldset">
      <TextField
        id={name}
        type={inputType || 'text'}
        label={title}
        required={required}
        onChange={handleChange}
        {...rest}
      />
      <Typography variant="caption" color="error">
        <ErrorMessage name={name} />
      </Typography>
    </FormControl>
  )
}

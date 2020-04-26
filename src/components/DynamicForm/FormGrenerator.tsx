import React from 'react'
import { FieldProps, Field, FormikValues } from 'formik'
import { FieldConfig, Template } from 'interfaces/DynamicForm.interface'
import { FieldType } from 'enums/DynamicForm.enum'
import { CustomInput } from './fields/CustomInput'
import { CustomCheckbox } from './fields/CustomCheckbox'

interface Props {
  template: Template
}

export const FormGenerator: React.FC<Props> = ({ template }) => {
  // merge the filed config with the input component and wrap it in a Formik field
  const getField = (config: FieldConfig, CustomElement: React.ElementType) => (
    <Field key={config.key} name={config.key} type={config.component}>
      {(formik: FieldProps<FormikValues>) => <CustomElement {...formik} {...config} />}
    </Field>
  )

  const renderField = (config: FieldConfig) => {
    switch (config.component) {
      case FieldType.INPUT:
        return getField(config, CustomInput)
      case FieldType.CHECKBOX:
        return getField(config, CustomCheckbox)
      default:
        return
    }
  }

  return <>{template.meta.fields.map(renderField)}</>
}

import { FieldType } from "enums/DynamicForm.enum";

export interface Template {
  meta: FieldMetaData
  initialValues: SignupPageValues
  validationSchema: any
}

export interface FieldMetaData {
  key: string
  title: string
  fields: FieldConfig[]
}

export interface FieldConfig {
  key: string
  component: FieldType
  props: CustomFieldProps
}

export interface CustomFieldProps {
  title?: string
  inputType?: string
  required?: boolean
}

export interface UserFormValues {
  name: string
  role: string
  email: string
  password: string
}

export interface PrivacyFormValues {
  receiveUpdates: boolean
  receiveCommunication: boolean
}

export interface FormValues {
  user?: UserFormValues
  privacy?: PrivacyFormValues
  [key: string]: any
}

export type SignupPageValues = UserFormValues | PrivacyFormValues

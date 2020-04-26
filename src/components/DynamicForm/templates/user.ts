import { object, string } from 'yup'
import { FieldMetaData, UserFormValues } from 'interfaces/DynamicForm.interface'
import { FieldType } from 'enums/DynamicForm.enum'

const meta: FieldMetaData = {
  key: 'user',
  title: 'User',
  fields: [
    {
      key: 'name',
      component: FieldType.INPUT,
      props: {
        title: 'Name',
        required: true,
      },
    },
    {
      key: 'role',
      component: FieldType.INPUT,
      props: {
        title: 'Role',
      },
    },
    {
      key: 'email',
      component: FieldType.INPUT,
      props: {
        title: 'Email',
        required: true,
      },
    },
    {
      key: 'password',
      component: FieldType.INPUT,
      props: {
        title: 'Password',
        inputType: 'password',
        required: true,
      },
    },
  ],
}

const initialValues: UserFormValues = {
  name: '',
  role: '',
  email: '',
  password: '',
}

const validationSchema = object().shape({
  name: string().required('Name is required'),
  email: string()
    .required('Email is required')
    .email('Please enter a valid email address'),
  password: string()
    .required('Password is required')
    .min(10, 'The password is too short')
    .matches(
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
      'The password must contain at least one number, one uppercase and one lowercase character'
    ),
})

export const userTemplate = {
  meta,
  initialValues,
  validationSchema,
}

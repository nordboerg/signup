import { object } from 'yup'
import { FieldMetaData, PrivacyFormValues } from 'interfaces/DynamicForm.interface'
import { FieldType } from 'enums/DynamicForm.enum'

const meta: FieldMetaData = {
  key: 'privacy',
  title: 'Privacy',
  fields: [
    {
      key: 'receiveUpdates',
      component: FieldType.CHECKBOX,
      props: {
        title: 'Receive updates about Tray.io product by email',
      },
    },
    {
      key: 'receiveCommunication',
      component: FieldType.CHECKBOX,
      props: {
        title: 'Receive communication by email for other products created by the Tray.io team',
      },
    },
  ],
}

const initialValues: PrivacyFormValues = {
  receiveUpdates: false,
  receiveCommunication: false,
}

const validationSchema = object().shape({})

export const privacyTemplate = {
  meta,
  initialValues,
  validationSchema,
}

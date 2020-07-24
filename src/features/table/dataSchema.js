import { string, object, number } from 'yup'

export const dataSchema = object().shape({
    id: number().required(),
    firstName: string().required(),
    lastName: string().required(),
    email: string().email().required(),
    phone: string()
        // TODO: регулярное выражение проверяющее номер
        // .matches(//)
        .required(),
    address: object({
        streetAddress: string(),
        city: string(),
        state: string(),
        zip: number(),
    }),
    description: string(),
})

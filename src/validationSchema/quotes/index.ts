import * as yup from 'yup';

export const quoteValidationSchema = yup.object().shape({
  text: yup.string().required(),
  category_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});

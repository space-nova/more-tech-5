import * as yup from 'yup';

export const getCodeValidationSchema = yup.object().shape({
  phone: yup.string().required('requiredPhone'),
});

export const loginValidationSchema = yup.object().shape({
  code1: yup.string().length(1, 'codeLength').required('requiredCode'),
  code2: yup.string().length(1, 'codeLength').required('requiredCode'),
  code3: yup.string().length(1, 'codeLength').required('requiredCode'),
  code4: yup.string().length(1, 'codeLength').required('requiredCode'),
});

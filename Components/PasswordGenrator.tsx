import * as Yup from 'yup'; // import { object, string, number, date, InferType } from 'yup';
import { useState } from 'react';

const passwordSchema = Yup.object().shape({
  // inside 'object' we have 'shape' of our schema
  passwordLength: Yup.number() // much similar to mongoose
    .min(6, 'Password length should be minimum of 6 digit')
    .max(16, 'Maximum password length should not exceeds 16 digits')
    .required('Password can not be empty value'),
});

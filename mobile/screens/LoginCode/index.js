import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import * as React from 'react';

import styles from '../../assets/styles';

import { loginValidationSchema } from '../../utils/validators/login';

import { loginInAccountAction, getCodeAction, changeUserStateField } from '../../store/actions/user';

export default connect(
  (s) => ({
    user: s.user.state,
  }),
  {
    loginInAccountAction,
    getCodeAction,
    changeUserStateField,
  }
)(({ }) => {
  const submitLogin = (values) => {
    console.log(values);
  }

  return (
    <Formik
      validationSchema={loginValidationSchema}
      initialValues={{
        code1: '',
        code2: '',
        code3: '',
        code4: '',
      }}
      onSubmit={submitLogin}
    >
      {({ setFieldValue, handleSubmit, errors, values }) => (
        <View>
          <Text>sdasd</Text>
        </View>
      )}
    </Formik>
  );
});

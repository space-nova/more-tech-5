import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useToast } from 'react-native-toast-notifications';
import { connect } from 'react-redux';
import React from 'react';

import LoginCodeContainer from '../../screens/LoginCode';

import { clearUserError } from '../../store/actions/user';

const Stack = createStackNavigator();

export default connect(
  (s) => ({
    userError: s.user.error,
  }),
  {
    clearUserError,
  }
)(
  ({
    userError,

    clearUserError,
  }) => {
    const toast = useToast();

    React.useEffect(() => {
      if (userError) {
        toast.show(userError, {
          type: 'danger',
          placement: 'bottom',
          duration: 2000,
          animationType: 'slide-in',
        });
        clearUserError();
      }
    }, [userError]);

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'LoginCode'}>
          <Stack.Screen name={'LoginCode'} component={LoginCodeContainer} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
);

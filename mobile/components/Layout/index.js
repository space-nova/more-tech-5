import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useToast } from 'react-native-toast-notifications';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { connect } from 'react-redux';
import React from 'react';

import homeBlue from '../../assets/images/home/home.png';
import homeGrey from '../../assets/images/home/homeDefault.png';
import searchBlue from '../../assets/images/search/search.png';
import searchGrey from '../../assets/images/search/searchDefault.png';
import filtersBlue from '../../assets/images/filters/filters.png';
import filtersGrey from '../../assets/images/filters/filtersDefault.png';

import Home from '../../screens/Home/Home';
import Search from '../../screens/Search/Search';

import { clearUserError } from '../../store/actions/user';
import Focused from '../Focused/Focused';
import Filters from '../../screens/Filters/Filters';
import Branches from '../../screens/Branches/Branches';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

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
        <Tab.Navigator>
          <Tab.Screen
            title=""
            name="home"
            component={Home}
            options={{
              initialRouteName: false,
              headerShown: false,
              tabBarIcon: ({ focused }) => {
                return (
                  <Focused
                    focused={focused}
                    blueImage={homeBlue}
                    greyImage={homeGrey}
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="search"
            component={Search}
            options={{
              initialRouteName: false,
              headerShown: false,
              tabBarIcon: ({ focused }) => {
                return (
                  <Focused
                    focused={focused}
                    blueImage={searchBlue}
                    greyImage={searchGrey}
                  />
                );
              },
            }}
          />

          <Tab.Screen
            name="filters"
            component={Filters}
            options={{
              initialRouteName: false,
              headerShown: false,
              tabBarIcon: ({ focused }) => {
                return (
                  <Focused
                    focused={focused}
                    blueImage={filtersBlue}
                    greyImage={filtersGrey}
                  />
                );
              },
            }}
          />

          <Stack.Screen
            name="branches"
            component={Branches}
            options={{
              initialRouteName: false,
              headerShown: false,
              tabBarIcon: ({ focused }) => {
                return (
                  <Focused
                    focused={focused}
                    blueImage={filtersBlue}
                    greyImage={filtersGrey}
                  />
                );
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
);

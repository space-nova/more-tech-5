import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useToast } from 'react-native-toast-notifications';
import { connect } from 'react-redux';
import React from 'react';

import filtersGrey from '../../assets/images/filters/filtersDefault.png';
import searchGrey from '../../assets/images/search/searchDefault.png';
import filtersBlue from '../../assets/images/filters/filters.png';
import homeGrey from '../../assets/images/home/homeDefault.png';
import searchBlue from '../../assets/images/search/search.png';
import homeBlue from '../../assets/images/home/home.png';

import OfficeCard from '../../screens/OfficeCard';
import Filters from '../../screens/Filters';
import Search from '../../screens/Search';
import Home from '../../screens/Home';

import NavbarIcons from '../NavbarIcons';

import { cleaAppointmentError } from '../../store/actions/appointments';
import { clearServicesError } from '../../store/actions/services';
import { clearOfficesError } from '../../store/actions/offices';

const Tab = createBottomTabNavigator();

export default connect(
  (s) => ({
    appointmentsError: s.appointments.error,
    officesError: s.offices.error,
    servicesError: s.services.error,
  }),
  {
    cleaAppointmentError,
    clearServicesError,
    clearOfficesError,
  }
)(
  ({
    appointmentsError,
    servicesError,
    officesError,

    cleaAppointmentError,
    clearServicesError,
    clearOfficesError,
  }) => {
    const toast = useToast();

    React.useEffect(() => {
      if (appointmentsError) {
        toast.show(appointmentsError, {
          type: 'danger',
          placement: 'bottom',
          duration: 2000,
          animationType: 'slide-in',
        });

        cleaAppointmentError();
      }
    }, [appointmentsError]);

    React.useEffect(() => {
      if (servicesError) {
        toast.show(servicesError, {
          type: 'danger',
          placement: 'bottom',
          duration: 2000,
          animationType: 'slide-in',
        });

        clearServicesError();
      }
    }, [servicesError]);

    React.useEffect(() => {
      if (officesError) {
        toast.show(officesError, {
          type: 'danger',
          placement: 'bottom',
          duration: 2000,
          animationType: 'slide-in',
        });

        clearOfficesError();
      }
    }, [officesError]);

    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="home"
            component={Home}
            options={{
              initialRouteName: false,
              headerShown: false,
              tabBarIcon: ({ focused }) => <NavbarIcons source={focused ? homeBlue : homeGrey} />
            }}
          />
          <Tab.Screen
            name="search"
            component={Search}
            options={{
              initialRouteName: false,
              headerShown: false,
              tabBarIcon: ({ focused }) => <NavbarIcons source={focused ? searchBlue : searchGrey} />
            }}
          />

          <Tab.Screen
            name="filters"
            component={Filters}
            options={{
              initialRouteName: false,
              headerShown: false,
              tabBarIcon: ({ focused }) => <NavbarIcons source={focused ? filtersBlue : filtersGrey} />
            }}
          />

          <Tab.Screen
            name="officeCard"
            component={OfficeCard}
            options={{
              initialRouteName: false,
              headerShown: false,
              headerShown: false,
              tabBarItemStyle: { display: "none" },
              tabBarStyle: { display: "none" },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
);

import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import Geolocation from "react-native-geolocation-service";
import DropDownPicker from 'react-native-dropdown-picker';
import { connect } from 'react-redux';
import React from 'react';

import { getOfficesBySearchAction } from '../../store/actions/offices'
import { getServicesAction } from '../../store/actions/services'

export default connect(
  (s) => ({
    services: s.services.state,
    offices: s.offices.searched,
  }),
  {
    getOfficesBySearchAction,
    getServicesAction
  }
)(({
  navigation,
  services,
  offices,

  getOfficesBySearchAction,
  getServicesAction
}) => {
  const [OpenServiceDropdown, SetOpenServiceDropdown] = React.useState(false);
  const [PickedService, SetPickedService] = React.useState(null);
  const [UserGeolocation, SetUserGeolocation] = React.useState();

  const searchOffices = () =>
    getOfficesBySearchAction({ service: PickedService, latitude: UserGeolocation.latitude, longitude: UserGeolocation.longitude })

  React.useEffect(() => {
    getServicesAction();

    const watchId = Geolocation.watchPosition((position) => {
      SetUserGeolocation(position.coords);
    }, () => { }, { interval: 3000, enableHighAccuracy: true, });

    return () => Geolocation.clearWatch(watchId)
  }, [])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ paddingHorizontal: 10, zIndex: 2 }}>
        <Text style={{
          fontSize: 24,
          fontWeight: 'bold'
        }}>Поиск:</Text>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
          <DropDownPicker
            items={services.filter(v => !v.special).map(v => ({ label: v.name, value: v._id }))}
            open={OpenServiceDropdown}
            value={PickedService}
            setOpen={SetOpenServiceDropdown}
            setValue={SetPickedService}
            placeholder={'Выберете услугу'}
            containerStyle={{ width: '68%' }}
            textStyle={{ color: '#006CFF' }}
            dropDownContainerStyle={{ borderColor: '#006CFF' }}
            style={{ borderColor: '#006CFF', backgroundColor: 'transparent' }}
          />
          <TouchableOpacity
            style={{
              width: '28%',
              backgroundColor: '#ffffff00',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 10,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#006CFF',
            }}
            onPress={searchOffices}
          >
            <Text style={{ fontSize: 20, color: '#006CFF' }}>Искать</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        style={{
          flex: 1,
        }}
        contentContainerStyle={{
          alignItems: 'center',
          padding: 10
        }}
      >
        {
          offices.length > 0 ?
            offices.map((v, i) => (
              <TouchableOpacity
                key={i}
                onPress={() => navigation.navigate('officeCard', { officeId: v._id })}
                style={{
                  display: 'flex',
                  flexDirection: 'row'
                }}
              >
                <View style={{
                  width: 100,
                  height: 100,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#000111',
                  borderRadius: 10,
                  marginRight: 10
                }}>
                  <Text style={{ color: '#fff' }}>IMAGE</Text>
                </View>
                <View style={{
                  flex: 1
                }}>
                  <Text style={{
                    fontSize: 16
                  }}>
                    <Text style={{ fontWeight: 'bold' }}>Отделение на:</Text> {v.address}
                  </Text>
                  {
                    v.metroStation && <Text>
                      <Text style={{ fontWeight: 'bold' }}>Метро:</Text> {v.metroStation}
                    </Text>
                  }
                </View>
              </TouchableOpacity>)) :
            <Text style={{ fontSize: 18 }}>Список пуст</Text>
        }
      </ScrollView>
    </SafeAreaView>
  )
});


const styles = StyleSheet.create({

})
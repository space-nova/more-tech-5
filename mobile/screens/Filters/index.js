import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import React from 'react';

import { changeOfficesFilter, changeOfficesField } from '../../store/actions/offices'

export default connect((s) => ({
  officesFilter: s.offices.filter,
  transport: s.offices.transport,
}), {
  changeOfficesFilter,
  changeOfficesField
})(({
  officesFilter,
  transport,

  changeOfficesFilter,
  changeOfficesField
}) => {
  const [travel, setTravel] = React.useState([
    {
      id: 1,
      title: 'Общественный транспорт',
      select: false
    },
    {
      id: 2,
      title: 'Автомобиль',
      select: false
    },
    {
      id: 3,
      title: 'Пешком',
      select: false
    },
  ]);

  function toogleTravel(id) {
    setTravel(travel.map((k, v) => {
      if (k.id === id) {
        k.select = !k.select
      }
      return k;
    }))
  }

  return (
    <View>
      <Text style={styles.welcomeText}>
        Фильтры
      </Text>
      <View style={styles.oneBlock}>
        <Text style={styles.textLocation}>Расположение:</Text>
        <View style={styles.locationBlock}>
          <TouchableOpacity
            style={[styles.btnAddToParam, officesFilter.near ? { backgroundColor: '#006CFF' } : { backgroundColor: '#ffffff00' }]}
            onPress={() => changeOfficesFilter({ name: 'near', value: !officesFilter.near })}
          >
            <Text style={[styles.textBtnParam, officesFilter.near ? { color: 'white' } : { color: '#006CFF' }]}>
              Менее 5-ти км
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btnAddToParam, officesFilter.nearSubway ? { backgroundColor: '#006CFF' } : { backgroundColor: '#ffffff00' }]}
            onPress={() => changeOfficesFilter({ name: 'nearSubway', value: !officesFilter.nearSubway })}
          >
            <Text style={[styles.textBtnParam, officesFilter.nearSubway ? { color: 'white' } : { color: '#006CFF' }]}>
              Рядом с метро
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btnAddToParam, officesFilter.nearCafe ? { backgroundColor: '#006CFF' } : { backgroundColor: '#ffffff00' }]}
            onPress={() => changeOfficesFilter({ name: 'nearCafe', value: !officesFilter.nearCafe })}
          >
            <Text style={[styles.textBtnParam, officesFilter.nearCafe ? { color: 'white' } : { color: '#006CFF' }]}>
              Рядом кафе
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.oneBlock}>
        <Text style={styles.textLocation}>Как добраться:</Text>
        <View style={styles.locationBlock}>
          <TouchableOpacity
            style={[styles.btnAddToParam, transport === 'masstransit' ? { backgroundColor: '#006CFF' } : { backgroundColor: '#ffffff00' }]}
            onPress={() => changeOfficesField({ name: 'transport', value: 'masstransit' })}
          >
            <Text style={[styles.textBtnParam, transport === 'masstransit' ? { color: 'white' } : { color: '#006CFF' }]}>
              Общественный транспорт
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btnAddToParam, transport === 'driving' ? { backgroundColor: '#006CFF' } : { backgroundColor: '#ffffff00' }]}
            onPress={() => changeOfficesField({ name: 'transport', value: 'driving' })}
          >
            <Text style={[styles.textBtnParam, transport === 'driving' ? { color: 'white' } : { color: '#006CFF' }]}>
              Автомобиль
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btnAddToParam, transport === 'pedestrian' ? { backgroundColor: '#006CFF' } : { backgroundColor: '#ffffff00' }]}
            onPress={() => changeOfficesField({ name: 'transport', value: 'pedestrian' })}
          >
            <Text style={[styles.textBtnParam, transport === 'pedestrian' ? { color: 'white' } : { color: '#006CFF' }]}>
              Пешком
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
});


const styles = StyleSheet.create({
  welcomeText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 60,
    marginLeft: 20
  },

  oneBlock: {
  },

  textLocation: {
    marginLeft: '5%',
    fontSize: 17,
    marginTop: 20
  },

  locationBlock: {
    width: '90%',
    marginLeft: '5%',
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    gap: 10,
    alignItems: 'center',
    flexWrap: 'wrap',
  },

  btnAddToParam: {
    backgroundColor: '#ffffff00',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    padding: 10,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#006CFF',
  },

  textService: {
    marginLeft: '5%',
    fontSize: 17,
    marginTop: 70
  }
})
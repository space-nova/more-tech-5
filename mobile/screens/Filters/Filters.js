import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import React from 'react';

import SelectDropdown from 'react-native-select-dropdown'

export default () => {
  const [location, setLocation] = React.useState([
    {
      id: 1,
      title: 'Менее 5-ти км',
      select: false
    },
    {
      id: 2,
      title: 'Рядом с метро',
      select: false
    },
    {
      id: 3,
      title: 'Рядом кафе',
      select: false
    }
  ]);

  const [travel, setTravel] = React.useState([
    {
      id: 1,
      title: 'Автомобиль',
      select: false
    },
    {
      id: 2,
      title: 'Автобус',
      select: false
    },
    {
      id: 3,
      title: 'Самокат',
      select: false
    },
    {
      id: 4,
      title: 'Пешком',
      select: false
    },
  ]);

  function toogleLocation(id) {
    setLocation(location.map((k, v) => {
      if (k.id === id) {
        k.select = !k.select
      }
      return k;
    }))
  }

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
          {location.map(l =>
            <TouchableOpacity
              key={l.id}
              style={[styles.btnAddToParam, l.select ? { backgroundColor: '#006CFF' } : { backgroundColor: '#ffffff00' }]}
              onPress={() => toogleLocation(l.id)}
            >
              <Text style={[styles.textBtnParam, l.select ? { color: 'white' } : { color: '#006CFF' }]}>
                {l.title}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      <View style={styles.oneBlock}>
        <Text style={styles.textLocation}>Как добраться:</Text>
        <View style={styles.locationBlock}>

          {travel.map(l =>
            <TouchableOpacity
              key={l.id}
              style={[styles.btnAddToParam, l.select ? { backgroundColor: '#006CFF' } : { backgroundColor: '#ffffff00' }]}
              onPress={() => toogleTravel(l.id)}
            >
              <Text style={[styles.textBtnParam, l.select ? { color: 'white' } : { color: '#006CFF' }]}>
                {l.title}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* <View style={styles.oneBlock}>
        <Text style={styles.textService}>Услуги:</Text>
        <View style={styles.locationBlock}>

          {travel.map(l =>
            <TouchableOpacity
              key={l.id}
              style={[styles.btnAddToParam, l.select ? { backgroundColor: '#006CFF' } : { backgroundColor: '#ffffff00' }]}
              onPress={() => toogleTravel(l.id)}
            >
              <Text style={[styles.textBtnParam, l.select ? { color: 'white' } : { color: '#006CFF' }]}>
                {l.title}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View> */}
    </View>
  )
}


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
    height: 40,
    marginTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },

  btnAddToParam: {
    backgroundColor: '#ffffff00',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: '32%',
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#006CFF',
    marginTop: 10,
  },

  textService: {
    marginLeft: '5%',
    fontSize: 17,
    marginTop: 70
  }
})
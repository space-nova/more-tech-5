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
      title: 'Пешком',
      select: false
    },
    {
      id: 3,
      title: 'Автобус',
      select: false
    },
    {
      id: 4,
      title: 'Самокат',
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
    <View style={styles.general}>
      <Text style={styles.welcomeText}>
        Фильтры
      </Text>
      <Text style={styles.textLocation}>
        По расположению:
      </Text>
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


      <Text style={styles.textLocation}>
        Как добраться:
      </Text>

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
        <TouchableOpacity
          style={styles.applybBtn}
          onPress={() => alert('Фильтры применились')}
        >
          <Text style={styles.textApply}>
            Применить
          </Text>
        </TouchableOpacity>
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

  general: {
    flex: 1,
  },

  oneBlock: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  btnAddToParam: {
    backgroundColor: '#ffffff00',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: '90%',
    marginLeft: '5%',
    marginTop: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#006CFF'
  },

  textBtnParam: {
    color: '#006CFF',
    fontSize: 15,
    textAlign: 'center'
  },

  textLocation: {
    fontSize: 17,
    marginLeft: "5%",
    marginTop: 20
  },

  inpSelect: {
    borderWidth: 1,
    borderColor: 'red',
    height: 20,
    marginTop: 20
  },

  applybBtn: {
    backgroundColor: '#006CFF',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: '90%',
    marginLeft: '5%',
    marginTop: 180,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#006CFF',

  },

  textApply: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
    cursor: 'pointer'
  }
})
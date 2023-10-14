import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

import React from 'react';
import Branches from '../Branches/Branches';
import DropDownPicker from 'react-native-dropdown-picker';

export default () => {

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(null);
  const [items, setItems] = React.useState([
    { label: 'Снять наличные', value: 'Снять наличные' },
    { label: 'Внести деньги', value: 'Внести деньги' },
    { label: 'Открыть счет', value: 'Открыть счет' },
  ]);


  return (
    <View>
      <Text style={styles.searchText}>Поиск:</Text>
      <View style={{ flex: 1 }}>
        <View
          style={styles.viewGenService}>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder={'Выберете услугу'}

          />
        </View>

        <View style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Text>Chosen fruit: {value === null ? 'none' : value}</Text>
        </View>
      </View>
      
      <TouchableOpacity
        style={styles.applybBtn}
        onPress={() => alert('Ищем фитчи')}
      >
        <Text style={styles.textApply}>
          Искать
        </Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  inputCity: {
    borderWidth: 1,
    borderColor: '#006CFF',
    height: 35,
    marginTop: 20,
    width: '90%',
    marginLeft: '5%',
    paddingLeft: 10,
    fontSize: 15,
    color: '#006CFF',
    borderRadius: 5,
  },

  searchText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 60,
    marginLeft: 20
  },

  applybBtn: {
    backgroundColor: '#006CFF',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: '90%',
    marginLeft: '5%',
    marginTop: 460,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#006CFF',
    position: 'absolute',
    bottom: -730
  },

  textApply: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
    cursor: 'pointer'
  },

  viewGenService: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    marginTop: 50,
    borderColor: 'red'
  }
})
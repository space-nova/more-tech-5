import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

export default () => {
  return (
    <View>
      <Text style={styles.searchText}>Поиск:</Text>
      

      <TouchableOpacity
        style={styles.applybBtn}
        onPress={() => alert('Ищем фитчи')}
      >
        <Text style={styles.textApply}>
          Найти
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
  },

  textApply: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
    cursor: 'pointer'
  }
})
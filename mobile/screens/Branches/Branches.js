import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default () => {
  return (
    <View>
      <Text style={styles.departamentText}>Отделение</Text>
      <View style={styles.departmentView}>
        <Text style={styles.numberDepqrtamentText}>
          119049, г. Москва, Ленинский пр-т, д. 11
        </Text>
      </View>

      <View style={styles.viewFaceGen}>
        <View style={styles.viewIndividual}>
          <Text></Text>
        </View>
        <View style={styles.viewEntity}>
          <Text></Text>
        </View>
      </View>

      {/* <Text style={styles.searchText}>Поиск:</Text>
      <TouchableOpacity
        style={styles.applybBtn}
        onPress={() => alert('Ищем фитчи')}
      >
        <Text style={styles.textApply}>
          Найти
        </Text>
      </TouchableOpacity> */}
    </View>
  )
}

import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import oclock from '../../assets/images/oclock.png';
import disablePerson from '../../assets/images/disablePerson.png';
import metro from '../../assets/images/metro.png';
import phone from '../../assets/images/phone.png';
import React from 'react';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

export default () => {

  const [individual, setIndividual] = React.useState(false);
  const [entity, setEntity] = React.useState(false);

  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
    legend: ["Rainy Days"] // optional
  };

  return (
    <View>
      <Text style={styles.departamentText}>Отделение</Text>
      <View style={styles.departmentView}>
        <Text style={styles.numberDepqrtamentText}>
          119049, г. Москва, Ленинский пр-т, д. 11
        </Text>
      </View>

      <View style={styles.viewFaceGen}>
        <View 
          style={[styles.viewIndividual, individual ? {} : {}]}
          >
          <Text
            style={styles.textsFace} 
            onPress={() => setIndividual(prev => !prev)}>
              Физлица
          </Text>
        </View>
        <View style={styles.viewEntity}>
          <Text 
            style={styles.textsFace}
            
            >Юрлица</Text>
        </View>
      </View>

      <View style={styles.work}>
        <View>
          <Image
            style={styles.workLogo}
            source={oclock}
          />
        </View>
        <View style={styles.textsWork}>
          <Text style={styles.textMode}>Режим работы:</Text>
          <Text style={styles.textModeDefault}>Обслуживает физлиц до 19.00</Text>
        </View>
      </View>

      <View style={styles.work}>
        <View>
          <Image
            style={[styles.workLogo, { width: 23, height: 30 }]}
            source={disablePerson}
          />
        </View>
        <View style={styles.textsWork}>
          <Text style={styles.textMode}>Подходит моломобильным:</Text>
          <Text style={styles.textModeDefault}>В отделении присутсвует подъемник</Text>
        </View>
      </View>


      <View style={styles.work}>
        <View>
          <Image
            style={[styles.workLogo, { width: 23, height: 30, marginTop: 13 }]}
            source={metro}
          />
        </View>
        <View style={styles.textsWork}>
          <Text style={styles.textMode}>Комсомольская</Text>
        </View>
      </View>

      <View style={styles.work}>
        <View>
          <Image
            style={[styles.workLogo, { width: 23, height: 23, marginTop: -1 }]}
            source={phone}
          />
        </View>
        <View style={styles.textsWork}>
          <Text style={styles.textMode}>+79080336452</Text>
        </View>
      </View>

      <View style={styles.work}>
        <View>
          <Image
            style={[styles.workLogo, { width: 23, height: 23, marginTop: 7 }]}
            source={phone}
          />
        </View>
        <View style={styles.textsWork}>
          <Text style={styles.textMode}>ВТБ Привилегия</Text>
          <Text style={styles.textModeDefault}>Доступна в отделении</Text>
        </View>
      </View>

      <View style={styles.rechartReactNative}>
        {/* <LineChart
          data={data}
          width={100}
          height={220}
        /> */}
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


const styles = StyleSheet.create({
  departamentText: {
    marginTop: 60,
    marginLeft: "5%",
    fontSize: 20,
  },

  departmentView: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10
  },

  numberDepqrtamentText: {
    marginLeft: "5%"
  },

  viewFaceGen: {
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
    marginLeft: '5%',
    height: 30,
    backgroundColor: '#006CFF',
    marginTop: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 2,
    paddingRight: 2,
    borderRadius: 5,
  },

  viewIndividual: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: '49%',
    marginLeft: '1%',
    backgroundColor: '#519aff',
    borderRadius: 5,
    height: 22
  },

  viewEntity: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: '49%',
    marginRight: '1%',
    backgroundColor: '#519aff00',
    borderRadius: 5,
    height: 22,
  },

  textsFace: {
    color: 'white',
    fontSize: 15,
  },

  work: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 40,
    marginLeft: "5%"
  },

  workLogo: {
    marginTop: 5
  },

  textsWork: {
    marginLeft: 10,
  },

  textMode: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  textModeDefault: {
    color: 'grey'
  }


  // inputCity: {
  //   borderWidth: 1,
  //   borderColor: '#006CFF',
  //   height: 35,
  //   marginTop: 20,
  //   width: '90%',
  //   marginLeft: '5%',
  //   paddingLeft: 10,
  //   fontSize: 15,
  //   color: '#006CFF',
  //   borderRadius: 5,
  // },

  // searchText: {
  //   fontSize: 30,
  //   fontWeight: 'bold',
  //   marginTop: 60,
  //   marginLeft: 20
  // },

  // applybBtn: {
  //   backgroundColor: '#006CFF',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   height: 40,
  //   width: '90%',
  //   marginLeft: '5%',
  //   marginTop: 460,
  //   borderRadius: 8,
  //   borderWidth: 1,
  //   borderColor: '#006CFF',
  // },

  // textApply: {
  //   color: 'white',
  //   fontSize: 15,
  //   textAlign: 'center',
  //   cursor: 'pointer'
  // }
})
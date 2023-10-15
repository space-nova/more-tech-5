import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from 'react-redux';
import React from 'react';

import disablePersonImage from '../../assets/images/disablePerson.png';
import oclockImage from '../../assets/images/oclock.png';
import metroImage from '../../assets/images/metro.png';
import phoneImage from '../../assets/images/phone.png';

import { getOfficeAction } from '../../store/actions/offices'

export default connect(
  (s) => ({
    office: s.offices.current,
  }),
  {
    getOfficeAction
  }
)(({
  route: { params: { officeId } },
  navigation,
  office,

  getOfficeAction
}) => {
  const [ClientType, SetClientType] = React.useState('individuals');

  React.useEffect(() => {
    getOfficeAction({ id: officeId })
  }, [officeId])

  return office ? (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.header}>
          <Text style={styles.departamentText}>Отделение</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.backbutton}>Назад</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.departmentView}>
          <Text style={styles.numberDepqrtamentText}>
            {office.address}
          </Text>
        </View>

        <View style={styles.viewFaceGen}>
          <TouchableOpacity
            style={[styles.viewIndividual, ClientType === 'individuals' ? { backgroundColor: '#519aff' } : { backgroundColor: '#ffffff00' }]}
            onPress={() => SetClientType('individuals')}
          >
            <Text style={styles.textsFace}>
              Физлица
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.viewEntity, ClientType === 'legal' ? { backgroundColor: '#519aff' } : { backgroundColor: '#ffffff00' }]}
            onPress={() => SetClientType('legal')}
          >
            <Text style={styles.textsFace}>
              Юрлица
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <View style={styles.work}>
            <View>
              <Image
                style={styles.workLogo}
                source={oclockImage}
              />
            </View>
            <View style={styles.textsWork}>
              <Text style={styles.textMode}>Режим работы:</Text>
              {
                office.openHours[ClientType].length === 0 ?
                  <Text style={styles.textModeDefault}>Отделение не обслуживает {ClientType === 'individuals' ? 'физлиц' : 'юрлиц'}</Text> :
                  <Text style={styles.textModeDefault}>Обслуживает {ClientType === 'individuals' ? 'физлиц' : 'юрлиц'} до {office.openHours[ClientType][new Date().getDay()].hours.split('-')[1]}</Text>
              }
            </View>
          </View>

          {
            office.immobile &&
            <View style={styles.work}>
              <Image
                style={[styles.workLogo, { width: 23, height: 30 }]}
                source={disablePersonImage}
              />
              <View style={styles.textsWork}>
                <Text style={styles.textMode}>Подходит моломобильным:</Text>
                <Text style={styles.textModeDefault}>В отделении есть подъемник</Text>
              </View>
            </View>
          }

          {
            office.metroStation &&
            <View style={[styles.work]}>
              <Image
                style={[styles.workLogo, { width: 23, height: 30, marginTop: 13 }]}
                source={metroImage}
              />
              <View style={styles.textsWork}>
                <Text style={styles.textMode}>{office.metroStation}</Text>
              </View>
            </View>
          }

          <View style={styles.work}>
            <Image
              style={[styles.workLogo, { width: 23, height: 23, marginTop: -1 }]}
              source={phoneImage}
            />
            <View style={styles.textsWork}>
              <Text style={styles.textMode}>{office.phone}</Text>
            </View>
          </View>
          {
            office.privilege &&
            <View style={styles.work}>
              <Image
                style={[styles.workLogo, { width: 23, height: 23, marginTop: 7 }]}
                source={phoneImage}
              />
              <View style={styles.textsWork}>
                <Text style={styles.textMode}>ВТБ Привилегия</Text>
                <Text style={styles.textModeDefault}>Доступна в отделении</Text>
              </View>
            </View>
          }
        </View>

      </ScrollView>
    </SafeAreaView>
  ) : null
});

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20
  },
  departamentText: {
    fontSize: 20,
  },
  backbutton: {
    color: '#519aff'
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
    alignItems: 'center',
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

})
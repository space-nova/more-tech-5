import Geolocation from "react-native-geolocation-service";
import { YaMap, Marker } from 'react-native-yamap';
import { connect } from 'react-redux';
import React from 'react';

import { getOfficesOnMapAction } from '../../store/actions/offices'

YaMap.init('e01b5169-6f35-42e3-a1e5-46f092fec31f');

export default connect(
  (s) => ({
    officesFilter: s.offices.filter,
    offices: s.offices.state,
  }),
  {
    getOfficesOnMapAction
  }
)(({
  navigation,

  officesFilter,
  offices,

  getOfficesOnMapAction
}) => {
  const [UserGeolocation, SetUserGeolocation] = React.useState();
  const [MapRegion, SetMapRegion] = React.useState();
  const Map = React.useRef();

  const onCameraPositionChangeEnd = () =>
    Map.current.getVisibleRegion((region) => {
      SetMapRegion(region);
    })

  const onMapLoaded = () => onCameraPositionChangeEnd();

  React.useEffect(() => {
    if (MapRegion && UserGeolocation) getOfficesOnMapAction({
      ...officesFilter,
      topLeftLongitude: MapRegion.topLeft.lon,
      topLeftLatitude: MapRegion.topLeft.lat,
      topRightLongitude: MapRegion.topRight.lon,
      topRightLatitude: MapRegion.topRight.lat,
      bottomLeftLongitude: MapRegion.bottomLeft.lon,
      bottomLeftLatitude: MapRegion.bottomLeft.lat,
      bottomRightLongitude: MapRegion.bottomRight.lon,
      bottomRightLatitude: MapRegion.bottomRight.lat,
      userLongitude: UserGeolocation?.longitude,
      userLatitude: UserGeolocation?.latitude,
    })
  }, [MapRegion, officesFilter, UserGeolocation])

  React.useEffect(() => {
    const watchId = Geolocation.watchPosition((position) => {
      SetUserGeolocation(position.coords);
    }, () => { }, { interval: 3000, enableHighAccuracy: true, });

    return () => Geolocation.clearWatch(watchId)
  }, [])

  return (
    <YaMap
      ref={Map}
      showUserPosition={true}
      initialRegion={{
        lat: UserGeolocation?.latitude,
        lon: UserGeolocation?.longitude,
        zoom: 11,
      }}
      onMapLoaded={onMapLoaded}
      onCameraPositionChangeEnd={onCameraPositionChangeEnd}
      style={{ flex: 1 }}
    >
      {
        offices.map((v, i) => (
          <Marker key={i}
            point={{ lat: v.latitude, lon: v.longitude }}
            scale={2}
            onPress={() => navigation.navigate('officeCard', { officeId: v._id })}
          />
        ))
      }

    </YaMap>
  )
});

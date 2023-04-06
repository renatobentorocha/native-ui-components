import React, {useRef} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MapView from './MapView';

var region = {
  latitude: -22.4110513,
  longitude: -42.9908115,
  latitudeDelta: 1,
  longitudeDelta: 1,
};

export default () => {
  const mapRf = useRef<MapView>(null);

  const onRegionChange = event => {
    // Do stuff with event.region.latitude, etc.
    console.log(event);
  };

  return (
    <View style={StyleSheet.absoluteFill}>
      <MapView
        ref={mapRf}
        region={region}
        zoomEnabled={true}
        style={{flex: 1}}
        onRegionChange={onRegionChange}
      />
      <TouchableOpacity
        onPress={() => mapRf.current?.callNativeMethod()}
        style={{
          backgroundColor: '#ffffff',
          height: 55,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Call method from native view</Text>
      </TouchableOpacity>
    </View>
  );
};

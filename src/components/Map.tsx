import React from 'react';
import MapView, {Marker} from 'react-native-maps';

export const Map = () => {
  return (
    <>
      <MapView
        style={{flex: 1}}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker
          image={require('../assets/custom-marker.png')}
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          title="Titulo"
          description="Descripcion"
        />
      </MapView>
    </>
  );
};

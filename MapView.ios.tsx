import React from 'react';
import {
  UIManager,
  ViewStyle,
  findNodeHandle,
  requireNativeComponent,
} from 'react-native';

type MapViewRegion = {
  /**
   * Coordinates for the center of the map.
   */
  latitude: number;
  longitude: number;

  /**
   * Distance between the minimum and the maximum latitude/longitude
   * to be displayed.
   */
  latitudeDelta: number;
  longitudeDelta: number;
};

type MapViewProps = {
  /**
   * Callback that is called continuously when the user is dragging the map.
   */
  onRegionChange: (event) => void;

  /**
   * ViewStyle
   */
  style: ViewStyle;

  /**
   * A Boolean value that determines whether the user may use pinch
   * gestures to zoom in and out of the map.
   */
  zoomEnabled: boolean;
  /**
   * The region to be displayed by the map.
   *
   * The region is defined by the center coordinates and the span of
   * coordinates to display.
   */
  region: MapViewRegion;
};

type OnChangeRegion = {
  region: {
    latitude: number;
    latitudeDelta: number;
    longitude: number;
    longitudeDelta: number;
  };
  target: number;
};

var RNTMap = requireNativeComponent('RNTMap');

const NATIVE_COMPONENT_REF = 'NATIVE_COMPONENT_REF';

export default class MapView extends React.Component<MapViewProps> {
  callNativeMethod = () => {
    UIManager.dispatchViewManagerCommand(
      findNodeHandle(this),
      UIManager.getViewManagerConfig('RNTMap').Commands.sayHello,
      [],
    );
  };

  _onRegionChange = event => {
    if (!this.props.onRegionChange) {
      return;
    }

    this.props.onRegionChange(event.nativeEvent);
  };

  render() {
    return (
      <RNTMap
        ref={NATIVE_COMPONENT_REF}
        {...this.props}
        onRegionChange={this._onRegionChange}
      />
    );
  }
}

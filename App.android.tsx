import React, {useRef} from 'react';
import {
  Image,
  ImageRequireSource,
  PixelRatio,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ImageView from './ImageView.android';
Image;
export default () => {
  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        {
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#7d1d00',
        },
      ]}>
      <ImageView
        borderRadius={100}
        source={[
          {
            uri: 'https://www.emploitheque.org/images/tux/Tux-G2-emploitheque.png',
          },
        ]}
        resizeMode="contain"
        style={{
          width: PixelRatio.getPixelSizeForLayoutSize(12.5),
          height: PixelRatio.getPixelSizeForLayoutSize(12.5),
          backgroundColor: '#fff',
          borderRadius: 50,
        }}
      />
    </View>
  );
};

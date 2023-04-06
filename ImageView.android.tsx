import React from 'react';
import {
  ImageSourcePropType,
  ImageStyle,
  requireNativeComponent,
} from 'react-native';

type ResizeMode = 'cover' | 'contain' | 'stretch';

type ImageViewProps = {
  style: ImageStyle;
  source: Array<ImageSourcePropType>;
  borderRadius: number;
  resizeMode: ResizeMode;
};

var RCTImageView = requireNativeComponent('MyRCTImageView');

const NATIVE_COMPONENT_REF = 'NATIVE_COMPONENT_REF';

export default class ImageView extends React.Component<ImageViewProps> {
  render() {
    return <RCTImageView ref={NATIVE_COMPONENT_REF} {...this.props} />;
  }
}

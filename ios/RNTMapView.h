//
//  RNTMapView.h
//  NativeComponents
//
//  Created by Renato  Rocha on 04/04/23.
//

#ifndef RNTMapView_h
#define RNTMapView_h

#import <MapKit/MapKit.h>

#import <React/RCTComponent.h>

@interface RNTMapView: MKMapView

@property (nonatomic, copy) RCTBubblingEventBlock onRegionChange;

- (void) sayHello;

@end

#endif /* RNTMapView_h */

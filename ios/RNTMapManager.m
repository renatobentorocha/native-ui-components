//
//  RNTMapManager.m
//  NativeComponents
//
//  Created by Renato  Rocha on 04/04/23.
//

#import <Foundation/Foundation.h>
#import <MapKit/MapKit.h>
#import <React/RCTViewManager.h>
#import <React/RCTUIManager.h>

#import "RCTConvert+Mapkit.h"
#import "RNTMapView.h"

@interface RNTMapManager : RCTViewManager<MKMapViewDelegate>
@end

@implementation RNTMapManager

RCT_EXPORT_MODULE(RNTMap)

RCT_EXPORT_VIEW_PROPERTY(zoomEnabled, BOOL)
RCT_EXPORT_VIEW_PROPERTY(onRegionChange, RCTBubblingEventBlock)

RCT_CUSTOM_VIEW_PROPERTY(region, MKCoordinateRegion, MKMapView)
{
  [view setRegion:json ? [RCTConvert MKCoordinateRegion:json] : defaultView.region animated:YES];
}

RCT_EXPORT_METHOD(sayHello:(nonnull NSNumber*) reactTag) {  
    [self.bridge.uiManager addUIBlock:^(RCTUIManager *uiManager, NSDictionary<NSNumber *,UIView *> *viewRegistry) {
      RNTMapView *view = (RNTMapView *) viewRegistry[reactTag];
        if (!view || ![view isKindOfClass:[RNTMapView class]]) {
            RCTLogError(@"Cannot find NativeView with tag #%@", reactTag);
            return;
        }
        [view sayHello];
    }];

}

- (UIView *)view
{
  RNTMapView *map = [RNTMapView new];
  map.delegate = self;
  return map;
}

#pragma mark MKViewDelegate

- (void)mapView:(MKMapView *)mapView regionDidChangeAnimated:(BOOL)animated {
  RNTMapView *map = (RNTMapView *) mapView;
  
  if (!map.onRegionChange) {
    return;
  }
  
  MKCoordinateRegion region = map.region;
    map.onRegionChange(@{
      @"region": @{
        @"latitude": @(region.center.latitude),
        @"longitude": @(region.center.longitude),
        @"latitudeDelta": @(region.span.latitudeDelta),
        @"longitudeDelta": @(region.span.longitudeDelta),
      }
    });
}

@end

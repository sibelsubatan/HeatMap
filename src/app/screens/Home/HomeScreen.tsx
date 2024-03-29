import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {
  FC,
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';
import {View, BackHandler, Platform, PermissionsAndroid} from 'react-native';
import * as Mapbox from '@rnmapbox/maps';
import {GenericNavigationProps} from '@src/app/navigation/types';
import {useAppDispatch, useAppSelector} from '@src/app/hooks/useStoreDispatch';
import {getLocation, postLocation, setLoading} from '@src/app/store/home';
import * as styles from './HomeStyle';
import BackgroundService from 'react-native-background-actions';


Mapbox.setAccessToken(
  'sk.eyJ1Ijoic2liZWxzdWJhdGFuIiwiYSI6ImNsbGlobDlwdzE1YWQzZHFqdW1xZ21ycHMifQ.JLCciRLFOJVVWAbihKpJ3Q',
);

Mapbox.setWellKnownTileServer(Platform.OS === 'android' ? 'Mapbox' : 'mapbox');

const HomeScreen: FC = () => {
  const navigation = useNavigation<GenericNavigationProps>();
  const dispatch = useAppDispatch();
  const {myPlace} = useAppSelector(state => state.home);

  useEffect(() => {
    const backAction = () => {
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, [dispatch]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation, dispatch]);

  const [hasLocationPermissions, sethasLocationPermissions] =
    useState<boolean>(false);



  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        sethasLocationPermissions(true);
        console.log('You can use the location');
      } else {
        console.log('location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    requestLocationPermission();
  }, []);

  useFocusEffect(
    useCallback(() => {
      dispatch(setLoading(true));
      dispatch(getLocation());
    }, [dispatch]),
  );

  const UpdateUserLocation = async (newLocation, veryIntensiveTask) => {
    const interval = setInterval(() => {
        dispatch(postLocation(newLocation));
    }, 1000);

    return () => clearInterval(interval);
  };

  return (
    <View style={styles.container}>
      <Mapbox.MapView style={styles.map} rotateEnabled>
        <Mapbox.Camera
          followUserLocation={true}
          followUserMode={Mapbox.UserTrackingMode.Follow}
          animationMode={'flyTo'}
          followZoomLevel={17}
        />

        <Mapbox.UserLocation
          minDisplacement={3}
          animated={true}
          renderMode={Mapbox.UserLocationRenderMode.Normal}
          showsUserHeadingIndicator={true}
          requestsAlwaysUse={true}
          androidRenderMode={'gps'}
          onUpdate={newLocation => {
            UpdateUserLocation(newLocation, '');
          }}
        />

        {myPlace.features && (
          <Mapbox.ShapeSource shape={myPlace} id="Feature">
            <Mapbox.HeatmapLayer
              id={'Feature'}
              sourceID={'Feature'}
              style={{
                heatmapColor: [
                  'interpolate',
                  ['linear'],
                  ['heatmap-density'],
                  0,
                  'rgba(33,102,172,0)',
                  0.2,
                  'rgb(103,169,207)',
                  0.4,
                  'rgb(209,229,240)',
                  0.6,
                  'rgb(253,219,199)',
                  0.8,
                  'rgb(239,138,98)',
                  1,
                  'rgb(178,24,43)',
                ],
              }}
            />
          </Mapbox.ShapeSource>
        )}
      </Mapbox.MapView>
    </View>
  );
};

export default HomeScreen;

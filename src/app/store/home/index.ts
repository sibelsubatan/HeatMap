import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {navigationRef} from '@app/navigation/navigationUtils';
import database from '@react-native-firebase/database';

export interface HomeState {
  myPlace: any | [];
  loading: boolean;
}

const initialState: HomeState = {
  myPlace: [],
  loading: false,
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setMyPlace: (state, action: PayloadAction<any | []>) => {
      state.myPlace = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const toNavigate = (screen: string) => {
  navigationRef.navigate(screen as never);
};

export const postLocation = createAsyncThunk(
  'home/postLocation',
  async (d: any, {dispatch, getState}) => {
    const {
      user: {userInfo},
    } = getState() as any;
    try {
      var newItem = {
        latitude: d?.coords?.latitude,
        longitude: d?.coords?.longitude,
      };
      database().ref(`myPlaceList/${userInfo?.uid}`).push(newItem);
    } catch (error) {
      console.log(error);
    }
  },
);

export const getLocation = createAsyncThunk(
  'home/getLocation',
  async (_p, {dispatch, getState}) => {
    const {
      user: {userInfo},
    } = getState() as any;
    try {
      const placeList: any = {
        type: 'FeatureCollection',
        features: [],
      };
      console.log('userInfo', userInfo);

      const reference = database().ref('myPlaceList');
      const dataId = userInfo?.uid;

      reference
        .child(dataId)
        .once('value')
        .then(snapshot => {
          if (snapshot.exists()) {
            const myArray = Object.values(snapshot.val());
            myArray.map((item: any) => {
              placeList.features.push({
                type: 'Feature',
                properties: {},
                geometry: {
                  type: 'Point',
                  coordinates: [item.longitude, item.latitude],
                },
              });
            });
            dispatch(setMyPlace(placeList));
         
          } else {
            dispatch(setMyPlace(placeList));
            dispatch(setLoading(false));
            console.log('Veri bulunamadı.');
          }
        })
        .catch(error => {
          console.error('Hata oluştu: ', error);
        });
    } catch (error) {
      console.log(error);
    }
  },
);

// Action creators are generated for each case reducer function
export const {setMyPlace, setLoading} = homeSlice.actions;

export default homeSlice.reducer;

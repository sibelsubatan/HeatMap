import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistCombineReducers} from 'redux-persist';
import userSlice from './user';
import homeSlice from './home';

const reducers = {
  user: userSlice,
  home: homeSlice,
};

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  timeout: undefined,
  whitelist: ['user'],
  blacklist: ['home'],
};

export const persistedRootReducer = persistCombineReducers(
  persistConfig,
  reducers,
);

export type RootState = ReturnType<typeof persistedRootReducer>;

export default persistedRootReducer;

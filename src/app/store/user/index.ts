import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {navigationRef} from '@app/navigation/navigationUtils';
import {UserState} from '@app/models/users/users';
import auth from '@react-native-firebase/auth';
import RNProgressHud from 'progress-hud';
import database from '@react-native-firebase/database';

const initialState: UserState = {
  eMail: '',
  password: '',
  userInfo: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<any>) => {
      state.userInfo = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.eMail = action.payload.trim();
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload.trim();
    },
    login: (_state, action) => {
      console.log(action);
    },
    logout: state => {
      auth().signOut();
      state.userInfo = null;
      state.eMail = '';
      state.password = '';
      state.userInfo = toNavigate('Login');
    },
  },
});

export const toNavigate = (screen: string) => {
  navigationRef.navigate(screen as never);
};
export const signInAsync = createAsyncThunk(
  'user/signInAsync',
  async (_, {dispatch, getState}) => {
    const {
      user: {eMail, password},
    } = getState() as any;

    try {
      auth()
        .signInWithEmailAndPassword(eMail, password)
        .then(data => {
          dispatch(setUserInfo(data?.user));
          toNavigate('Tabs');
        })
        .catch(error => {
          RNProgressHud.showErrorWithStatus(
            'E mail ve şifreyi kontrol ediniz',
            RNProgressHud.ProgressHUDMaskType.Clear as any,
          );
          RNProgressHud.dismissWithDelay(1.5);

          console.error(error);
        });
    } catch (error) {
      console.log(error);
    }
  },
);

// Action creators are generated for each case reducer function
export const {login, logout, setEmail, setPassword, setUserInfo} =
  userSlice.actions;

export default userSlice.reducer;

import {
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';
import {createRef} from 'react';

export const navigationRef = createNavigationContainerRef();
export const isMountedRef = createRef();

interface NavigateProps {
  (name: string, params: Record<string, unknown>): void;
}

export const navigate: NavigateProps = (name, params) => {
  if (isMountedRef.current && navigationRef.current) {
    navigationRef.current.navigate(name as never, params as never);
  } else {
  }
};

export const navigatePop = (): void => {
  if (isMountedRef.current && navigationRef.current) {
    navigationRef.current?.dispatch(StackActions.pop());
  } else {
  }
};

export const popToTop = (): void => {
  if (isMountedRef.current && navigationRef.current) {
    navigationRef.current?.dispatch(StackActions.popToTop());
  } else {
  }
};

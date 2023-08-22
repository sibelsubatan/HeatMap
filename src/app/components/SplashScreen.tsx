import React, {FC, useEffect} from 'react';
import {View, Image} from 'react-native';
import BootSplash from 'react-native-bootsplash';
import * as styles from '@app/styles/IntroStyle';

const Splashscreen: FC = () => {
  useEffect(() => {
    BootSplash.hide();
  }, []);

  return (
    <View style={styles.splashContainer}>
      <Image
        source={require('@assets/images/ImageBack.png')}
        style={styles.splashLogo}
      />
    </View>
  );
};

export default Splashscreen;

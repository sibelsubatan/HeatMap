import {View, TextInput, Pressable} from 'react-native';
import React from 'react';
import * as styles from './styles';

interface Props {
  placeholder: string;
  value?: string;
  keyboardType?: any;
  icon?: React.ReactNode;
  style?: object;
  onChangeText: any;
  onSecureTextEntry?: any;
  secureTextEntry?: boolean;
  leftIcon?: React.ReactNode;
  leftIconVisible: boolean;
}
const VLoginInput = ({
  placeholder,
  value,
  keyboardType,
  icon,
  style,
  onChangeText,
  secureTextEntry,
  onSecureTextEntry,
  leftIcon,
  leftIconVisible,
}: Props): React.JSX.Element => {
  return (
    <View style={[styles.container, style]}>
      {icon ?? null}
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        placeholderTextColor={'#000'}
        autoCapitalize="none"
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        value={value}
      />
      {leftIconVisible && (
        <Pressable onPress={onSecureTextEntry}>{leftIcon ?? null}</Pressable>
      )}
    </View>
  );
};

export default VLoginInput;

import React from 'react';
import {useController, UseControllerProps} from 'react-hook-form';
import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';

interface InputProps extends UseControllerProps, TextInputProps {
  title: string;
}

const Input = ({title, control, name, rules, ...props}: InputProps) => {
  const {
    field: {value, onBlur, onChange},
    fieldState: {invalid, error},
  } = useController({control, name, rules});

  return (
    <View>
      <Text>{title}</Text>
      <TextInput
        {...props}
        autoCapitalize="none"
        value={value}
        onChangeText={txt => {
          onChange(txt);
          props.onChangeText && props.onChangeText(txt);
        }}
        onBlur={onBlur}
        style={styles.input}
      />
      {invalid ? <Text style={styles.error}>{error?.message}</Text> : null}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  error: {
    color: 'red',
    marginTop: 5,
  },
});

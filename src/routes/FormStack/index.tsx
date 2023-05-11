import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FormStackParams, ScreensName} from '../types';
import FirstScreen from '../../screen/FirstScreen';
import SecondScreen from '../../screen/SecondScreen';
import SuccessScreen from '../../screen/SuccessScreen';

const Stack = createNativeStackNavigator<FormStackParams>();

const FormStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ScreensName.FirstScreen} component={FirstScreen} />
      <Stack.Screen name={ScreensName.SecondScreen} component={SecondScreen} />
      <Stack.Screen
        name={ScreensName.SuccessScreen}
        component={SuccessScreen}
      />
    </Stack.Navigator>
  );
};

export default FormStack;

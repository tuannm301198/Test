import {NativeStackScreenProps} from '@react-navigation/native-stack';

export enum ScreensName {
  FirstScreen = 'FirstScreen',
  SecondScreen = 'SecondScreen',
  SuccessScreen = 'SuccessScreen',
}

export type FormStackParams = {
  [ScreensName.FirstScreen]: undefined;
  [ScreensName.SecondScreen]: undefined;
  [ScreensName.SuccessScreen]: undefined;
};

export type FormScreenProps<T extends keyof FormStackParams> =
  NativeStackScreenProps<FormStackParams, T>;

import React from 'react';
import {Button, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {FormScreenProps, ScreensName} from '../../routes/types';
import {RootState} from '../../store';
import {resetState} from '../../store/formSlice';

const SuccessScreen: React.FC<FormScreenProps<ScreensName.SecondScreen>> = ({
  navigation,
}) => {
  const userInfo = useSelector((state: RootState) => state.form);
  const dispatch = useDispatch();

  return (
    <View>
      <Text>User name: {userInfo.name}</Text>
      <Text>User email: {userInfo.email}</Text>
      <Button
        title="Back"
        onPress={() => {
          dispatch(resetState());
          navigation.popToTop();
        }}
      />
    </View>
  );
};

export default SuccessScreen;

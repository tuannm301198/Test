import React from 'react';
import {useForm, useFormState} from 'react-hook-form';
import {Button, View} from 'react-native';
import {useDispatch} from 'react-redux';
import Input from '../../components/Form/Input';
import {FormScreenProps, ScreensName} from '../../routes/types';
import {changeName} from '../../store/formSlice';

const FirstScreen: React.FC<FormScreenProps<ScreensName.FirstScreen>> = ({
  navigation,
}) => {
  const {handleSubmit, control} = useForm({mode: 'onChange'});
  const {errors} = useFormState({control, name: 'user_name'});
  const dispatch = useDispatch();

  const onButtonPress = async () => {
    navigation.navigate(ScreensName.SecondScreen);
  };

  return (
    <View>
      <Input
        title="User name"
        control={control}
        name="user_name"
        rules={{required: {value: true, message: 'Cannot be empty'}}}
        onChangeText={txt => dispatch(changeName(txt))}
      />

      <Button
        title="Submit name"
        onPress={handleSubmit(onButtonPress)}
        disabled={Object.keys(errors).length > 0}
      />
    </View>
  );
};

export default FirstScreen;

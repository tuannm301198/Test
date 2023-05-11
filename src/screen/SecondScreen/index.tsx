import React from 'react';
import {useForm, useFormState} from 'react-hook-form';
import {Alert, Button, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Input from '../../components/Form/Input';
import {FormScreenProps, ScreensName} from '../../routes/types';
import {RootState} from '../../store';
import {changeEmail, useValidateFormMutation} from '../../store/formSlice';

const SecondScreen: React.FC<FormScreenProps<ScreensName.SecondScreen>> = ({
  navigation,
}) => {
  const {handleSubmit, control} = useForm({mode: 'onChange'});
  const {errors} = useFormState({control, name: 'user_email'});
  const userInfo = useSelector((state: RootState) => state.form);
  const dispatch = useDispatch();
  const [validateFormRequest, {isLoading}] = useValidateFormMutation();

  const onButtonPress = async () => {
    try {
      const result = await validateFormRequest(userInfo);
      if (result) {
        navigation.navigate(ScreensName.SuccessScreen);
      } else {
        Alert.alert('Error', 'Something wrong');
      }
    } catch (e: any) {
      Alert.alert('Error', e?.message?.toString());
      console.log('error', e);
    }
  };

  return (
    <View>
      <Input
        title="User email"
        control={control}
        name="user_email"
        rules={{
          pattern: {
            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            message: 'Email format incorrect',
          },
        }}
        onChangeText={txt => dispatch(changeEmail(txt))}
      />
      <Button
        title="Submit email"
        onPress={handleSubmit(onButtonPress)}
        disabled={isLoading || Object.keys(errors).length > 0}
      />
    </View>
  );
};

export default SecondScreen;
